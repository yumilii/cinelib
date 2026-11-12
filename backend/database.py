"""
Подключение к SQLite и создание таблиц.
"""

import sqlite3
from pathlib import Path

DB_PATH = Path(__file__).parent / "cinelib.db"


def get_connection() -> sqlite3.Connection:
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA journal_mode=WAL")
    conn.execute("PRAGMA foreign_keys=ON")
    return conn


def init_db():
    """Создаёт таблицы, если их ещё нет."""
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id          INTEGER PRIMARY KEY AUTOINCREMENT,
            name        TEXT    NOT NULL,
            email       TEXT    NOT NULL UNIQUE,
            password_hash TEXT  NOT NULL,
            created_at  TEXT    NOT NULL DEFAULT (datetime('now'))
        )
    """)

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


if __name__ == "__main__":
    init_db()
    print("✅ База данных готова")