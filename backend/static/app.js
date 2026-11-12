const MOVIES = [
    {
        "id": "resident-evil",
        "title": "Обитель зла",
        "original": "Resident Evil",
        "year": 2026,
        "genre": "Ужасы · Боевик",
        "director": "Зак Креггер",
        "runtime": "94 мин.",
        "globalRating": null,
        "status": "Премьера: 18 сентября 2026",
        "cast": "Остин Абрамс, Зак Черри, Кали Рейс, Пол Уолтер Хаузер",
        "desc": "Брайан — медицинский курьер, чья обычная работа неожиданно превращается в настоящий кошмар. Оказавшись в эпицентре стремительно развивающейся катастрофы, он вынужден пробираться через опасный мир, где привычные правила больше не действуют. Каждая минута становится испытанием, а шанс выбраться живым постепенно уменьшается. История сочетает напряжённый экшен, атмосферу ужаса и непрерывную гонку за выживание.",
        "short": "Медицинский курьер оказывается в эпицентре кошмара, где каждый следующий шаг может стать последним. Одна ночь превращается в отчаянную борьбу за выживание.",
        "poster": "/static/images/resident-evil.svg",
        "theme": "horror"
    },
    {
        "id": "obsession",
        "title": "Обсессия",
        "original": "Obsession",
        "year": 2026,
        "genre": "Ужасы · Триллер",
        "director": "Карри Баркер",
        "runtime": "108 мин.",
        "globalRating": null,
        "status": "Вышел в 2026 году",
        "cast": "Майкл Джонстон, Инде Наварретт, Купер Томлинсон, Меган Лоулесс",
        "desc": "Главный герой — безнадёжный романтик, который мечтает добиться взаимности от девушки, в которую влюблён. Он прибегает к загадочному предмету, известному как One Wish Willow, способному исполнить желание. Сначала всё кажется настоящим чудом: мечта начинает сбываться. Но постепенно происходящее приобретает зловещий характер. Герой сталкивается с последствиями собственного выбора и понимает, что желание, рождённое одержимостью, способно разрушить жизнь.",
        "short": "Желание завоевать сердце любимой девушки становится началом пугающей истории. Получив желаемое, герой понимает, что у исполнения мечты есть страшная цена.",
        "poster": "/static/images/obsession.svg",
        "theme": "red"
    },
    {
        "id": "backrooms",
        "title": "Бекрумс",
        "original": "Backrooms",
        "year": 2026,
        "genre": "Ужасы · Мистика",
        "director": "Кейн Парсонс",
        "runtime": "110 мин.",
        "globalRating": null,
        "status": "Премьера: 29 мая 2026",
        "cast": "Лукита Максвелл, Финн Беннетт, Ренате Реинсве, Чиветел Эджиофор, Марк Дюпласс",
        "desc": "Обычный мебельный магазин становится отправной точкой необъяснимых событий: в его подвале обнаруживается загадочная дверь. За ней находится пространство, которое кажется бесконечным и пугающе однообразным. Привычные ориентиры исчезают, а ощущение безопасности постепенно сменяется тревогой. Героям предстоит разобраться в природе странного места и найти способ выбраться из пространства, которое словно существует за пределами привычного мира.",
        "short": "В подвале мебельного магазина появляется странный проход. За ним скрывается пространство, которое не подчиняется привычным законам реальности.",
        "poster": "/static/images/backrooms.svg",
        "theme": "liminal"
    },
    {
        "id": "exit-8",
        "title": "Выход 8",
        "original": "Exit 8",
        "year": 2025,
        "genre": "Психологический хоррор",
        "director": "Гэнки Кавамура",
        "runtime": "95 мин.",
        "globalRating": null,
        "status": "Вышел в 2025 году",
        "cast": "Кадзунари Ниномия, Ямато Коти, Нана Комацу",
        "desc": "Обычный переход метро превращается в загадочный лабиринт, из которого невозможно выбраться привычным способом. Мужчина пытается найти выход № 8, следуя простым правилам: внимательно осматривать пространство, замечать аномалии и возвращаться назад, если что-то кажется неправильным. Каждый проход становится проверкой наблюдательности и самообладания. Фильм создаёт атмосферу психологического напряжения, в которой даже незначительная деталь может оказаться решающей.",
        "short": "Мужчина оказывается в бесконечном переходе метро. Чтобы найти выход, ему необходимо замечать малейшие отклонения от привычной реальности.",
        "poster": "/static/images/exit-8.svg",
        "theme": "liminal"
    },
    {
        "id": "spider-man",
        "title": "Человек-паук: Новый день",
        "original": "Spider-Man: Brand New Day",
        "year": 2026,
        "genre": "Супергероика · Боевик",
        "director": "Дестин Дэниел Креттон",
        "runtime": "Уточняется",
        "globalRating": null,
        "status": "Фильм 2026 года",
        "cast": "Том Холланд, Зендея, Джейкоб Баталон, Джон Бернтал",
        "desc": "Питер Паркер посвящает себя борьбе с преступностью и пытается привыкнуть к жизни, в которой близкие люди больше не помнят его. Одиночество становится частью его повседневности, а ответственность за безопасность города никуда не исчезает. Когда появляется новая опасность, Питер сталкивается с угрозой, которую невозможно победить только силой. Ему предстоит понять, кем он хочет быть и какую цену готов заплатить за защиту других.",
        "short": "Питер Паркер продолжает защищать город, хотя мир больше не помнит его прежнюю жизнь. Но новая угроза заставляет героя измениться.",
        "poster": "/static/images/spider-man.svg",
        "theme": "blue"
    },
    {
        "id": "odyssey",
        "title": "Одиссея",
        "original": "The Odyssey",
        "year": 2026,
        "genre": "Эпическое приключение · Боевик",
        "director": "Кристофер Нолан",
        "runtime": "Уточняется",
        "globalRating": null,
        "status": "Фильм 2026 года",
        "cast": "Мэтт Дэймон, Том Холланд, Энн Хэтэуэй, Роберт Паттинсон, Зендея",
        "desc": "Экранизация знаменитого эпоса Гомера рассказывает о путешествии Одиссея после окончания Троянской войны. Герой стремится вернуться домой, где его ждут семья и прежняя жизнь, но путь оказывается намного сложнее, чем он мог представить. На протяжении странствий Одиссей сталкивается с опасностями, сверхъестественными силами и испытаниями, требующими не только физической силы, но и хитрости, выдержки и верности своей цели.",
        "short": "После Троянской войны Одиссей отправляется в опасное путешествие домой. На его пути встречаются мифические существа, боги и испытания, проверяющие его мужество.",
        "poster": "/static/images/odyssey.svg",
        "theme": "gold"
    },
    {
        "id": "michael",
        "title": "Майкл",
        "original": "Michael",
        "year": 2026,
        "genre": "Биография · Музыка · Драма",
        "director": "Антуан Фукуа",
        "runtime": "127 мин.",
        "globalRating": null,
        "status": "Вышел в 2026 году",
        "cast": "Джаафар Джексон, Ниа Лонг, Майлз Теллер, Колман Доминго",
        "desc": "Фильм рассказывает о становлении Майкла Джексона как артиста, начиная с ранних выступлений в составе Jackson 5. Зритель наблюдает, как талант, трудолюбие и стремление к совершенству помогают ему выйти на мировой уровень. История обращается к музыкальному наследию певца, его сценическому образу и созданию выступлений, которые стали частью истории поп-культуры. В центре повествования — путь артиста, стремившегося постоянно расширять границы своего творчества.",
        "short": "Биографическая драма о Майкле Джексоне — от первых музыкальных выступлений до мировой славы и превращения в одну из самых узнаваемых фигур поп-музыки.",
        "poster": "/static/images/michael.svg",
        "theme": "gold"
    },
    {
        "id": "the-drama",
        "title": "Драма",
        "original": "The Drama",
        "year": 2026,
        "genre": "Драма · Чёрная комедия",
        "director": "Кристоффер Боргли",
        "runtime": "105 мин.",
        "globalRating": 7.1,
        "status": "Вышел в 2026 году",
        "cast": "Зендея, Роберт Паттинсон, Алана Хайм, Мамуду Ати",
        "desc": "Чарли и Эмма готовятся к свадьбе, уверенные, что хорошо знают друг друга. Но неожиданное откровение нарушает привычный ход событий и превращает предсвадебную неделю в череду сомнений и конфликтов. Героям приходится пересмотреть собственные представления о доверии, любви и личных границах. Фильм сочетает романтическую историю с чёрным юмором и исследует, насколько хорошо люди способны понять тех, с кем собираются связать свою жизнь.",
        "short": "Подготовка к свадьбе счастливой пары превращается в эмоциональное испытание после неожиданного признания. Теперь влюблённым предстоит заново взглянуть друг на друга.",
        "poster": "/static/images/the-drama.svg",
        "theme": "pink"
    },
    {
        "id": "little-women",
        "title": "Маленькие женщины",
        "original": "Little Women",
        "year": 2019,
        "genre": "Драма · Мелодрама",
        "director": "Грета Гервиг",
        "runtime": "135 мин.",
        "globalRating": 7.8,
        "status": "Фильм 2019 года",
        "cast": "Сирша Ронан, Эмма Уотсон, Флоренс Пью, Элайза Сканлен, Тимоти Шаламе",
        "desc": "История сестёр Марч разворачивается в XIX веке. Мег, Джо, Бет и Эми обладают разными характерами и мечтами, но их объединяет любовь к семье и стремление самостоятельно определять своё будущее. Каждая сталкивается с выбором между личными желаниями и ожиданиями общества. Через радости, трудности, расставания и взросление сёстры учатся понимать себя и друг друга. Фильм посвящён семье, творчеству, любви и свободе быть собой.",
        "short": "Четыре сестры взрослеют, влюбляются, сталкиваются с потерями и ищут собственное место в мире, стараясь сохранить семейную близость.",
        "poster": "/static/images/little-women.svg",
        "theme": "cream"
    },
    {
        "id": "wuthering-heights",
        "title": "Грозовой перевал",
        "original": "Wuthering Heights",
        "year": 2026,
        "genre": "Драма · Романтика",
        "director": "Эмеральд Феннелл",
        "runtime": "135 мин.",
        "globalRating": null,
        "status": "Фильм 2026 года",
        "cast": "Марго Робби, Джейкоб Элорди, Хонг Чау, Шазад Латиф",
        "desc": "На фоне суровых английских пустошей разворачивается история сложных отношений Кэтрин Эрншо и Хитклиффа. Их связь наполнена сильными чувствами, противоречиями и болезненными решениями. Стремление героев быть вместе сталкивается с социальными различиями, гордостью и обидами, последствия которых отражаются на судьбах окружающих. Эта интерпретация классического романа Эмили Бронте исследует тёмную сторону любви, превращающейся в силу, способную одновременно притягивать и разрушать.",
        "short": "Страстная и разрушительная история Кэтрин и Хитклиффа, чьи чувства сталкиваются с гордостью, общественными условностями и жаждой мести.",
        "poster": "/static/images/wuthering-heights.svg",
        "theme": "storm"
    },
    {
        "id": "beautiful-mind",
        "title": "Игры разума",
        "original": "A Beautiful Mind",
        "year": 2001,
        "genre": "Биография · Драма",
        "director": "Рон Ховард",
        "runtime": "135 мин.",
        "globalRating": 8.2,
        "status": "Классика кино",
        "cast": "Рассел Кроу, Дженнифер Коннелли, Эд Харрис, Пол Беттани",
        "desc": "Джон Нэш — талантливый математик, чьи идеи обещают изменить научный мир. Его стремление к открытиям постепенно сталкивается с серьёзными личными испытаниями, которые ставят под угрозу привычное представление о реальности. Поддержка жены Алисии становится важнейшей частью его пути. Фильм показывает, как интеллект, любовь и сила характера помогают человеку справляться с трудностями и продолжать двигаться вперёд даже тогда, когда собственный разум становится источником неопределённости.",
        "short": "Одарённый математик Джон Нэш стремится изменить науку, но неожиданные испытания заставляют его бороться за карьеру, отношения и собственное восприятие реальности.",
        "poster": "/static/images/beautiful-mind.svg",
        "theme": "blue"
    },
    {
        "id": "mickey-17",
        "title": "Микки 17",
        "original": "Mickey 17",
        "year": 2025,
        "genre": "Научная фантастика · Чёрная комедия",
        "director": "Пон Джун-хо",
        "runtime": "137 мин.",
        "globalRating": 6.8,
        "status": "Вышел в 2025 году",
        "cast": "Роберт Паттинсон, Наоми Аки, Стивен н, Тони Коллетт, Марк Руффало",
        "desc": "Микки Барнс отправляется в космическую экспедицию и получает необычную работу: он выполняет опасные задания, после которых его тело могут создать заново, сохранив память. Каждая новая версия продолжает миссию предыдущей, а сама смерть превращается в часть рабочего процесса. Но система даёт сбой, когда появляется очередная версия Микки, хотя предыдущая всё ещё существует. Ситуация ставит перед героями вопросы об идентичности, ценности человеческой жизни и границах технологического прогресса.",
        "short": "Микки участвует в космической экспедиции в роли сотрудника, которого можно восстановить после смерти. Но очередная версия героя сталкивается с неожиданной проблемой.",
        "poster": "/static/images/mickey-17.svg",
        "theme": "orange"
    },
    {
        "id": "now-you-see-me-3",
        "title": "Иллюзия обмана 3",
        "original": "Now You See Me: Now You Don't",
        "year": 2025,
        "genre": "Криминал · Триллер · Приключения",
        "director": "Рубен Фляйшер",
        "runtime": "113 мин.",
        "globalRating": 6.2,
        "status": "Вышел в 2025 году",
        "cast": "Джесси Айзенберг, Вуди Харрельсон, Дэйв Франко, Айла Фишер, Розамунд Пайк, Морган Фриман",
        "desc": "Знаменитые иллюзионисты снова оказываются в центре рискованной операции. На этот раз к ним присоединяются новые участники, которым предстоит научиться работать в команде и доверять друг другу. Их цель связана с разоблачением влиятельной противницы, чьи богатство и связи скрывают опасную деятельность. Чтобы добиться успеха, героям придётся использовать мастерство иллюзии, ловкость, психологические уловки и тщательно продуманные планы. Но в мире, где никто не говорит всей правды, даже союзники могут оказаться частью чужого трюка.",
        "short": "Четыре всадника возвращаются и объединяются с новым поколением иллюзионистов. Их цель — раскрыть масштабную аферу, где каждый шаг скрывает очередной обман.",
        "poster": "/static/images/now-you-see-me-3.svg",
        "theme": "purple"
    }
];

