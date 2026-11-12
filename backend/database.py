"""
Подключение к SQLite и создание таблиц.
SQLite — встроенная БД, не требует установки.
Файл cinelib.db создастся автоматически при первом запуске.
"""

import sqlite3
from pathlib import Path

# Путь к файлу базы данных (в той же папке, что и этот скрипт)
DB_PATH = Path(__file__).parent / "cinelib.db"


def get_connection() -> sqlite3.Connection:
    """Возвращает новое соединение с БД."""
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row  # чтобы получать строки как словари
    conn.execute("PRAGMA journal_mode=WAL")  # ускоряет запись
    conn.execute("PRAGMA foreign_keys=ON")   # включаем внешние ключи
    return conn


def init_db():
    """Создаёт таблицы, если их ещё нет. Вызывается один раз при старте сервера."""
    conn = get_connection()
    cursor = conn.cursor()

    # Таблица пользователей
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id          INTEGER PRIMARY KEY AUTOINCREMENT,
            name        TEXT    NOT NULL,
            email       TEXT    NOT NULL UNIQUE,
            password_hash TEXT  NOT NULL,
            created_at  TEXT    NOT NULL DEFAULT (datetime('now'))
        )
    """)

    # Таблица фильмов
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS movies (
            id              TEXT PRIMARY KEY,
            title           TEXT NOT NULL,
            original        TEXT NOT NULL,
            year            INTEGER NOT NULL,
            genre           TEXT NOT NULL,
            director        TEXT NOT NULL,
            runtime         TEXT NOT NULL,
            global_rating   REAL,
            status          TEXT NOT NULL,
            cast            TEXT NOT NULL,
            description     TEXT NOT NULL,
            short_desc      TEXT NOT NULL,
            poster          TEXT NOT NULL,
            theme           TEXT NOT NULL
        )
    """)

    # Таблица отзывов (связывает пользователя и фильм)
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS reviews (
            id          TEXT PRIMARY KEY,
            movie_id    TEXT    NOT NULL,
            user_id     INTEGER NOT NULL,
            rating      INTEGER NOT NULL CHECK(rating BETWEEN 1 AND 10),
            text        TEXT    NOT NULL,
            created_at  TEXT    NOT NULL DEFAULT (datetime('now')),
            FOREIGN KEY (movie_id) REFERENCES movies(id) ON DELETE CASCADE,
            FOREIGN KEY (user_id)  REFERENCES users(id)  ON DELETE CASCADE
        )
    """)

    conn.commit()
    conn.close()
    print(f"✅ База данных готова: {DB_PATH}")


# Запускаем создание таблиц при импорте
init_db()