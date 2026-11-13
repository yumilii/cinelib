// Массив фильмов (данные из seed.py, пути исправлены)
const MOVIES = [
  {
    id: "resident-evil", title: "Обитель зла", original: "Resident Evil",
    year: 2026, genre: "Ужасы · Боевик", director: "Зак Креггер",
    runtime: "94 мин.", globalRating: null,
    status: "Премьера: 18 сентября 2026",
    cast: "Остин Абрамс, Зак Черри, Кали Рейс",
    desc: "Медицинский курьер оказывается в эпицентре кошмара...",
    short: "Одна ночь превращается в отчаянную борьбу за выживание.",
    poster: "/static/images/resident-evil.svg", theme: "horror"
  },
  {
    id: "obsession", title: "Обсессия", original: "Obsession",
    year: 2026, genre: "Ужасы · Триллер", director: "Карри Баркер",
    runtime: "108 мин.", globalRating: null,
    status: "Вышел в 2026 году",
    cast: "Майкл Джонстон, Инде Наварретт",
    desc: "Желание завоевать сердце любимой становится началом пугающей истории.",
    short: "У исполнения мечты есть страшная цена.",
    poster: "/static/images/obsession.svg", theme: "red"
  },
  {
    id: "backrooms", title: "Бекрумс", original: "Backrooms",
    year: 2026, genre: "Ужасы · Мистика", director: "Кейн Парсонс",
    runtime: "110 мин.", globalRating: null,
    status: "Премьера: 29 мая 2026",
    cast: "Лукита Максвелл, Финн Беннетт",
    desc: "В подвале мебельного магазина появляется странный проход...",
    short: "Пространство, которое не подчиняется законам реальности.",
    poster: "/static/images/backrooms.svg", theme: "liminal"
  },
  {
    id: "exit-8", title: "Выход 8", original: "Exit 8",
    year: 2025, genre: "Психологический хоррор", director: "Гэнки Кавамура",
    runtime: "95 мин.", globalRating: null,
    status: "Вышел в 2025 году",
    cast: "Кадзунари Ниномия, Ямато Коти",
    desc: "Мужчина оказывается в бесконечном переходе метро...",
    short: "Чтобы найти выход, нужно замечать малейшие отклонения.",
    poster: "/static/images/exit-8.svg", theme: "liminal"
  },
  {
    id: "spider-man", title: "Человек-паук: Новый день",
    original: "Spider-Man: Brand New Day",
    year: 2026, genre: "Супергероика · Боевик",
    director: "Дестин Дэниел Креттон",
    runtime: "Уточняется", globalRating: null,
    status: "Фильм 2026 года",
    cast: "Том Холланд, Зендея, Джейкоб Баталон",
    desc: "Питер Паркер продолжает защищать город...",
    short: "Новая угроза заставляет героя измениться.",
    poster: "/static/images/spider-man.svg", theme: "blue"
  },
  {
    id: "odyssey", title: "Одиссея", original: "The Odyssey",
    year: 2026, genre: "Эпическое приключение · Боевик",
    director: "Кристофер Нолан",
    runtime: "Уточняется", globalRating: null,
    status: "Фильм 2026 года",
    cast: "Мэтт Дэймон, Том Холланд, Энн Хэтэуэй",
    desc: "Экранизация эпоса Гомера...",
    short: "Путешествие домой после Троянской войны.",
    poster: "/static/images/odyssey.svg", theme: "gold"
  },
  {
    id: "michael", title: "Майкл", original: "Michael",
    year: 2026, genre: "Биография · Музыка · Драма",
    director: "Антуан Фукуа",
    runtime: "127 мин.", globalRating: null,
    status: "Вышел в 2026 году",
    cast: "Джаафар Джексон, Ниа Лонг",
    desc: "Биографическая драма о Майкле Джексоне...",
    short: "От первых выступлений до мировой славы.",
    poster: "/static/images/michael.svg", theme: "gold"
  },
  {
    id: "the-drama", title: "Драма", original: "The Drama",
    year: 2026, genre: "Драма · Чёрная комедия",
    director: "Кристоффер Боргли",
    runtime: "105 мин.", globalRating: 7.1,
    status: "Вышел в 2026 году",
    cast: "Зендея, Роберт Паттинсон",
    desc: "Подготовка к свадьбе превращается в эмоциональное испытание...",
    short: "Влюблённым предстоит заново взглянуть друг на друга.",
    poster: "/static/images/the-drama.svg", theme: "pink"
  },
  {
    id: "little-women", title: "Маленькие женщины",
    original: "Little Women",
    year: 2019, genre: "Драма · Мелодрама",
    director: "Грета Гервиг",
    runtime: "135 мин.", globalRating: 7.8,
    status: "Фильм 2019 года",
    cast: "Сирша Ронан, Эмма Уотсон, Флоренс Пью",
    desc: "История сестёр Марч в XIX веке...",
    short: "Четыре сестры ищут собственное место в мире.",
    poster: "/static/images/little-women.svg", theme: "cream"
  },
  {
    id: "wuthering-heights", title: "Грозовой перевал",
    original: "Wuthering Heights",
    year: 2026, genre: "Драма · Романтика",
    director: "Эмеральд Феннелл",
    runtime: "135 мин.", globalRating: null,
    status: "Фильм 2026 года",
    cast: "Марго Робби, Джейкоб Элорди",
    desc: "Страстная история Кэтрин и Хитклиффа...",
    short: "Чувства сталкиваются с гордостью и жаждой мести.",
    poster: "/static/images/wuthering-heights.svg", theme: "storm"
  },
  {
    id: "beautiful-mind", title: "Игры разума",
    original: "A Beautiful Mind",
    year: 2001, genre: "Биография · Драма",
    director: "Рон Ховард",
    runtime: "135 мин.", globalRating: 8.2,
    status: "Классика кино",
    cast: "Рассел Кроу, Дженнифер Коннелли",
    desc: "Талантливый математик Джон Нэш...",
    short: "Борьба за карьеру, отношения и восприятие реальности.",
    poster: "/static/images/beautiful-mind.svg", theme: "blue"
  },
  {
    id: "mickey-17", title: "Микки 17", original: "Mickey 17",
    year: 2025, genre: "Научная фантастика · Чёрная комедия",
    director: "Пон Джун-хо",
    runtime: "137 мин.", globalRating: 6.8,
    status: "Вышел в 2025 году",
    cast: "Роберт Паттинсон, Наоми Аки",
    desc: "Микки участвует в космической экспедиции...",
    short: "Сотрудника можно восстановить после смерти.",
    poster: "/static/images/mickey-17.svg", theme: "orange"
  },
  {
    id: "now-you-see-me-3", title: "Иллюзия обмана 3",
    original: "Now You See Me: Now You Don't",
    year: 2025, genre: "Криминал · Триллер · Приключения",
    director: "Рубен Фляйшер",
    runtime: "113 мин.", globalRating: 6.2,
    status: "Вышел в 2025 году",
    cast: "Джесси Айзенберг, Вуди Харрельсон",
    desc: "Четыре всадника возвращаются...",
    short: "Раскрыть масштабную аферу.",
    poster: "/static/images/now-you-see-me-3.svg", theme: "purple"
  }
];