/* =========================================================
АУТЕНТИФИКАЦИЯ ПОЛЬЗОВАТЕЛЯ
========================================================= */
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

/* =========================================================
   ПРОФИЛЬ ПОЛЬЗОВАТЕЛЯ
   ========================================================= */
function getProfile() {
    try {
        return JSON.parse(localStorage.getItem("cinelib-profile") || "null");
    } catch {
        return null;
    }
}

function saveProfile(profile) {
    localStorage.setItem("cinelib-profile", JSON.stringify(profile));
}

function getInitials(name) {
    if (!name) return "?";
    return name.trim().charAt(0).toUpperCase();
}

function renderProfileIcon() {
    const headerInner = document.querySelector(".header-inner");
    if (!headerInner) return;

    // Удаляем старые элементы
    const oldIcon = headerInner.querySelector(".profile-icon");
    if (oldIcon) oldIcon.remove();
    const oldAuth = headerInner.querySelector(".auth-buttons");
    if (oldAuth) oldAuth.remove();

    const user = getCurrentUser();

    if (user) {
        // Вошёл — показываем иконку профиля
        const icon = document.createElement("a");
        icon.href = "profile.html";
        icon.className = "profile-icon";
        icon.setAttribute("aria-label", "Профиль: " + user.name);
        icon.textContent = getInitials(user.name);
        headerInner.appendChild(icon);
    } else {
        // Не вошёл — кнопки «Войти» и «Регистрация»
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

/* =========================================================
МОДАЛЬНОЕ ОКНО ВХОДА/РЕГИСТРАЦИИ
========================================================= */
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

function updateFavoritesVisibility() {
    const favLink = document.querySelector(".nav-favorites");
    if (favLink) {
        favLink.classList.toggle("hidden", !isLoggedIn());
    }
}

function setupProfileForm() {
    const form = document.querySelector("#profile-form");
    if (!form) return;

    const user = getCurrentUser();
    if (!user) {
        // Не авторизован — редирект на главную
        window.location.href = "index.html";
        return;
    }

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
        let valid = true;
        const name = nameField.value.trim();
        const email = emailField.value.trim();
        const password = passwordField.value;

        [nameField, emailField, passwordField].forEach(clearError);
        if (name.length < 2) { showError(nameField, "Ник должен содержать минимум 2 символа"); valid = false; }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showError(emailField, "Введите корректный адрес почты"); valid = false; }
        if (password.length < 6) { showError(passwordField, "Пароль должен содержать минимум 6 символов"); valid = false; }
        if (!valid) return;

        // Обновляем текущего пользователя
        const updatedUser = { ...user, name, email, password };
        setCurrentUser(updatedUser);

        // Обновляем в общем списке
        const users = getUsers();
        const idx = users.findIndex(u => u.email === user.email);
        if (idx !== -1) { users[idx] = updatedUser; saveUsers(users); }

        status.textContent = "Профиль обновлён.";
        status.style.color = "var(--text-secondary)";
        renderProfileIcon();
    });
}

