// Массив фильмов — теперь пустой, данные придут с сервера
let MOVIES = [];

// ============================================================
// API-ФУНКЦИИ (работа с сервером FastAPI)
// ============================================================

const API = ""; // относительный путь — работает и локально, и на Render

async function apiFetch(url, options = {}) {
    const token = localStorage.getItem("cinelib-token");
    const headers = { "Content-Type": "application/json", ...options.headers };
    if (token) headers["Authorization"] = `Bearer ${token}`;
    const response = await fetch(API + url, { ...options, headers });
    if (response.status === 401) {
        localStorage.removeItem("cinelib-token");
        localStorage.removeItem("cinelib-current-user");
        renderProfileIcon();
    }
    const data = await response.json();
    if (!response.ok) throw new Error(data.detail || "Ошибка сервера");
    return data;
}

async function loadMovies() {
    try {
        MOVIES = await apiFetch("/api/movies");
    } catch (e) {
        console.error("Не удалось загрузить фильмы:", e);
        MOVIES = [];
    }
}

async function registerUser(name, email, password) {
    return await apiFetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ name, email, password })
    });
}

async function loginUser(email, password) {
    return await apiFetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password })
    });
}

async function loadReviews(movieId) {
    try {
        return await apiFetch(`/api/movies/${movieId}/reviews`);
    } catch {
        return [];
    }
}

async function createReview(movieId, rating, text) {
    return await apiFetch(`/api/movies/${movieId}/reviews`, {
        method: "POST",
        body: JSON.stringify({ rating, text })
    });
}

async function deleteReview(movieId, reviewId) {
    return await apiFetch(`/api/movies/${movieId}/reviews/${reviewId}`, {
        method: "DELETE"
    });
}

// ============================================================
// АВТОРИЗАЦИЯ
// ============================================================

function getCurrentUser() {
    try { return JSON.parse(localStorage.getItem("cinelib-current-user") || "null"); }
    catch { return null; }
}

function setCurrentUser(user) {
    if (user) localStorage.setItem("cinelib-current-user", JSON.stringify(user));
    else localStorage.removeItem("cinelib-current-user");
}

function isLoggedIn() {
    return localStorage.getItem("cinelib-token") !== null && getCurrentUser() !== null;
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
        loginForm.addEventListener("submit", async e => {
            e.preventDefault();
            const email = loginForm.querySelector("#login-email").value.trim();
            const password = loginForm.querySelector("#login-password").value;
            if (!email || !password) { showAuthStatus(loginForm, "Заполните все поля", true); return; }
            try {
                const data = await loginUser(email, password);
                localStorage.setItem("cinelib-token", data.access_token);
                setCurrentUser(data.user);
                closeAuthModal();
                renderProfileIcon();
            } catch (err) {
                showAuthStatus(loginForm, err.message, true);
            }
        });
    }

    const registerForm = modal.querySelector("#register-form");
    if (registerForm) {
        registerForm.addEventListener("submit", async e => {
            e.preventDefault();
            const name = registerForm.querySelector("#register-name").value.trim();
            const email = registerForm.querySelector("#register-email").value.trim();
            const password = registerForm.querySelector("#register-password").value;
            if (name.length < 2) { showAuthStatus(registerForm, "Ник мин. 2 символа", true); return; }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showAuthStatus(registerForm, "Неверный email", true); return; }
            if (password.length < 6) { showAuthStatus(registerForm, "Пароль мин. 6 символов", true); return; }
            try {
                const data = await registerUser(name, email, password);
                localStorage.setItem("cinelib-token", data.access_token);
                setCurrentUser(data.user);
                closeAuthModal();
                renderProfileIcon();
            } catch (err) {
                showAuthStatus(registerForm, err.message, true);
            }
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

    form.addEventListener("submit", async e => {
        e.preventDefault();
        const name = nameField.value.trim();
        const email = emailField.value.trim();
        const password = passwordField.value;
        if (name.length < 2) { showError(nameField, "Ник мин. 2 символа"); return; }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showError(emailField, "Неверный email"); return; }
        if (password.length < 6) { showError(passwordField, "Пароль мин. 6 символов"); return; }

        try {
            const updated = await apiFetch("/api/me", {
                method: "PUT",
                body: JSON.stringify({ name, email, password })
            });
            setCurrentUser(updated);
            status.textContent = "Профиль обновлён.";
            status.style.color = "var(--text-secondary)";
            renderProfileIcon();
        } catch (err) {
            status.textContent = err.message;
            status.style.color = "var(--accent)";
        }
    });
}

function setupLogout() {
    const logoutBtn = document.querySelector("#logout-btn");
    if (!logoutBtn) return;
    logoutBtn.addEventListener("click", () => {
        if (confirm("Выйти из аккаунта?")) {
            localStorage.removeItem("cinelib-token");
            localStorage.removeItem("cinelib-current-user");
            renderProfileIcon();
            window.location.href = "/";
        }
    });
}

