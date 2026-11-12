import sqlite3

conn = sqlite3.connect("cinelib.db")
conn.row_factory = sqlite3.Row

print("=== ПОЛЬЗОВАТЕЛИ ===")
for row in conn.execute("SELECT id, name, email, password_hash FROM users"):
    print(f"  ID={row['id']}, name={row['name']}, email={row['email']}, hash={row['password_hash'][:20]}...")

print("\n=== ФИЛЬМЫ ===")
for row in conn.execute("SELECT id, title, year FROM movies"):
    print(f"  ID={row['id']}, title={row['title']}, year={row['year']}")

print("\n=== ОТЗЫВЫ ===")
for row in conn.execute("""
    SELECT r.id, r.rating, r.text, u.name AS author 
    FROM reviews r JOIN users u ON u.id = r.user_id
"""):
    print(f"  ID={row['id']}, author={row['author']}, rating={row['rating']}, text={row['text'][:50]}...")

conn.close()