// ============================================================
// АВТОРИЗАЦИЯ (localStorage — учебная версия)
// ============================================================

function getUsers() {
  try { return JSON.parse(localStorage.getItem("cinelib-users") || "[]"); }
  catch { return []; }
}
function saveUsers(users) {
  localStorage.setItem("cinelib-users", JSON.stringify(users));
}
function getCurrentUser() {
  try { return JSON.parse(localStorage.getItem("cinelib-current-user") || "null"); }
  catch { return null; }
}
function setCurrentUser(user) {
  if (user) localStorage.setItem("cinelib-current-user", JSON.stringify(user));
  else localStorage.removeItem("cinelib-current-user");
}
function isLoggedIn() {
  return getCurrentUser() !== null;
}

function getInitials(name) {
  if (!name) return "?";
  return name.trim().charAt(0).toUpperCase();
}

function renderProfileIcon() {
  const headerInner = document.querySelector(".header-inner");
  if (!headerInner) return;
  const oldIcon = headerInner.querySelector(".profile-icon");
  if (oldIcon) oldIcon.remove();
  const oldAuth = headerInner.querySelector(".auth-buttons");
  if (oldAuth) oldAuth.remove();

  const user = getCurrentUser();
  if (user) {
    const icon = document.createElement("a");
    icon.href = "/profile.html";
    icon.className = "profile-icon";
    icon.setAttribute("aria-label", "Профиль: " + user.name);
    icon.textContent = getInitials(user.name);
    headerInner.appendChild(icon);
  } else {
    const authDiv = document.createElement("div");
    authDiv.className = "auth-buttons";
    const loginBtn = document.createElement("button");
    loginBtn.className = "auth-btn auth-btn-login";
    loginBtn.textContent = "Войти";
    loginBtn.addEventListener("click", () => openAuthModal("login"));
    const registerBtn = document.createElement("button");
    registerBtn.className = "auth-btn auth-btn-register";
    registerBtn.textContent = "Регистрация";
    registerBtn.addEventListener("click", () => openAuthModal("register"));
    authDiv.appendChild(loginBtn);
    authDiv.appendChild(registerBtn);
    headerInner.appendChild(authDiv);
  }
  updateFavoritesVisibility();
}

