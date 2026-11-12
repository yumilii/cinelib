"""
Наполнение базы данных тестовыми фильмами.
Вызывается автоматически при первом запуске сервера.
"""

from database import get_connection

MOVIES = [
    {
        "id": "resident-evil", "title": "Обитель зла", "original": "Resident Evil",
        "year": 2026, "genre": "Ужасы · Боевик", "director": "Зак Креггер",
        "runtime": "94 мин.", "global_rating": None,
        "status": "Премьера: 18 сентября 2026",
        "cast": "Остин Абрамс, Зак Черри, Кали Рейс",
        "description": "Медицинский курьер оказывается в эпицентре кошмара...",
        "short_desc": "Одна ночь превращается в отчаянную борьбу за выживание.",
        "poster": "/static/images/resident-evil.svg", "theme": "horror"
    },
    {
        "id": "obsession", "title": "Обсессия", "original": "Obsession",
        "year": 2026, "genre": "Ужасы · Триллер", "director": "Карри Баркер",
        "runtime": "108 мин.", "global_rating": None,
        "status": "Вышел в 2026 году",
        "cast": "Майкл Джонстон, Инде Наварретт",
        "description": "Желание завоевать сердце любимой становится началом пугающей истории.",
        "short_desc": "У исполнения мечты есть страшная цена.",
        "poster": "/static/images/obsession.svg", "theme": "red"
    },
    {
        "id": "backrooms", "title": "Бекрумс", "original": "Backrooms",
        "year": 2026, "genre": "Ужасы · Мистика", "director": "Кейн Парсонс",
        "runtime": "110 мин.", "global_rating": None,
        "status": "Премьера: 29 мая 2026",
        "cast": "Лукита Максвелл, Финн Беннетт",
        "description": "В подвале мебельного магазина появляется странный проход...",
        "short_desc": "Пространство, которое не подчиняется законам реальности.",
        "poster": "/static/images/backrooms.svg", "theme": "liminal"
    },
    {
        "id": "exit-8", "title": "Выход 8", "original": "Exit 8",
        "year": 2025, "genre": "Психологический хоррор", "director": "Гэнки Кавамура",
        "runtime": "95 мин.", "global_rating": None,
        "status": "Вышел в 2025 году",
        "cast": "Кадзунари Ниномия, Ямато Коти",
        "description": "Мужчина оказывается в бесконечном переходе метро...",
        "short_desc": "Чтобы найти выход, нужно замечать малейшие отклонения.",
        "poster": "/static/images/exit-8.svg", "theme": "liminal"
    },
    {
        "id": "spider-man", "title": "Человек-паук: Новый день",
        "original": "Spider-Man: Brand New Day",
        "year": 2026, "genre": "Супергероика · Боевик",
        "director": "Дестин Дэниел Креттон",
        "runtime": "Уточняется", "global_rating": None,
        "status": "Фильм 2026 года",
        "cast": "Том Холланд, Зендея, Джейкоб Баталон",
        "description": "Питер Паркер продолжает защищать город...",
        "short_desc": "Новая угроза заставляет героя измениться.",
        "poster": "/static/images/spider-man.svg", "theme": "blue"
    },
    {
        "id": "odyssey", "title": "Одиссея", "original": "The Odyssey",
        "year": 2026, "genre": "Эпическое приключение · Боевик",
        "director": "Кристофер Нолан",
        "runtime": "Уточняется", "global_rating": None,
        "status": "Фильм 2026 года",
        "cast": "Мэтт Дэймон, Том Холланд, Энн Хэтэуэй",
        "description": "Экранизация эпоса Гомера...",
        "short_desc": "Путешествие домой после Троянской войны.",
        "poster": "/static/images/odyssey.svg", "theme": "gold"
    },
    {
        "id": "michael", "title": "Майкл", "original": "Michael",
        "year": 2026, "genre": "Биография · Музыка · Драма",
        "director": "Антуан Фукуа",
        "runtime": "127 мин.", "global_rating": None,
        "status": "Вышел в 2026 году",
        "cast": "Джаафар Джексон, Ниа Лонг",
        "description": "Биографическая драма о Майкле Джексоне...",
        "short_desc": "От первых выступлений до мировой славы.",
        "poster": "/static/images/michael.svg", "theme": "gold"
    },
    {
        "id": "the-drama", "title": "Драма", "original": "The Drama",
        "year": 2026, "genre": "Драма · Чёрная комедия",
        "director": "Кристоффер Боргли",
        "runtime": "105 мин.", "global_rating": 7.1,
        "status": "Вышел в 2026 году",
        "cast": "Зендея, Роберт Паттинсон",
        "description": "Подготовка к свадьбе превращается в эмоциональное испытание...",
        "short_desc": "Влюблённым предстоит заново взглянуть друг на друга.",
        "poster": "/static/images/the-drama.svg", "theme": "pink"
    },
    {
        "id": "little-women", "title": "Маленькие женщины",
        "original": "Little Women",
        "year": 2019, "genre": "Драма · Мелодрама",
        "director": "Грета Гервиг",
        "runtime": "135 мин.", "global_rating": 7.8,
        "status": "Фильм 2019 года",
        "cast": "Сирша Ронан, Эмма Уотсон, Флоренс Пью",
        "description": "История сестёр Марч в XIX веке...",
        "short_desc": "Четыре сестры ищут собственное место в мире.",
        "poster": "/static/images/little-women.svg", "theme": "cream"
    },
    {
        "id": "wuthering-heights", "title": "Грозовой перевал",
        "original": "Wuthering Heights",
        "year": 2026, "genre": "Драма · Романтика",
        "director": "Эмеральд Феннелл",
        "runtime": "135 мин.", "global_rating": None,
        "status": "Фильм 2026 года",
        "cast": "Марго Робби, Джейкоб Элорди",
        "description": "Страстная история Кэтрин и Хитклиффа...",
        "short_desc": "Чувства сталкиваются с гордостью и жаждой мести.",
        "poster": "/static/images/wuthering-heights.svg", "theme": "storm"
    },
    {
        "id": "beautiful-mind", "title": "Игры разума",
        "original": "A Beautiful Mind",
        "year": 2001, "genre": "Биография · Драма",
        "director": "Рон Ховард",
        "runtime": "135 мин.", "global_rating": 8.2,
        "status": "Классика кино",
        "cast": "Рассел Кроу, Дженнифер Коннелли",
        "description": "Талантливый математик Джон Нэш...",
        "short_desc": "Борьба за карьеру, отношения и восприятие реальности.",
        "poster": "/static/images/beautiful-mind.svg", "theme": "blue"
    },
    {
        "id": "mickey-17", "title": "Микки 17", "original": "Mickey 17",
        "year": 2025, "genre": "Научная фантастика · Чёрная комедия",
        "director": "Пон Джун-хо",
        "runtime": "137 мин.", "global_rating": 6.8,
        "status": "Вышел в 2025 году",
        "cast": "Роберт Паттинсон, Наоми Аки",
        "description": "Микки участвует в космической экспедиции...",
        "short_desc": "Сотрудника можно восстановить после смерти.",
        "poster": "/static/images/mickey-17.svg", "theme": "orange"
    },
    {
        "id": "now-you-see-me-3", "title": "Иллюзия обмана 3",
        "original": "Now You See Me: Now You Don't",
        "year": 2025, "genre": "Криминал · Триллер · Приключения",
        "director": "Рубен Фляйшер",
        "runtime": "113 мин.", "global_rating": 6.2,
        "status": "Вышел в 2025 году",
        "cast": "Джесси Айзенберг, Вуди Харрельсон",
        "description": "Четыре всадники возвращаются...",
        "short_desc": "Раскрыть масштабную аферу.",
        "poster": "/static/images/now-you-see-me-3.svg", "theme": "purple"
    },
    {
        "id": "inception", "title": "Начало", "original": "Inception",
        "year": 2010, "genre": "Фантастика · Триллер",
        "director": "Кристофер Нолан",
        "runtime": "148 мин.", "global_rating": 8.8,
        "status": "Классика кино",
        "cast": "Леонардо ДиКаприо, Джозеф Гордон-Левитт",
        "description": "Вор, крадущий секреты из снов...",
        "short_desc": "Сон внутри сна внутри сна.",
        "poster": "/static/images/inception.svg", "theme": "blue"
    },
    {
        "id": "interstellar", "title": "Интерстеллар", "original": "Interstellar",
        "year": 2014, "genre": "Фантастика · Драма",
        "director": "Кристофер Нолан",
        "runtime": "169 мин.", "global_rating": 8.7,
        "status": "Классика кино",
        "cast": "Мэттью Макконахи, Энн Хэтэуэй",
        "description": "Группа исследователей отправляется через червоточину...",
        "short_desc": "Любовь transcends время и пространство.",
        "poster": "/static/images/interstellar.svg", "theme": "gold"
    },
]


def seed_movies():
    """Наполняет таблицу movies данными. Вызывается автоматически."""
    conn = get_connection()
    cursor = conn.cursor()
    
    inserted = 0
    for m in MOVIES:
        try:
            cursor.execute(
                """INSERT INTO movies 
                   (id, title, original, year, genre, director, runtime, 
                    global_rating, status, cast, description, short_desc, poster, theme)
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)""",
                (m["id"], m["title"], m["original"], m["year"], m["genre"],
                 m["director"], m["runtime"], m["global_rating"], m["status"],
                 m["cast"], m["description"], m["short_desc"], m["poster"], m["theme"])
            )
            inserted += 1
        except Exception as e:
            print(f"⚠️  Пропущен {m['id']}: {e}")
    
    conn.commit()
    conn.close()
    print(f"✅ Добавлено фильмов: {inserted}")


if __name__ == "__main__":
    seed_movies()