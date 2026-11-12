"""
FastAPI-сервер для CineLib.
Запуск: python3 -m uvicorn main:app --reload
"""
import os
from fastapi.staticfiles import StaticFiles
from pathlib import Path
from dotenv import load_dotenv
from fastapi.responses import FileResponse

# Загружаем переменные из .env (работает локально, в Docker — тоже)
load_dotenv()

import uuid
from datetime import datetime, timezone, timedelta
from fastapi import FastAPI, HTTPException, Depends, Header
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from pathlib import Path
from database import get_connection
from auth import hash_password, verify_password, create_access_token, decode_token
from models import (
    RegisterRequest, LoginRequest, TokenResponse,
    UserResponse, UpdateProfileRequest,
    MovieResponse, CreateReviewRequest, ReviewResponse,
)

app = FastAPI(title="CineLib API", version="1.0")

cors_origins = os.getenv("CORS_ORIGINS", "http://localhost:5500,http://127.0.0.1:5500").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Схема безопасности для Swagger (появится кнопка Authorize 🔒)
security = HTTPBearer()

# Путь к favicon (в той же папке, что и main.py)
FAVICON_PATH = Path(__file__).parent / "favicon.svg"


# ============================================================
# Вспомогательная функция: получить текущего пользователя
# ============================================================

def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)) -> dict:
    """
    Читает заголовок Authorization: Bearer <token>
    и возвращает данные пользователя.
    """
    token = credentials.credentials
    payload = decode_token(token)
    if payload is None:
        raise HTTPException(status_code=401, detail="Токен истёк или неверен")
    user_id = payload.get("user_id")
    if user_id is None:
        raise HTTPException(status_code=401, detail="Токен повреждён")
    conn = get_connection()
    user = conn.execute("SELECT id, name, email FROM users WHERE id = ?", (user_id,)).fetchone()
    conn.close()
    if not user:
        raise HTTPException(status_code=401, detail="Пользователь не найден")
    return dict(user)


# ============================================================
# Favicon (чтобы не было 404)
# ============================================================

@app.get("/favicon.ico")
def favicon():
    if FAVICON_PATH.exists():
        return FileResponse(FAVICON_PATH, media_type="image/svg+xml")
    raise HTTPException(status_code=404, detail="Favicon not found")


# ============================================================
# Главная страница
# ============================================================

@app.get("/")
def root():
    return FileResponse(str(STATIC_DIR / "index.html"))


# ============================================================
# 1. РЕГИСТРАЦИЯ
# ============================================================

@app.post("/api/auth/register", response_model=TokenResponse)
def register(data: RegisterRequest):
    conn = get_connection()
    existing = conn.execute("SELECT id FROM users WHERE email = ?", (data.email,)).fetchone()
    if existing:
        conn.close()
        raise HTTPException(status_code=409, detail="Пользователь с такой почтой уже существует")
    password_hash = hash_password(data.password)
    conn.execute(
        "INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)",
        (data.name, data.email, password_hash)
    )
    conn.commit()
    user_row = conn.execute("SELECT id FROM users WHERE email = ?", (data.email,)).fetchone()
    user_id = user_row["id"]
    user = {"id": user_id, "name": data.name, "email": data.email}
    token = create_access_token({"user_id": user_id})
    conn.close()
    return TokenResponse(access_token=token, user=user)


# ============================================================
# 2. ВХОД
# ============================================================

@app.post("/api/auth/login", response_model=TokenResponse)
def login(data: LoginRequest):
    conn = get_connection()
    user = conn.execute(
        "SELECT id, name, email, password_hash FROM users WHERE email = ?",
        (data.email,)
    ).fetchone()
    conn.close()
    if not user:
        raise HTTPException(status_code=401, detail="Неверная почта или пароль")
    if not verify_password(data.password, user["password_hash"]):
        raise HTTPException(status_code=401, detail="Неверная почта или пароль")
    user_data = {"id": user["id"], "name": user["name"], "email": user["email"]}
    token = create_access_token({"user_id": user["id"]})
    return TokenResponse(access_token=token, user=user_data)


# ============================================================
# 3. ТЕКУЩИЙ ПОЛЬЗОВАТЕЛЬ
# ============================================================

@app.get("/api/me", response_model=UserResponse)
def get_me(user: dict = Depends(get_current_user)):
    return UserResponse(**user)


# ============================================================
# 4. ОБНОВИТЬ ПРОФИЛЬ
# ============================================================

@app.put("/api/me", response_model=UserResponse)
def update_me(data: UpdateProfileRequest, user: dict = Depends(get_current_user)):
    conn = get_connection()
    existing = conn.execute(
        "SELECT id FROM users WHERE email = ? AND id != ?",
        (data.email, user["id"])
    ).fetchone()
    if existing:
        conn.close()
        raise HTTPException(status_code=409, detail="Этот email уже используется")
    if data.password:
        new_hash = hash_password(data.password)
        conn.execute(
            "UPDATE users SET name = ?, email = ?, password_hash = ? WHERE id = ?",
            (data.name, data.email, new_hash, user["id"])
        )
    else:
        conn.execute(
            "UPDATE users SET name = ?, email = ? WHERE id = ?",
            (data.name, data.email, user["id"])
        )
    conn.commit()
    conn.close()
    return UserResponse(id=user["id"], name=data.name, email=data.email)