function updateFavoritesVisibility() {
  const favLink = document.querySelector(".nav-favorites");
  if (favLink) favLink.classList.toggle("hidden", !isLoggedIn());
}

// ============================================================
// МОДАЛЬНОЕ ОКНО
// ============================================================

function openAuthModal(tab = "login") {
  const modal = document.getElementById("auth-modal");
  if (!modal) return;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  const tabs = modal.querySelectorAll(".auth-tab");
  const forms = modal.querySelectorAll(".auth-form");
  tabs.forEach(t => t.classList.remove("active"));
  forms.forEach(f => f.hidden = true);
  if (tab === "login") { tabs[0].classList.add("active"); forms[0].hidden = false; }
  else { tabs[1].classList.add("active"); forms[1].hidden = false; }
}

function closeAuthModal() {
  const modal = document.getElementById("auth-modal");
  if (!modal) return;
  modal.hidden = true;
  document.body.style.overflow = "";
  modal.querySelectorAll(".auth-form").forEach(f => {
    f.reset();
    const s = f.querySelector(".auth-status");
    if (s) { s.textContent = ""; s.classList.remove("error"); }
  });
}

function showAuthStatus(form, msg, isError = false) {
  const s = form.querySelector(".auth-status");
  if (s) { s.textContent = msg; s.classList.toggle("error", isError); }
}

function checkAuthForAction() {
  if (!isLoggedIn()) { openAuthModal("login"); return false; }
  return true;
}

function setupAuthModal() {
  const modal = document.getElementById("auth-modal");
  if (!modal) return;
  modal.hidden = true;

  const overlay = modal.querySelector(".auth-modal-overlay");
  if (overlay) overlay.addEventListener("click", closeAuthModal);

  const closeBtn = modal.querySelector(".auth-modal-close");
  if (closeBtn) closeBtn.addEventListener("click", e => { e.preventDefault(); closeAuthModal(); });

  const tabs = modal.querySelectorAll(".auth-tab");
  const forms = modal.querySelectorAll(".auth-form");
  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      forms.forEach(f => f.hidden = true);
      tab.classList.add("active");
      forms[i].hidden = false;
    });
  });

  const loginForm = modal.querySelector("#login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", e => {
      e.preventDefault();
      const email = loginForm.querySelector("#login-email").value.trim();
      const password = loginForm.querySelector("#login-password").value;
      if (!email || !password) { showAuthStatus(loginForm, "Заполните все поля", true); return; }
      const users = getUsers();
      const user = users.find(u => u.email === email && u.password === password);
      if (!user) { showAuthStatus(loginForm, "Неверная почта или пароль", true); return; }
      setCurrentUser(user);
      closeAuthModal();
      renderProfileIcon();
    });
  }

  const registerForm = modal.querySelector("#register-form");
  if (registerForm) {
    registerForm.addEventListener("submit", e => {
      e.preventDefault();
      const name = registerForm.querySelector("#register-name").value.trim();
      const email = registerForm.querySelector("#register-email").value.trim();
      const password = registerForm.querySelector("#register-password").value;
      if (name.length < 2) { showAuthStatus(registerForm, "Ник мин. 2 символа", true); return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showAuthStatus(registerForm, "Неверный email", true); return; }
      if (password.length < 6) { showAuthStatus(registerForm, "Пароль мин. 6 символов", true); return; }
      const users = getUsers();
      if (users.find(u => u.email === email)) { showAuthStatus(registerForm, "Пользователь уже существует", true); return; }
      const newUser = { name, email, password };
      users.push(newUser);
      saveUsers(users);
      setCurrentUser(newUser);
      closeAuthModal();
      renderProfileIcon();
    });
  }

  document.addEventListener("keydown", e => { if (e.key === "Escape" && !modal.hidden) closeAuthModal(); });
}

// ============================================================
// ПРОФИЛЬ
// ============================================================