// ============================================================
// КАРТОЧКИ ФИЛЬМОВ
// ============================================================

function posterMarkup(movie, extraClass = "") {
    return `<div class="poster-art ${movie.theme} ${extraClass}" role="img" aria-label="Постер фильма ${movie.title}">
        <img src="${movie.poster}" alt="Постер фильма ${movie.title}" style="width:100%;height:100%;object-fit:cover;border-radius:4px;">
    </div>`;
}

function averageRating(reviews) {
    if (!reviews.length) return null;
    return reviews.reduce((sum, r) => sum + Number(r.rating), 0) / reviews.length;
}

function scoreMarkup(movie, reviews) {
    const avg = averageRating(reviews || []);
    if (avg !== null) return `<p class="rating">★ ${avg.toFixed(1)} / 10 <span class="meta">— оценка пользователей CineLib (${reviews.length})</span></p>`;
    if (movie.global_rating !== null) return `<p class="rating">★ ${movie.global_rating.toFixed(1)} / 10 <span class="meta">— внешний рейтинг</span></p>`;
    return `<p class="rating-unavailable">Рейтинг пока недоступен — оставь свою оценку первым.</p>`;
}

function card(movie) {
    return `<article class="poster-card" data-movie-card="${movie.id}">
        <a class="poster-link" href="/movie.html?id=${encodeURIComponent(movie.id)}">${posterMarkup(movie)}</a>
        <h3><a class="poster-title-link" href="/movie.html?id=${encodeURIComponent(movie.id)}">${movie.title}</a></h3>
        <p class="meta">${movie.year} · ${movie.genre}</p>
        <p class="director">Режиссёр: ${movie.director}</p>
        ${scoreMarkup(movie)}
    </article>`;
}

// ============================================================
// ГЛАВНАЯ
// ============================================================

function renderHome() {
    const grid = document.querySelector("#home-grid");
    if (grid) grid.innerHTML = MOVIES.slice(0, 4).map(card).join(" ");
}

// ============================================================
// КАТАЛОГ
// ============================================================

function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
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
            const matchType = type.value === "all" || (type.value === "released" ? m.global_rating !== null || m.year < 2026 : m.year >= 2026);
            return matchSearch && matchGenre && matchType;
        });
        if (sort.value === "title") list.sort((a, b) => a.title.localeCompare(b.title, "ru"));
        if (sort.value === "year") list.sort((a, b) => b.year - a.year);
        if (sort.value === "rating") list.sort((a, b) => (b.global_rating ?? -1) - (a.global_rating ?? -1));
        grid.innerHTML = list.map(card).join(" ") || `<p>Ничего не найдено. Попробуй изменить запрос или фильтры.</p>`;
        const count = document.querySelector("#catalog-count");
        if (count) count.textContent = `Найдено: ${list.length}`;
    }

    const debouncedUpdate = debounce(update, 250);
    [search, genre, type, sort].forEach(el => el && el.addEventListener("input", debouncedUpdate));
    update();
}