# ============================================================
# 5. СПИСОК ФИЛЬМОВ
# ============================================================

@app.get("/api/movies", response_model=list[MovieResponse])
def list_movies():
    conn = get_connection()
    rows = conn.execute("SELECT * FROM movies ORDER BY year DESC, title").fetchall()
    conn.close()
    return [dict(r) for r in rows]


# ============================================================
# 6. ОДИН ФИЛЬМ ПО ID
# ============================================================

@app.get("/api/movies/{movie_id}", response_model=MovieResponse)
def get_movie(movie_id: str):
    conn = get_connection()
    movie = conn.execute("SELECT * FROM movies WHERE id = ?", (movie_id,)).fetchone()
    conn.close()
    if not movie:
        raise HTTPException(status_code=404, detail="Фильм не найден")
    return dict(movie)


# ============================================================
# 7. ОТЗЫВЫ ФИЛЬМА
# ============================================================

@app.get("/api/movies/{movie_id}/reviews", response_model=list[ReviewResponse])
def list_reviews(movie_id: str):
    conn = get_connection()
    rows = conn.execute("""
        SELECT r.id, r.movie_id, r.user_id, u.name AS author_name,
               r.rating, r.text, r.created_at
        FROM reviews r
        JOIN users u ON u.id = r.user_id
        WHERE r.movie_id = ?
        ORDER BY r.created_at DESC
    """, (movie_id,)).fetchall()
    conn.close()
    return [dict(r) for r in rows]


# ============================================================
# 8. СОЗДАТЬ ОТЗЫВ
# ============================================================

@app.post("/api/movies/{movie_id}/reviews", response_model=ReviewResponse)
def create_review(movie_id: str, data: CreateReviewRequest, user: dict = Depends(get_current_user)):
    conn = get_connection()
    movie = conn.execute("SELECT id FROM movies WHERE id = ?", (movie_id,)).fetchone()
    if not movie:
        conn.close()
        raise HTTPException(status_code=404, detail="Фильм не найден")
    review_id = f"{uuid.uuid4().hex[:8]}-{int(datetime.now(timezone.utc).timestamp())}"
    conn.execute(
        "INSERT INTO reviews (id, movie_id, user_id, rating, text) VALUES (?, ?, ?, ?, ?)",
        (review_id, movie_id, user["id"], data.rating, data.text)
    )
    conn.commit()
    review = conn.execute("""
        SELECT r.id, r.movie_id, r.user_id, u.name AS author_name,
               r.rating, r.text, r.created_at
        FROM reviews r JOIN users u ON u.id = r.user_id
        WHERE r.id = ?
    """, (review_id,)).fetchone()
    conn.close()
    return dict(review)


# ============================================================
# 9. УДАЛИТЬ СВОЙ ОТЗЫВ
# ============================================================

@app.delete("/api/movies/{movie_id}/reviews/{review_id}")
def delete_review(movie_id: str, review_id: str, user: dict = Depends(get_current_user)):
    conn = get_connection()
    review = conn.execute(
        "SELECT id, user_id FROM reviews WHERE id = ? AND movie_id = ?",
        (review_id, movie_id)
    ).fetchone()
    if not review:
        conn.close()
        raise HTTPException(status_code=404, detail="Отзыв не найден")
    if review["user_id"] != user["id"]:
        conn.close()
        raise HTTPException(status_code=403, detail="Можно удалять только свои отзывы")
    conn.execute("DELETE FROM reviews WHERE id = ?", (review_id,))
    conn.commit()
    conn.close()
    return {"ok": True}

# Раздаём статику (фронтенд) через FastAPI
BASE_DIR = Path(__file__).parent
STATIC_DIR = BASE_DIR / "static"

if STATIC_DIR.exists():
    app.mount("/static", StaticFiles(directory=str(STATIC_DIR)), name="static")

    # Главная страница — index.html
    @app.get("/")
    def root():
        return FileResponse(str(STATIC_DIR / "index.html"))

    # Любые другие HTML-страницы
    @app.get("/{page_name}")
    def serve_page(page_name: str):
        # Если page_name уже содержит .html, не добавляем расширение
        if page_name.endswith(".html"):
            page_path = STATIC_DIR / page_name
        else:
            page_path = STATIC_DIR / f"{page_name}.html"
        
        if page_path.exists():
            return FileResponse(str(page_path))
        raise HTTPException(status_code=404, detail="Страница не найдена")

# ============================================================
# ЗАПУСК
# ============================================================

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)