function setupProfileForm() {
  const form = document.querySelector("#profile-form");
  if (!form) return;
  const user = getCurrentUser();
  if (!user) { window.location.href = "/"; return; }

  const nameField = form.querySelector("#profile-name");
  const emailField = form.querySelector("#profile-email");
  const passwordField = form.querySelector("#profile-password");
  const status = document.querySelector("#profile-status");

  nameField.value = user.name || "";
  emailField.value = user.email || "";

  function clearError(field) {
    field.closest(".field").classList.remove("field-error");
    const msg = field.closest(".field").querySelector(".error-message");
    if (msg) msg.remove();
  }
  function showError(field, text) {
    field.closest(".field").classList.add("field-error");
    const existing = field.closest(".field").querySelector(".error-message");
    if (existing) existing.remove();
    const msg = document.createElement("span");
    msg.className = "error-message";
    msg.textContent = text;
    field.closest(".field").appendChild(msg);
  }

  nameField.addEventListener("input", () => { if (nameField.value.trim().length >= 2) clearError(nameField); });
  emailField.addEventListener("input", () => { if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value.trim())) clearError(emailField); });
  passwordField.addEventListener("input", () => { if (passwordField.value.length >= 6) clearError(passwordField); });

  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const password = passwordField.value;
    [nameField, emailField, passwordField].forEach(clearError);
    if (name.length < 2) { showError(nameField, "Ник мин. 2 символа"); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showError(emailField, "Неверный email"); return; }
    if (password.length < 6) { showError(passwordField, "Пароль мин. 6 символов"); return; }

    const updatedUser = { ...user, name, email, password };
    setCurrentUser(updatedUser);
    const users = getUsers();
    const idx = users.findIndex(u => u.email === user.email);
    if (idx !== -1) { users[idx] = updatedUser; saveUsers(users); }
    status.textContent = "Профиль обновлён.";
    status.style.color = "var(--text-secondary)";
    renderProfileIcon();
  });
}

function setupLogout() {
  const logoutBtn = document.querySelector("#logout-btn");
  if (!logoutBtn) return;
  logoutBtn.addEventListener("click", () => {
    if (confirm("Выйти из аккаунта?")) {
      setCurrentUser(null);
      renderProfileIcon();
      window.location.href = "/";
    }
  });
}

// ============================================================
// ОТЗЫВЫ
// ============================================================