/* =========================================================
   ВЫХОД ИЗ АККАУНТА
   ========================================================= */
function setupLogout() {
    const logoutBtn = document.querySelector("#logout-btn");
    if (!logoutBtn) return;

    logoutBtn.addEventListener("click", () => {
        if (confirm("Вы уверены, что хотите выйти из аккаунта?")) {
            setCurrentUser(null);
            renderProfileIcon();
            window.location.href = "index.html";
        }
    });
}

/* =========================================================
   УЛУЧШЕННАЯ ВАЛИДАЦИЯ ФОРМЫ КОНТАКТОВ
   ========================================================= */
function setupContactForm() {
    const form = document.querySelector("#contact-form");
    if (!form) return;
    
    const nameField = form.querySelector("#contact-name");
    const emailField = form.querySelector("#contact-email");
    const messageField = form.querySelector("#contact-message");
    const status = document.querySelector("#contact-status");
    
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
    
    if (emailField) {
        emailField.addEventListener("input", () => {
            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value.trim())) clearError(emailField);
        });
    }
    if (messageField) {
        messageField.addEventListener("input", () => {
            if (messageField.value.trim().length >= 10) clearError(messageField);
        });
    }
    
    form.addEventListener("submit", e => {
        e.preventDefault();
        let valid = true;
        
        const message = messageField.value.trim();
        const email = emailField.value.trim();
        
        [nameField, emailField, messageField].forEach(f => f && clearError(f));
        
        if (message.length < 10) {
            showError(messageField, "Сообщение должно содержать минимум 10 символов");
            valid = false;
        }
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showError(emailField, "Проверьте формат электронной почты");
            valid = false;
        }
        
        if (!valid) return;
        
        const profile = getProfile();
        const senderName = nameField.value.trim() || (profile && profile.name) || "Гость";
        
        status.textContent = `Спасибо, ${senderName}! Сообщение отправлено (демо-режим).`;
        status.style.color = "var(--text-secondary)";
        form.reset();
    });
}

