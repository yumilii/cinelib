"""
Схемы запросов и ответов. Pydantic проверяет типы данных автоматически.
"""

from pydantic import BaseModel, EmailStr, Field
from typing import Optional


# --- Аутентификация ---

class RegisterRequest(BaseModel):
    name: str = Field(min_length=2, max_length=50)
    email: EmailStr
    password: str = Field(min_length=6, max_length=100)


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: dict


# --- Пользователь ---

class UserResponse(BaseModel):
    id: int
    name: str
    email: str


class UpdateProfileRequest(BaseModel):
    name: str = Field(min_length=2, max_length=50)
    email: EmailStr
    password: Optional[str] = Field(None, min_length=6, max_length=100)


# --- Фильмы ---

class MovieResponse(BaseModel):
    id: str
    title: str
    original: str
    year: int
    genre: str
    director: str
    runtime: str
    global_rating: Optional[float]
    status: str
    cast: str
    description: str
    short_desc: str
    poster: str
    theme: str


# --- Отзывы ---

class CreateReviewRequest(BaseModel):
    rating: int = Field(ge=1, le=10)
    text: str = Field(min_length=1, max_length=500)


class ReviewResponse(BaseModel):
    id: str
    movie_id: str
    user_id: int
    author_name: str
    rating: int
    text: str
    created_at: str