function getReviews(id) {
  try { return JSON.parse(localStorage.getItem("cinelib-reviews-" + id) || "[]"); }
  catch { return []; }
}
function saveReviews(id, reviews) {
  localStorage.setItem("cinelib-reviews-" + id, JSON.stringify(reviews));
}
function averageUserRating(id) {
  const reviews = getReviews(id);
  if (!reviews.length) return null;
  return reviews.reduce((sum, r) => sum + Number(r.rating), 0) / reviews.length;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

function setupReviews(movie) {
  const form = document.querySelector("#review-form");
  if (!form) return;
  const ratingInput = document.querySelector("#rating-value");
  const picker = document.querySelector("#star-picker");
  const help = document.querySelector("#rating-help");
  const text = document.querySelector("#review-text");

  function paintStars(value) {
    picker.querySelectorAll("[data-rating]").forEach(btn => {
      const selected = Number(btn.dataset.rating) <= value;
      btn.classList.toggle("selected", selected);
    });
    help.textContent = value ? `Твоя оценка: ${value} / 10` : "Пока оценка не выбрана";
  }
  picker.addEventListener("click", e => {
    const btn = e.target.closest("[data-rating]");
    if (!btn) return;
    ratingInput.value = btn.dataset.rating;
    paintStars(Number(btn.dataset.rating));
  });

  function renderReviews() {
    const list = document.querySelector("#review-list");
    const reviews = getReviews(movie.id);
    const avg = averageUserRating(movie.id);
    const summary = avg === null ? "" : `<p style="margin-bottom:16px"><strong>Средняя оценка: ${avg.toFixed(1)} / 10</strong> · ${reviews.length} отзывов</p>`;
    const currentUser = getCurrentUser();

    list.innerHTML = summary + (reviews.length ? reviews.slice().reverse().map(r => `
      <article class="review">
        <div class="review-head"><strong>${escapeHtml(r.name || "Киноман")}</strong><span class="review-score">★ ${r.rating}/10</span></div>
        <p class="review-date">${new Date(r.date).toLocaleString("ru-RU")}</p>
        <p class="review-text">${escapeHtml(r.text)}</p>
        ${currentUser && currentUser.name === r.name ? `<button type="button" class="remove-review" data-delete="${r.id}">Удалить</button>` : ""}
      </article>
    `).join(" ") : `<p class="empty-reviews">Пока нет отзывов. Будь первым!</p>`);

    list.querySelectorAll("[data-delete]").forEach(btn => btn.addEventListener("click", () => {
      const remaining = getReviews(movie.id).filter(r => r.id !== btn.dataset.delete);
      saveReviews(movie.id, remaining);
      renderReviews();
    }));
  }

  form.addEventListener("submit", e => {
    e.preventDefault();
    if (!checkAuthForAction()) return;
    const rating = Number(ratingInput.value);
    const reviewText = text.value.trim();
    if (rating < 1 || rating > 10) { alert("Выбери оценку от 1 до 10"); return; }
    if (!reviewText) { text.focus(); return; }
    const user = getCurrentUser();
    const reviews = getReviews(movie.id);
    reviews.push({
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      rating, name: user.name, text: reviewText, date: new Date().toISOString()
    });
    saveReviews(movie.id, reviews);
    form.reset();
    ratingInput.value = "0";
    paintStars(0);
    renderReviews();
  });

  renderReviews();
}

// ============================================================
// КАРТОЧКИ
// ============================================================

function posterMarkup(movie) {
  return `<div class="poster-art ${movie.theme}" role="img" aria-label="Постер ${movie.title}">
    <img src="${movie.poster}" alt="Постер фильма ${movie.title}" style="width:100%;height:100%;object-fit:cover;border-radius:4px;">
  </div>`;
}

function scoreMarkup(movie) {
  const userAvg = averageUserRating(movie.id);
  if (userAvg !== null) return `<p class="rating">★ ${userAvg.toFixed(1)} / 10 <span class="meta">— оценка пользователей CineLib</span></p>`;
  if (movie.globalRating !== null) return `<p class="rating">★ ${movie.globalRating.toFixed(1)} / 10 <span class="meta">— внешний рейтинг</span></p>`;
  return `<p class="rating-unavailable">Рейтинг пока недоступен — оставь оценку первым.</p>`;
}

function card(movie) {
  return `<article class="poster-card">
    <a class="poster-link" href="/movie.html?id=${encodeURIComponent(movie.id)}">${posterMarkup(movie)}</a>
    <h3><a href="/movie.html?id=${encodeURIComponent(movie.id)}">${movie.title}</a></h3>
    <p class="meta">${movie.year} · ${movie.genre}</p>
    <p class="director">Режиссёр: ${movie.director}</p>
    ${scoreMarkup(movie)}
  </article>`;
}

// ============================================================
// СТРАНИЦЫ
// ============================================================

function renderHome() {
  const grid = document.querySelector("#home-grid");
  if (grid) grid.innerHTML = MOVIES.slice(0, 4).map(card).join(" ");
}

function debounce(fn, delay) {
  let timer;
  return function (...args) { clearTimeout(timer); timer = setTimeout(() => fn.apply(this, args), delay); };
}

function renderCatalog() {
  const grid = document.querySelector("#catalog-grid");
  if (!grid) return;
  const search = document.querySelector("#search");
  const genre = document.querySelector("#genre");
  const type = document.querySelector("#type");
  const sort = document.querySelector("#sort");

  function update() {
    let list = MOVIES.filter(m => {
      const text = `${m.title} ${m.original} ${m.genre} ${m.director}`.toLowerCase();
      const matchSearch = text.includes((search.value || "").toLowerCase().trim());
      const matchGenre = genre.value === "all" || m.genre.toLowerCase().includes(genre.value);
      const matchType = type.value === "all" || (type.value === "released" ? m.globalRating !== null || m.year < 2026 : m.year >= 2026);
      return matchSearch && matchGenre && matchType;
    });
    if (sort.value === "title") list.sort((a, b) => a.title.localeCompare(b.title, "ru"));
    if (sort.value === "year") list.sort((a, b) => b.year - a.year);
    if (sort.value === "rating") list.sort((a, b) => (b.globalRating ?? -1) - (a.globalRating ?? -1));
    grid.innerHTML = list.map(card).join(" ") || `<p>Ничего не найдено.</p>`;
    const count = document.querySelector("#catalog-count");
    if (count) count.textContent = `Найдено: ${list.length}`;
  }

  const debouncedUpdate = debounce(update, 250);
  [search, genre, type, sort].forEach(el => el && el.addEventListener("input", debouncedUpdate));
  update();
}

function renderMovieDetail() {
  const root = document.querySelector("#movie-detail");
  if (!root) return;
  const id = new URLSearchParams(location.search).get("id");
  if (!id) { root.innerHTML = "<p>Фильм не указан.</p>"; return; }
  const movie = MOVIES.find(m => m.id === id);
  if (!movie) { root.innerHTML = "<p>Фильм не найден.</p>"; return; }

  document.title = `${movie.title} — CineLib`;
  const genres = movie.genre.split(" · ").map(g => `<span class="genre-tag">${g}</span>`).join(" ");

  root.innerHTML = `
    <a class="back-link" href="/catalog.html">← Вернуться в каталог</a>
    <section class="detail-grid">
      <div class="detail-poster">${posterMarkup(movie)}</div>
      <article class="detail-copy">
        <p class="eyebrow">${movie.original} / ${movie.year}</p>
        <h1>${movie.title}</h1>
        <div class="genres" style="margin-bottom:16px">${genres}</div>
        <p class="meta"><strong style="color:var(--text-muted);font-size:0.7rem;text-transform:uppercase;letter-spacing:0.1em">Длительность:</strong> ${movie.runtime}</p>
        <p class="meta"><strong style="color:var(--text-muted);font-size:0.7rem;text-transform:uppercase;letter-spacing:0.1em">Режиссёр:</strong> ${movie.director}</p>
        <p class="meta"><strong style="color:var(--text-muted);font-size:0.7rem;text-transform:uppercase;letter-spacing:0.1em">В ролях:</strong> ${movie.cast}</p>
        ${scoreMarkup(movie)}
        <h2>Полное описание</h2>
        <p class="desc">${movie.desc || ""}</p>
      </article>
    </section>
    <section class="review-panel" aria-labelledby="review-title">
      <h2 id="review-title">Добавить свою оценку и отзыв</h2>
      <p>Выбери оценку от 1 до 10 и напиши, что думаешь о фильме.</p>
      <form class="review-form" id="review-form">
        <div>
          <label><strong>Твоя оценка</strong></label>
          <div class="stars" role="group" aria-label="Оценка от 1 до 10" id="star-picker">
            ${Array.from({length:10},(_,i)=>`<button type="button" class="star-button" data-rating="${i+1}" aria-label="${i+1} из 10">★</button>`).join(" ")}
          </div>
          <input type="hidden" id="rating-value" value="0" required>
          <p class="meta" id="rating-help" style="font-size:0.75rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.1em">Пока оценка не выбрана</p>
        </div>
        <div class="field">
          <label for="review-text">Твой отзыв</label>
          <textarea id="review-text" maxlength="500" required placeholder="Напиши своё мнение, до 500 символов"></textarea>
        </div>
        <div><button class="btn" type="submit">Сохранить отзыв и оценку</button></div>
      </form>
      <div class="review-list" id="review-list"></div>
    </section>
  `;
  setupReviews(movie);
}

function renderFavorites() {
  const grid = document.querySelector("#favorites-grid");
  const emptyMsg = document.querySelector("#favorites-empty");
  if (!grid) return;

  if (!isLoggedIn()) {
    grid.innerHTML = `<div class="auth-required">
      <p>Чтобы видеть избранные фильмы, нужно войти в аккаунт.</p>
      <button class="btn" onclick="openAuthModal('login')">Войти</button>
    </div>`;
    if (emptyMsg) emptyMsg.hidden = true;
    return;
  }

  const withReviews = MOVIES.filter(m => getReviews(m.id).length);
  if (withReviews.length === 0) {
    if (emptyMsg) emptyMsg.hidden = false;
    grid.innerHTML = "";
    return;
  }
  if (emptyMsg) emptyMsg.hidden = true;

  grid.innerHTML = withReviews.map(m => {
    const reviews = getReviews(m.id);
    const lastReview = reviews[reviews.length - 1];
    const avg = averageUserRating(m.id);
    const ratingDisplay = avg !== null ? `★ ${avg.toFixed(1)} / 10` : (m.globalRating !== null ? `★ ${m.globalRating.toFixed(1)} / 10` : "Нет оценки");
    const genres = m.genre.split(" · ").map(g => `<span class="genre-tag">${g}</span>`).join(" ");
    return `
    <article class="watch-item">
      ${posterMarkup(m)}
      <div>
        <h3><a href="/movie.html?id=${m.id}">${m.title}</a></h3>
        <p class="meta">${m.original} / ${m.year}</p>
        <div class="genres">${genres}</div>
        <p class="rating" style="font-size:1.2rem;color:var(--accent);margin:8px 0">${ratingDisplay}</p>
        <p class="user-review-text">${lastReview ? escapeHtml(lastReview.text) : "Тут появится отзыв"}</p>
        <a class="btn btn-outline" href="/movie.html?id=${m.id}" style="font-size:0.7rem;padding:10px 20px;margin-top:12px">Открыть и отредактировать</a>
      </div>
    </article>`;
  }).join(" ");
}

// ============================================================
// КОНТАКТЫ
// ============================================================

function setupContactForm() {
  const form = document.querySelector("#contact-form");
  if (!form) return;
  const messageField = form.querySelector("#contact-message");
  const status = document.querySelector("#contact-status");
  if (!messageField) return;

  messageField.addEventListener("input", () => {
    if (messageField.value.trim().length >= 10) {
      messageField.closest(".field").classList.remove("field-error");
      const msg = messageField.closest(".field").querySelector(".error-message");
      if (msg) msg.remove();
    }
  });

  form.addEventListener("submit", e => {
    e.preventDefault();
    const message = messageField.value.trim();
    messageField.closest(".field").classList.remove("field-error");
    const oldMsg = messageField.closest(".field").querySelector(".error-message");
    if (oldMsg) oldMsg.remove();
    if (message.length < 10) {
      messageField.closest(".field").classList.add("field-error");
      const err = document.createElement("span");
      err.className = "error-message";
      err.textContent = "Сообщение должно содержать минимум 10 символов";
      messageField.closest(".field").appendChild(err);
      return;
    }
    const user = getCurrentUser();
    const senderName = (user && user.name) || "Гость";
    status.textContent = `Спасибо, ${senderName}! Сообщение отправлено (демо-режим).`;
    status.style.color = "var(--text-secondary)";
    form.reset();
  });
}

// ============================================================
// КАРТЫ
// ============================================================

const CINEMAS = {
  "москва": [
    { name: "Художественный", address: "Арбатская площадь, 14", coords: [55.7517, 37.5907] },
    { name: "Каро 11 Октябрь", address: "пл. Тверской Заставы, 1", coords: [55.7745, 37.5872] },
    { name: "Октябрь", address: "Новый Арбат, 24", coords: [55.7517, 37.5832] },
    { name: "Синема Парк Европейский", address: "пл. Киевского Вокзала, 2", coords: [55.7443, 37.5667] }
  ],
  "санкт-петербург": [
    { name: "Аврора", address: "Невский проспект, 60", coords: [59.9343, 30.3351] },
    { name: "Великан", address: "Большой проспект П.С., 100", coords: [59.9667, 30.3044] },
    { name: "Каро 8 Питерлэнд", address: "Приморский проспект, 72", coords: [60.0013, 30.3133] },
    { name: "Люмьер", address: "Лиговский проспект, 53", coords: [59.9267, 30.3642] },
    { name: "Морискан", address: "ул. Марата, 86", coords: [59.9258, 30.3565] },
    { name: "Спартак", address: "ул. Седова, 11", coords: [59.9208, 30.4547] }
  ]
};

function normalizeCity(city) {
  return city.toLowerCase().trim()
    .replace(/ё/g, 'е')
    .replace(/санкт-петербург|спб|петербург|питер/g, 'санкт-петербург')
    .replace(/москва|мск/g, 'москва');
}

async function initCinemaMap() {
  const mapContainer = document.querySelector("#map");
  const loadingEl = document.querySelector("#map-loading");
  const errorEl = document.querySelector("#map-error");
  const cinemaListEl = document.querySelector("#cinema-list");
  const cityForm = document.querySelector("#city-form");
  if (!mapContainer) return;

  if (typeof ymaps === "undefined") {
    await new Promise(resolve => {
      const check = setInterval(() => {
        if (typeof ymaps !== "undefined") { clearInterval(check); resolve(); }
      }, 100);
      setTimeout(() => { clearInterval(check); resolve(); }, 10000);
    });
  }
  if (typeof ymaps === "undefined") {
    mapContainer.style.display = "none";
    if (errorEl) { errorEl.hidden = false; errorEl.querySelector("strong").textContent = "Яндекс Карты не загрузились."; }
    return;
  }

  ymaps.ready(() => {
    const map = new ymaps.Map("map", { center: [55.7517, 37.5907], zoom: 11, controls: ["zoomControl"] });

    function renderCinemaList(cinemas) {
      if (!cinemaListEl) return;
      if (cinemas.length === 0) { cinemaListEl.innerHTML = `<p class="intro" style="margin-top:16px">Кинотеатры не найдены.</p>`; return; }
      cinemaListEl.innerHTML = `<h3>Найдено: ${cinemas.length}</h3>` + cinemas.map((c, i) => `
        <div class="cinema-item" data-index="${i}">
          <div class="cinema-name">${c.name}</div>
          <div class="cinema-address">${c.address}</div>
          ${i === 0 ? '<span class="cinema-distance">Ближайший к вам</span>' : ''}
        </div>
      `).join("");
      cinemaListEl.querySelectorAll(".cinema-item").forEach(item => {
        item.addEventListener("click", () => {
          const idx = Number(item.dataset.index);
          map.setCenter(cinemas[idx].coords, 15, { duration: 300 });
        });
      });
    }

    function showCinemasOnMap(cinemas, center, zoom = 11) {
      map.geoObjects.removeAll();
      map.setCenter(center, zoom);
      cinemas.forEach((c, i) => {
        const placemark = new ymaps.Placemark(c.coords, {
          balloonContentHeader: c.name, balloonContentBody: c.address, hintContent: c.name
        }, { preset: i === 0 ? "islands#redCinemaIcon" : "islands#darkGreenCinemaIcon" });
        map.geoObjects.add(placemark);
      });
      renderCinemaList(cinemas);
    }

    async function searchCinemas(city) {
      if (loadingEl) loadingEl.hidden = false;
      if (errorEl) errorEl.hidden = true;
      mapContainer.style.display = "block";
      const normalized = normalizeCity(city);
      if (CINEMAS[normalized]) {
        const center = normalized === "москва" ? [55.7517, 37.5907] : [59.9343, 30.3351];
        showCinemasOnMap(CINEMAS[normalized], center, 11);
        if (loadingEl) loadingEl.hidden = true;
        return;
      }
      try {
        const geoResult = await ymaps.geocode(city, { results: 1 });
        if (geoResult.geoObjects.getLength() === 0) throw new Error("Город не найден");
        const coords = geoResult.geoObjects.get(0).geometry.getCoordinates();
        const searchResult = await ymaps.geocode(coords, {
          kind: "cinema", results: 10,
          boundedBy: [[coords[0] - 0.15, coords[1] - 0.15], [coords[0] + 0.15, coords[1] + 0.15]]
        });
        const cinemas = [];
        searchResult.geoObjects.each(geoObject => {
          const cinemaCoords = geoObject.geometry.getCoordinates();
          const address = geoObject.getAddressLine();
          const name = geoObject.properties.get("name") || "Кинотеатр";
          map.geoObjects.add(new ymaps.Placemark(cinemaCoords, {
            balloonContentHeader: name, balloonContentBody: address, hintContent: name
          }, { preset: "islands#redCinemaIcon" }));
          cinemas.push({ name, address, coords: cinemaCoords });
        });
        map.setCenter(coords, 12);
        renderCinemaList(cinemas);
      } catch (error) {
        if (errorEl) { errorEl.hidden = false; errorEl.querySelector("strong").textContent = "Не удалось найти кинотеатры"; }
      } finally {
        if (loadingEl) loadingEl.hidden = true;
      }
    }

    if (cityForm) {
      cityForm.addEventListener("submit", e => {
        e.preventDefault();
        const city = document.querySelector("#city-input").value.trim();
        if (city) searchCinemas(city);
      });
    }
    searchCinemas("Москва");
  });
}

// ============================================================
// КАСТОМНЫЙ SELECT
// ============================================================

function initCustomSelects() {
  document.querySelectorAll('.filters-bar select').forEach(nativeSelect => {
    const wrapper = document.createElement('div');
    wrapper.className = 'select-wrapper';
    nativeSelect.parentNode.insertBefore(wrapper, nativeSelect);
    wrapper.appendChild(nativeSelect);

    const customSelect = document.createElement('div');
    customSelect.className = 'custom-select';
    customSelect.setAttribute('tabindex', '0');
    customSelect.setAttribute('role', 'combobox');
    customSelect.setAttribute('aria-expanded', 'false');

    const list = document.createElement('ul');
    list.className = 'custom-select-list';
    list.setAttribute('role', 'listbox');

    Array.from(nativeSelect.options).forEach(option => {
      const li = document.createElement('li');
      li.setAttribute('role', 'option');
      li.setAttribute('data-value', option.value);
      li.textContent = option.textContent;
      if (option.selected) li.classList.add('selected');
      li.addEventListener('click', () => {
        nativeSelect.value = option.value;
        nativeSelect.dispatchEvent(new Event('input', { bubbles: true }));
        list.querySelectorAll('li').forEach(l => l.classList.remove('selected'));
        li.classList.add('selected');
        customSelect.querySelector('.custom-select-text').textContent = option.textContent;
        closeAllSelects();
      });
      list.appendChild(li);
    });

    const textSpan = document.createElement('span');
    textSpan.className = 'custom-select-text';
    textSpan.textContent = nativeSelect.options[nativeSelect.selectedIndex].textContent;
    customSelect.appendChild(textSpan);
    customSelect.appendChild(list);
    wrapper.appendChild(customSelect);

    customSelect.addEventListener('click', e => {
      e.stopPropagation();
      const isOpen = customSelect.classList.contains('open');
      closeAllSelects();
      if (!isOpen) { customSelect.classList.add('open'); customSelect.setAttribute('aria-expanded', 'true'); }
    });
    document.addEventListener('click', () => closeAllSelects());
  });

  function closeAllSelects() {
    document.querySelectorAll('.custom-select.open').forEach(cs => {
      cs.classList.remove('open');
      cs.setAttribute('aria-expanded', 'false');
    });
  }
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAllSelects(); });
}

// ============================================================
// ЗАПУСК
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  renderProfileIcon();
  initCustomSelects();
  setupContactForm();
  setupProfileForm();
  setupLogout();
  setupAuthModal();
  initCinemaMap();
  renderHome();
  renderCatalog();
  renderMovieDetail();
  renderFavorites();
});