/* =========================================================
   ФОРМА ОТЗЫВА БЕЗ ПОЛЯ ИМЕНИ
   ========================================================= */
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
    
    function renderReviews() {
        const list = document.querySelector("#review-list");
        const reviews = getReviews(movie.id);
        const avg = averageUserRating(movie.id);
        const summary = avg === null ? "" : `<p style="margin-bottom: 16px;"><strong>Средняя оценка пользователей CineLib: ${avg.toFixed(1)} / 10</strong> · ${reviews.length} ${reviews.length === 1 ? "отзыв" : "отзывов"}</p>`;
        list.innerHTML = summary + (reviews.length ? reviews.slice().reverse().map(r => `
            <article class="review">
                <div class="review-head"><strong>${escapeHtml(r.name || "Киноман")}</strong><span class="review-score">★ ${r.rating}/10</span></div>
                <p class="review-date">${new Date(r.date).toLocaleString("ru-RU")}</p>
                <p class="review-text">${escapeHtml(r.text)}</p>
                <button type="button" class="remove-review" data-delete="${r.id}">Удалить этот отзыв</button>
            </article>`).join(" ") : `<p class="empty-reviews">Пока нет отзывов. Будь первым, кто оценит этот фильм.</p>`);
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
        if (rating < 1 || rating > 10) { alert("Сначала выбери оценку от 1 до 10."); return; }
        if (!reviewText) { text.focus(); return; }
        
        const profile = getProfile();
        const authorName = (profile && profile.name) || "Киноман";
        
        const reviews = getReviews(movie.id);
        reviews.push({
            id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
            rating,
            name: authorName,
            text: reviewText,
            date: new Date().toISOString()
        });
        saveReviews(movie.id, reviews);
        form.reset();
        ratingInput.value = "0";
        paintStars(0);
        renderReviews();
    });
    
    renderReviews();
}