// ============================================================
// СТРАНИЦА ФИЛЬМА
// ============================================================

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
                <div class="genres" style="margin-bottom: 16px;">${genres}</div>
                <p class="meta"><strong style="color: var(--text-muted); font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em;">Длительность:</strong> ${movie.runtime}</p>
                <p class="meta"><strong style="color: var(--text-muted); font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em;">Режиссёр:</strong> ${movie.director}</p>
                <p class="meta"><strong style="color: var(--text-muted); font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em;">В ролях:</strong> ${movie.cast}</p>
                ${scoreMarkup(movie)}
                <h2>Полное описание</h2>
                <p class="desc">${movie.description || movie.desc || ""}</p>
            </article>
        </section>
        <section class="review-panel" aria-labelledby="review-title">
            <h2 id="review-title">Добавить свою оценку и отзыв</h2>
            <p>Выбери оценку от 1 до 10 и напиши, что думаешь о фильме.</p>
            <form class="review-form" id="review-form">
                <div>
                    <label><strong>Твоя оценка</strong></label>
                    <div class="stars" role="group" aria-label="Оценка от 1 до 10" id="star-picker">
                        ${Array.from({length:10},(_,i)=>`<button type="button" class="star-button" data-rating="${i+1}" aria-label="${i+1} из 10" title="${i+1} из 10">★</button>`).join(" ")}
                    </div>
                    <input type="hidden" id="rating-value" value="0" required>
                    <p class="meta" id="rating-help" style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.1em;">Пока оценка не выбрана</p>
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
            btn.setAttribute("aria-pressed", String(Number(btn.dataset.rating) === Number(value)));
        });
        help.textContent = value ? `Твоя оценка: ${value} / 10` : "Пока оценка не выбрана";
    }
    picker.addEventListener("click", e => {
        const btn = e.target.closest("[data-rating]");
        if (!btn) return;
        ratingInput.value = btn.dataset.rating;
        paintStars(Number(btn.dataset.rating));
    });

    async function renderReviews() {
        const list = document.querySelector("#review-list");
        const reviews = await loadReviews(movie.id);
        const avg = averageRating(reviews);
        const summary = avg === null ? "" : `<p style="margin-bottom: 16px;"><strong>Средняя оценка пользователей CineLib: ${avg.toFixed(1)} / 10</strong> · ${reviews.length} ${reviews.length === 1 ? "отзыв" : "отзывов"}</p>`;
        const currentUser = getCurrentUser();

        list.innerHTML = summary + (reviews.length ? reviews.map(r => `
            <article class="review">
                <div class="review-head">
                    <strong>${escapeHtml(r.author_name || "Киноман")}</strong>
                    <span class="review-score">★ ${r.rating}/10</span>
                </div>
                <p class="review-date">${new Date(r.created_at).toLocaleString("ru-RU")}</p>
                <p class="review-text">${escapeHtml(r.text)}</p>
                ${currentUser && currentUser.id === r.user_id ? `<button type="button" class="remove-review" data-delete="${r.id}">Удалить этот отзыв</button>` : ""}
            </article>
        `).join(" ") : `<p class="empty-reviews">Пока нет отзывов. Будь первым, кто оценит этот фильм.</p>`);

        list.querySelectorAll("[data-delete]").forEach(btn => btn.addEventListener("click", async () => {
            if (!confirm("Удалить отзыв?")) return;
            try {
                await deleteReview(movie.id, btn.dataset.delete);
                renderReviews();
            } catch (err) {
                alert(err.message);
            }
        }));
    }

    form.addEventListener("submit", async e => {
        e.preventDefault();
        if (!checkAuthForAction()) return;
        const rating = Number(ratingInput.value);
        const reviewText = text.value.trim();
        if (rating < 1 || rating > 10) { alert("Выбери оценку от 1 до 10."); return; }
        if (!reviewText) { text.focus(); return; }
        try {
            await createReview(movie.id, rating, reviewText);
            form.reset();
            ratingInput.value = "0";
            paintStars(0);
            renderReviews();
        } catch (err) {
            alert(err.message);
        }
    });

    renderReviews();
}

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, c => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
}

// ============================================================
// ИЗБРАННОЕ
// ============================================================

async function renderFavorites() {
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

    // Загружаем отзывы для каждого фильма
    const moviesWithReviews = [];
    for (const m of MOVIES) {
        const reviews = await loadReviews(m.id);
        if (reviews.length) moviesWithReviews.push({ movie: m, reviews });
    }

    if (moviesWithReviews.length === 0) {
        if (emptyMsg) emptyMsg.hidden = false;
        grid.innerHTML = "";
        return;
    }
    if (emptyMsg) emptyMsg.hidden = true;

    grid.innerHTML = moviesWithReviews.map(({ movie: m, reviews }) => {
        const lastReview = reviews[reviews.length - 1];
        const avg = averageRating(reviews);
        const ratingDisplay = avg !== null ? `★ ${avg.toFixed(1)} / 10` : (m.global_rating !== null ? `★ ${m.global_rating.toFixed(1)} / 10` : "Нет оценки");
        const genres = m.genre.split(" · ").map(g => `<span class="genre-tag">${g}</span>`).join(" ");
        return `
        <article class="watch-item">
            ${posterMarkup(m)}
            <div>
                <h3><a href="/movie.html?id=${m.id}">${m.title}</a></h3>
                <p class="meta">${m.original} / ${m.year}</p>
                <div class="genres">${genres}</div>
                <p class="rating" style="font-size: 1.2rem; color: var(--accent); margin: 8px 0;">${ratingDisplay}</p>
                <p class="user-review-text">${lastReview ? escapeHtml(lastReview.text) : "Тут появится отзыв пользователя"}</p>
                <a class="btn btn-outline" href="/movie.html?id=${m.id}" style="font-size: 0.7rem; padding: 10px 20px; margin-top: 12px;">Открыть и отредактировать</a>
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
// КАРТЫ (Яндекс) — без изменений
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
            if (cinemas.length === 0) { cinemaListEl.innerHTML = `<p class="intro" style="margin-top: 16px;">Кинотеатры не найдены.</p>`; return; }
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
                    const c = cinemas[idx];
                    map.setCenter(c.coords, 15, { duration: 300 });
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
                    const placemark = new ymaps.Placemark(cinemaCoords, {
                        balloonContentHeader: name, balloonContentBody: address, hintContent: name
                    }, { preset: "islands#redCinemaIcon" });
                    map.geoObjects.add(placemark);
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

document.addEventListener("DOMContentLoaded", async () => {
    renderProfileIcon();
    initCustomSelects();
    setupContactForm();
    setupProfileForm();
    setupLogout();
    setupAuthModal();
    initCinemaMap();

    // Сначала загружаем фильмы с сервера, потом рендерим страницы
    await loadMovies();
    renderHome();
    renderCatalog();
    renderMovieDetail();
    renderFavorites();
});