function posterMarkup(movie, extraClass = "") {
    return `<div class="poster-art ${movie.theme} ${extraClass}" role="img" aria-label="Постер фильма ${movie.title}">
        <img src="${movie.poster}" alt="Постер фильма ${movie.title}" style="width:100%;height:100%;object-fit:cover;border-radius:4px;">
    </div>`;
}

function averageUserRating(id) {
    const reviews = getReviews(id);
    if (!reviews.length) return null;
    return reviews.reduce((sum, r) => sum + Number(r.rating), 0) / reviews.length;
}

function getReviews(id) {
    try { return JSON.parse(localStorage.getItem("cinelib-reviews-" + id) || "[]"); }
    catch { return []; }
}

function saveReviews(id, reviews) {
    localStorage.setItem("cinelib-reviews-" + id, JSON.stringify(reviews));
}

function scoreMarkup(movie) {
    const userAvg = averageUserRating(movie.id);
    if (userAvg !== null) return `<p class="rating">★ ${userAvg.toFixed(1)} / 10 <span class="meta">— оценка пользователей CineLib (${getReviews(movie.id).length})</span></p>`;
    if (movie.globalRating !== null) return `<p class="rating">★ ${movie.globalRating.toFixed(1)} / 10 <span class="meta">— ориентировочный внешний рейтинг</span></p>`;
    return `<p class="rating-unavailable">Рейтинг пока недоступен — оставь свою оценку первым.</p>`;
}

function card(movie) {
    return `<article class="poster-card" data-movie-card="${movie.id}">
        <a class="poster-link" href="movie.html?id=${encodeURIComponent(movie.id)}">${posterMarkup(movie)}</a>
        <h3><a class="poster-title-link" href="movie.html?id=${encodeURIComponent(movie.id)}">${movie.title}</a></h3>
        <p class="meta">${movie.year} · ${movie.genre}</p>
        <p class="director">Режиссёр: ${movie.director}</p>
        ${scoreMarkup(movie)}
    </article>`;
}

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
            const matchSearch = text.includes(search.value.toLowerCase().trim());
            const matchGenre = genre.value === "all" || m.genre.toLowerCase().includes(genre.value);
            const matchType = type.value === "all" || (type.value === "released" ? m.globalRating !== null || m.year < 2026 : m.year >= 2026);
            return matchSearch && matchGenre && matchType;
        });
        if (sort.value === "title") list.sort((a,b) => a.title.localeCompare(b.title, "ru"));
        if (sort.value === "year") list.sort((a,b) => b.year-a.year);
        if (sort.value === "rating") list.sort((a,b) => (b.globalRating ?? -1)-(a.globalRating ?? -1));
        grid.innerHTML = list.map(card).join(" ") || `<p>Ничего не найдено. Попробуй изменить запрос или фильтры.</p>`;
        const count = document.querySelector("#catalog-count");
        if (count) count.textContent = `Найдено: ${list.length}`;
    }
    const debouncedUpdate = debounce(update, 250); // 250 мс паузы
    [search, genre, type, sort].forEach(el => el.addEventListener("input", debouncedUpdate));
    update();
}

function renderMovieDetail() {
    const root = document.querySelector("#movie-detail");
    if (!root) return;
    const id = new URLSearchParams(location.search).get("id") || "resident-evil";
    const movie = MOVIES.find(m => m.id === id) || MOVIES[0];
    document.title = `${movie.title} — CineLib`;

    const genres = movie.genre.split(" · ").map(g => `<span class="genre-tag">${g}</span>`).join(" ");

    root.innerHTML = `
        <a class="back-link" href="catalog.html">← Вернуться в каталог</a>
        <section class="detail-grid">
            <div class="detail-poster">${posterMarkup(movie)}</div>
            <article class="detail-copy">
                <p class="eyebrow">${movie.original} / ${movie.year}</p>
                <h1>${movie.title}</h1>
                <div class="genres" style="margin-bottom: 16px;">${genres}</div>
                <p class="meta" style="margin-bottom: 8px;"><strong style="color: var(--text-muted); font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em;">Длительность:</strong> ${movie.runtime}</p>
                <p class="meta" style="margin-bottom: 8px;"><strong style="color: var(--text-muted); font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em;">Режиссёр:</strong> ${movie.director}</p>
                <p class="meta" style="margin-bottom: 16px;"><strong style="color: var(--text-muted); font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em;">В ролях:</strong> ${movie.cast}</p>
                ${scoreMarkup(movie)}
                <h2>Полное описание</h2>
                <p class="desc">${movie.desc}</p>
                <p style="margin-top: 24px;"><a class="btn" href="favorites.html">Перейти в избранное</a></p>
            </article>
        </section>
        <section class="review-panel" aria-labelledby="review-title">
            <h2 id="review-title">Добавить свою оценку и отзыв</h2>
            <p>Выбери оценку от 1 до 10 и напиши, что думаешь о фильме. Отзыв сохранится в этом браузере.</p>
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
                <p class="meta" style="font-size: 0.75rem; color: var(--text-muted); margin-top: 16px;">Важно: это учебная версия без сервера. Отзывы доступны только в текущем браузере и на этом устройстве.</p>
            </form>
            <div class="review-list" id="review-list"></div>
        </section>
    `;
    setupReviews(movie);
}

function setupReviews(movie) {
    const form = document.querySelector("#review-form");
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

    function renderReviews() {
        const list = document.querySelector("#review-list");
        const reviews = getReviews(movie.id);
        const avg = averageUserRating(movie.id);
        const summary = avg === null ? "" : `<p style="margin-bottom: 16px;"><strong>Средняя оценка пользователей CineLib: ${avg.toFixed(1)} / 10</strong> · ${reviews.length} ${reviews.length === 1 ? "отзыв" : "отзывов"}</p>`;
        list.innerHTML = summary + (reviews.length ? reviews.slice().reverse().map(r => `
            <article class="review">
                <div class="review-head"><strong>${escapeHtml(r.name || "Киноман")}</strong><span class="review-score">★ ${r.rating}/10</span></div>
                <p class="review-date">${new Date(r.date).toLocaleString("ru-RU")}</p>
                <p class="review-text">${escapeHtml(r.text)}</p>
                <button type="button" class="remove-review" data-delete="${r.id}">Удалить этот отзыв</button>
            </article>`).join(" ") : `<p class="empty-reviews">Пока нет отзывов. Будь первым, кто оценит этот фильм.</p>`);
        list.querySelectorAll("[data-delete]").forEach(btn => btn.addEventListener("click", () => {
            const remaining = getReviews(movie.id).filter(r => r.id !== btn.dataset.delete);
            saveReviews(movie.id, remaining);
            renderReviews();
        }));
    }

    form.addEventListener("submit", e => {
        e.preventDefault();
        const rating = Number(ratingInput.value);
        const reviewText = text.value.trim();
        if (rating < 1 || rating > 10) { alert("Сначала выбери оценку от 1 до 10."); return; }
        if (!reviewText) { text.focus(); return; }
        const reviews = getReviews(movie.id);
        // Имя берётся из профиля, поле ввода удалено
        const profile = getProfile();
        const authorName = (profile && profile.name) || "Киноман";

        reviews.push({
            id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
            rating,
            name: authorName,
            text: reviewText,
            date: new Date().toISOString()
        });
        saveReviews(movie.id, reviews);
        form.reset();
        ratingInput.value = "0";
        paintStars(0);
        renderReviews();
    });
    renderReviews();
}

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, c => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"}[c]));
}

function renderHome() {
    const grid = document.querySelector("#home-grid");
    if (grid) grid.innerHTML = MOVIES.slice(0,4).map(card).join(" ");
}

function renderFavorites() {
    const grid = document.querySelector("#favorites-grid");
    const emptyMsg = document.querySelector("#favorites-empty");
    if (!grid) return;

    if (!isLoggedIn()) {
        grid.innerHTML = `
            <div class="auth-required">
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
                <h3><a href="movie.html?id=${m.id}">${m.title}</a></h3>
                <p class="meta">${m.original} / ${m.year}</p>
                <div class="genres">${genres}</div>
                <p class="rating" style="font-size: 1.2rem; color: var(--accent); margin: 8px 0;">${ratingDisplay}</p>
                <p class="user-review-text">${lastReview ? escapeHtml(lastReview.text) : "Тут появится отзыв пользователя"}</p>
                <a class="btn btn-outline" href="movie.html?id=${m.id}" style="font-size: 0.7rem; padding: 10px 20px; margin-top: 12px;">Открыть и отредактировать</a>
            </div>
        </article>`;
    }).join(" ");
}

function setupContactForm() {
    const form = document.querySelector("#contact-form");
    if (!form) return;

    const emailField = form.querySelector("#contact-email");
    const messageField = form.querySelector("#contact-message");
    const status = document.querySelector("#contact-status");

    // Живая валидация: убираем ошибку при вводе
    if (emailField) {
        emailField.addEventListener("input", () => {
            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value.trim())) {
                emailField.closest(".field").classList.remove("field-error");
                const msg = emailField.closest(".field").querySelector(".error-message");
                if (msg) msg.remove();
            }
        });
    }

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
        const email = emailField ? emailField.value.trim() : "";

        // Очищаем старые ошибки
        [emailField, messageField].forEach(f => {
            if (!f) return;
            f.closest(".field").classList.remove("field-error");
            const oldMsg = f.closest(".field").querySelector(".error-message");
            if (oldMsg) oldMsg.remove();
        });

        let valid = true;
        if (message.length < 10) {
            messageField.closest(".field").classList.add("field-error");
            const err = document.createElement("span");
            err.className = "error-message";
            err.textContent = "Сообщение должно содержать минимум 10 символов";
            messageField.closest(".field").appendChild(err);
            valid = false;
        }
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            emailField.closest(".field").classList.add("field-error");
            const err = document.createElement("span");
            err.className = "error-message";
            err.textContent = "Проверьте формат электронной почты";
            emailField.closest(".field").appendChild(err);
            valid = false;
        }
        if (!valid) return;

        status.textContent = "Спасибо! Сообщение отправлено (демо-режим).";
        status.style.color = "var(--text-secondary)";
        form.reset();
    });
}

/* =========================================================
ПРЕДУСТАНОВЛЕННЫЕ КИНОТЕАТРЫ
========================================================= */
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

/* =========================================================
ЯНДЕКС КАРТЫ: ПОИСК КИНОТЕАТРОВ
========================================================= */
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
                if (typeof ymaps !== "undefined") {
                    clearInterval(check);
                    resolve();
                }
            }, 100);
            setTimeout(() => {
                clearInterval(check);
                resolve();
            }, 10000);
        });
    }

    if (typeof ymaps === "undefined") {
        mapContainer.style.display = "none";
        if (errorEl) {
            errorEl.hidden = false;
            errorEl.querySelector("strong").textContent = "Яндекс Карты не загрузились. Проверьте API-ключ.";
        }
        return;
    }

    ymaps.ready(() => {
        const map = new ymaps.Map("map", {
            center: [55.7517, 37.5907],
            zoom: 11,
            controls: ["zoomControl"]
        });

        /* Отрисовка списка кинотеатров в сайдбаре */
        function renderCinemaList(cinemas) {
            if (!cinemaListEl) return;
            if (cinemas.length === 0) {
                cinemaListEl.innerHTML = `<p class="intro" style="margin-top: 16px;">Кинотеатры не найдены.</p>`;
                return;
            }
            cinemaListEl.innerHTML = `
                <h3>Найдено: ${cinemas.length}</h3>
                ${cinemas.map((c, i) => `
                    <div class="cinema-item" data-index="${i}">
                        <div class="cinema-name">${c.name}</div>
                        <div class="cinema-address">${c.address}</div>
                        ${i === 0 ? '<span class="cinema-distance">Ближайший к вам</span>' : ''}
                    </div>
                `).join("")}
            `;
            // Клик по пункту — центрирует карту на этом кинотеатре
            cinemaListEl.querySelectorAll(".cinema-item").forEach(item => {
                item.addEventListener("click", () => {
                    const idx = Number(item.dataset.index);
                    const c = cinemas[idx];
                    map.setCenter(c.coords, 15, { duration: 300 });
                });
            });
        }

        /* Показать кинотеатры на карте */
        function showCinemasOnMap(cinemas, center, zoom = 11) {
            map.geoObjects.removeAll();
            map.setCenter(center, zoom);

            cinemas.forEach((c, i) => {
                const placemark = new ymaps.Placemark(c.coords, {
                    balloonContentHeader: c.name,
                    balloonContentBody: c.address,
                    hintContent: c.name
                }, {
                    preset: i === 0 ? "islands#redCinemaIcon" : "islands#darkGreenCinemaIcon"
                });
                map.geoObjects.add(placemark);
            });

            renderCinemaList(cinemas);
        }

        /* Основная функция поиска */
        async function searchCinemas(city) {
            if (loadingEl) loadingEl.hidden = false;
            if (errorEl) errorEl.hidden = true;
            mapContainer.style.display = "block";

            const normalized = normalizeCity(city);

            // 1. Проверяем предустановленные кинотеатры
            if (CINEMAS[normalized]) {
                const center = normalized === "москва"
                    ? [55.7517, 37.5907]
                    : [59.9343, 30.3351];
                showCinemasOnMap(CINEMAS[normalized], center, 11);
                if (loadingEl) loadingEl.hidden = true;
                return;
            }

            // 2. Иначе ищем через Яндекс Карты
            try {
                const geoResult = await ymaps.geocode(city, { results: 1 });
                if (geoResult.geoObjects.getLength() === 0) {
                    throw new Error("Город не найден");
                }
                const coords = geoResult.geoObjects.get(0).geometry.getCoordinates();

                const searchResult = await ymaps.geocode(coords, {
                    kind: "cinema",
                    results: 10,
                    boundedBy: [
                        [coords[0] - 0.15, coords[1] - 0.15],
                        [coords[0] + 0.15, coords[1] + 0.15]
                    ]
                });

                const cinemas = [];
                searchResult.geoObjects.each(geoObject => {
                    const cinemaCoords = geoObject.geometry.getCoordinates();
                    const address = geoObject.getAddressLine();
                    const name = geoObject.properties.get("name") || "Кинотеатр";
                    const placemark = new ymaps.Placemark(cinemaCoords, {
                        balloonContentHeader: name,
                        balloonContentBody: address,
                        hintContent: name
                    }, {
                        preset: "islands#redCinemaIcon"
                    });
                    map.geoObjects.add(placemark);
                    cinemas.push({ name, address, coords: cinemaCoords });
                });

                map.setCenter(coords, 12);
                renderCinemaList(cinemas);
            } catch (error) {
                if (errorEl) {
                    errorEl.hidden = false;
                    errorEl.querySelector("strong").textContent = "Не удалось найти кинотеатры";
                }
                console.error("Ошибка поиска:", error);
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

        // По умолчанию — Москва
        searchCinemas("Москва");
    });
}

/* =========================================================
КАСТОМНЫЙ DROPDOWN — замена нативного <select>
========================================================= */
function initCustomSelects() {
    document.querySelectorAll('.filters-bar select').forEach(nativeSelect => {
        // Создаём обёртку
        const wrapper = document.createElement('div');
        wrapper.className = 'select-wrapper';
        nativeSelect.parentNode.insertBefore(wrapper, nativeSelect);
        wrapper.appendChild(nativeSelect);

        // Создаём кастомный триггер
        const customSelect = document.createElement('div');
        customSelect.className = 'custom-select';
        customSelect.setAttribute('tabindex', '0');
        customSelect.setAttribute('role', 'combobox');
        customSelect.setAttribute('aria-expanded', 'false');

        const list = document.createElement('ul');
        list.className = 'custom-select-list';
        list.setAttribute('role', 'listbox');

        // Заполняем список опциями из нативного select
        Array.from(nativeSelect.options).forEach((option, index) => {
            const li = document.createElement('li');
            li.setAttribute('role', 'option');
            li.setAttribute('data-value', option.value);
            li.textContent = option.textContent;
            if (option.selected) li.classList.add('selected');

            li.addEventListener('click', () => {
                // Обновляем нативный select (для логики фильтрации)
                nativeSelect.value = option.value;
                nativeSelect.dispatchEvent(new Event('input', { bubbles: true }));

                // Обновляем визуальное выделение
                list.querySelectorAll('li').forEach(l => l.classList.remove('selected'));
                li.classList.add('selected');
                customSelect.querySelector('.custom-select-text').textContent = option.textContent;

                // Закрываем
                closeAllSelects();
            });

            list.appendChild(li);
        });

        // Текст триггера
        const textSpan = document.createElement('span');
        textSpan.className = 'custom-select-text';
        textSpan.textContent = nativeSelect.options[nativeSelect.selectedIndex].textContent;
        customSelect.appendChild(textSpan);
        customSelect.appendChild(list);
        wrapper.appendChild(customSelect);

        // Открытие/закрытие по клику
        customSelect.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = customSelect.classList.contains('open');
            closeAllSelects();
            if (!isOpen) {
                customSelect.classList.add('open');
                customSelect.setAttribute('aria-expanded', 'true');
            }
        });

        // Закрытие по клику вне
        document.addEventListener('click', () => closeAllSelects());
    });

    function closeAllSelects() {
        document.querySelectorAll('.custom-select.open').forEach(cs => {
            cs.classList.remove('open');
            cs.setAttribute('aria-expanded', 'false');
        });
    }

    // Закрытие по Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAllSelects();
    });
}
function setupAuthModal() {
    const modal = document.getElementById("auth-modal");
    if (!modal) return;
    modal.hidden = true;

    // Закрытие по клику на оверлей
    const overlay = modal.querySelector(".auth-modal-overlay");
    if (overlay) {
        overlay.addEventListener("click", closeAuthModal);
    }

    // Закрытие по кнопке ✕ — ИСПРАВЛЕНО
    const closeBtn = modal.querySelector(".auth-modal-close");
    if (closeBtn) {
        closeBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            closeAuthModal();
        });
    }

    // Переключение вкладок
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

    // Форма входа
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

    // Форма регистрации
    const registerForm = modal.querySelector("#register-form");
    if (registerForm) {
        registerForm.addEventListener("submit", e => {
            e.preventDefault();
            const name = registerForm.querySelector("#register-name").value.trim();
            const email = registerForm.querySelector("#register-email").value.trim();
            const password = registerForm.querySelector("#register-password").value;

            if (name.length < 2) { showAuthStatus(registerForm, "Ник должен содержать минимум 2 символа", true); return; }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showAuthStatus(registerForm, "Введите корректный адрес почты", true); return; }
            if (password.length < 6) { showAuthStatus(registerForm, "Пароль должен содержать минимум 6 символов", true); return; }

            const users = getUsers();
            if (users.find(u => u.email === email)) { showAuthStatus(registerForm, "Пользователь с такой почтой уже существует", true); return; }

            const newUser = { name, email, password };
            users.push(newUser);
            saveUsers(users);
            setCurrentUser(newUser);

            closeAuthModal();
            renderProfileIcon();
        });
    }

    // Закрытие по Escape
    document.addEventListener("keydown", e => {
        if (e.key === "Escape" && !modal.hidden) closeAuthModal();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderProfileIcon();
    renderHome();
    initCustomSelects();
    renderCatalog();
    renderMovieDetail();
    renderFavorites();
    setupContactForm();
    setupProfileForm();
    setupLogout();
    setupAuthModal();
    initCinemaMap();
});

// Универсальный обработчик закрытия модалки по крестику
document.addEventListener("click", (e) => {
    const btn = e.target.closest("[aria-label='Закрыть']");
    if (btn) {
        const modal = btn.closest(".auth-modal");
        if (modal) {
            modal.hidden = true;
            document.body.style.overflow = "";
        }
    }
});