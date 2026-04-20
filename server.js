const path = require("path");
const fs = require("fs");
console.log("🔥 ITSapar SERVER START");

const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors()); // Разрешаем запросы от фронтенда
app.use(express.static(__dirname)); // Раздаем статические файлы (html, js, css) из текущей папки

const SECRET = process.env.JWT_SECRET || "supersecretkey";

// Логика определения пути к БД
// Для сброса данных при каждом деплое на Render используем путь в корне проекта.
// Эфемерная файловая система Render удалит этот файл при обновлении сайта.
let dbPath = path.join(__dirname, "users.db");

// 📦 Настройка базы данных SQLite
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("❌ Критическая ошибка подключения к базе данных:", err.message);
        process.exit(1); // Принудительно завершаем, если база не открылась
    }
    console.log(`📂 База данных подключена: ${dbPath}`);
});

// Маршрут для проверки работоспособности (Health Check)
app.get("/health", (req, res) => {
  res.status(200).send("Alive");
});

// Обработка ошибок для статических файлов
app.use((err, req, res, next) => {
  console.error("Server Error:", err.stack);
  res.status(500).send("Something broke on the server!");
});

// Настройка базы данных: создание таблицы и добавление недостающих колонок
// Настройка базы данных
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE,
            password TEXT,
            role TEXT DEFAULT 'user',
            survey_data TEXT
        )
    `);

    // Проверка и добавление отсутствующих колонок
    db.run("ALTER TABLE users ADD COLUMN role TEXT DEFAULT 'user'", (err) => {
        if (err && !err.message.includes("duplicate column name")) console.error(err);
    });

    db.run("ALTER TABLE users ADD COLUMN survey_data TEXT", (err) => {
        if (err && !err.message.includes("duplicate column name")) console.error(err);
    });
});

// 🌐 Маршруты для корректной работы браузера
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/favicon.ico", (req, res) => res.status(204).end()); // Убираем ошибку 404 для иконки

// 🧾 Маршрут регистрации
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const role = "user"; // Роль по умолчанию для всех новых пользователей

  db.run(
    "INSERT INTO users (username, password, role) VALUES (?, ?, ?)",
    [username, hash, role],
    function(err) {
      if (err) {
        console.error("Ошибка при регистрации:", err.message);
        if (err.message.includes("UNIQUE constraint failed")) {
          return res.status(400).send("Пользователь уже существует");
        }
        return res.status(500).send("Ошибка базы данных: " + err.message);
      }

      // СРАЗУ выдаем токен после регистрации, чтобы анкета сохранилась
      const token = jwt.sign(
        { id: this.lastID, username, role },
        SECRET,
        { expiresIn: "24h" }
      );
      
      res.status(201).json({ token, username });
    }
  );
});

// 🔐 логин
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Специальная проверка для администратора
  if (username === 'admin' && password === 'Orvex2026') {
    const token = jwt.sign(
      { username: 'admin', role: 'admin' },
      SECRET,
      { expiresIn: "24h" }
    );
    return res.json({ token, isAdmin: true });
  }

  db.get(
    "SELECT * FROM users WHERE username = ?",
    [username],
    async (err, user) => {
      if (err) return res.status(500).send("Database error");
      if (!user) return res.status(404).send("User not found");

      const ok = await bcrypt.compare(password, user.password);
      if (!ok) return res.status(401).send("Wrong password");

      // Генерируем токен, включая id, username и role
      const token = jwt.sign(
        { id: user.id, username: user.username, role: user.role },
        SECRET,
        { expiresIn: "24h" }
      );

      res.json({ token, isAdmin: user.role === 'admin' }); // Возвращаем isAdmin для фронтенда
    }
  );
});

// 🛡 Middleware: Проверка авторизации (JWT)
function auth(req, res, next) {
  const header = req.headers.authorization;
  if (!header) return res.status(401).send("No token provided");

  const token = header.split(" ")[1];
  try {
    const data = jwt.verify(token, SECRET);
    req.user = data; // Сохраняем данные из токена в объект запроса
    next();
  } catch {
    res.status(401).send("Invalid token");
  }
}

// 🛡 Middleware: Ограничение доступа только для администраторов
function adminOnly(req, res, next) {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).send("Access denied");
  }
}

// 🛡 Проверка прав админа на сервере (для защиты страницы admin.html)
app.get("/admin/verify", auth, adminOnly, (req, res) => {
    res.send("OK");
});

// � Маршрут аналитики (только для админов)
app.get("/admin/analytics", auth, adminOnly, (req, res) => {
    console.log("📊 [ADMIN] Запрос аналитики от:", req.user.username);
    
    db.all("SELECT username, role, survey_data FROM users", [], (err, rows) => {
        if (err) {
            console.error("❌ Ошибка БД в аналитике:", err.message);
            return res.status(500).json({ error: "Ошибка базы данных" });
        }

        try {
            let totalBudget = 0;
            let budgetCount = 0;
            const interests = { mountains: 0, sea: 0, city: 0, activity: 0, culture: 0, gastronomy: 0, seclusion: 0, shopping: 0, family_fun: 0, eco_tourism: 0 };
            const cityCounts = {};

            const usersList = (rows || []).map((row, index) => {
                let survey = {};
                if (row && row.survey_data && typeof row.survey_data === 'string' && row.survey_data.length > 5) {
                    try {
                        const cleanJson = row.survey_data.replace(/[\u0000-\u001F\u007F-\u009F]/g, ""); // Очистка скрытых символов
                        const parsed = JSON.parse(cleanJson);
                        if (parsed && typeof parsed === 'object') survey = parsed;
                    } catch (e) {
                        console.warn(`⚠️ Не удалось распарсить анкету юзера ${row.username}`);
                    }
                }

                const userData = {
                    username: row.username || "unknown",
                    role: row.role || "user",
                    fullName: typeof survey.fullName === 'string' ? survey.fullName : null,
                    age: survey.age || null,
                    budget: survey.budget || null,
                    tripType: survey.tripType || null,
                    answers: (survey.answers && typeof survey.answers === 'object') ? survey.answers : null,
                    recommendedCities: Array.isArray(survey.recommendedCities) ? survey.recommendedCities : []
                };

                // Считаем статистику только если анкета реально заполнена
                if (userData.fullName || userData.answers) {
                    if (userData.budget === 'low') { totalBudget += 50000; budgetCount++; }
                    else if (userData.budget === 'medium') { totalBudget += 125000; budgetCount++; }
                    else if (userData.budget === 'high') { totalBudget += 250000; budgetCount++; }

                    if (userData.answers) {
                        Object.keys(interests).forEach(key => {
                            if (userData.answers[key]) interests[key]++;
                        });
                    }
                    userData.recommendedCities.forEach(city => {
                        if (city) cityCounts[city] = (cityCounts[city] || 0) + 1;
                    });
                }
                return userData;
            });

            console.log(`✅ Обработано юзеров: ${usersList.length}, с анкетами: ${budgetCount}`);
            res.json({
                totalUsers: usersList.length,
                averageBudget: budgetCount > 0 ? Math.round(totalBudget / budgetCount) : 0,
                interestsStats: interests,
                topCities: cityCounts,
                usersList: usersList
            });
        } catch (error) {
            console.error("❌ Критическая ошибка обработки:", error);
            res.status(500).json({ error: "Ошибка сервера при расчете аналитики" });
        }
    });
});

// 🔥 Маршрут для полной очистки (удаление всех пользователей кроме admin)
app.delete("/admin/clear-all", auth, adminOnly, (req, res) => {
    db.run("DELETE FROM users WHERE role != 'admin'", (err) => {
        if (err) return res.status(500).send("Ошибка при очистке базы");
        console.log("⚠️ База данных полностью очищена администратором");
        res.send("Система полностью очищена");
    });
});

// 🔥 МАРШРУТ: Удаление конкретного пользователя
app.delete("/admin/user/:username", auth, adminOnly, (req, res) => {
    db.run("DELETE FROM users WHERE username = ?", [req.params.username], (err) => {
        if (err) return res.status(500).send("Ошибка при удалении");
        res.send("Пользователь удален");
    });
});

// 📝 Сохранение данных анкеты
app.post("/user/survey", auth, (req, res) => {
  const surveyData = JSON.stringify(req.body);
  db.run(
    "UPDATE users SET survey_data = ? WHERE username = ?",
    [surveyData, req.user.username],
    (err) => {
      if (err) return res.status(500).send("Error saving survey");
      res.send("Survey saved");
    }
  );
});

// 🔥 НОВЫЙ МАРШРУТ: Топ популярных городов среди других пользователей
app.get("/api/popular-cities", auth, (req, res) => {
    db.all("SELECT survey_data FROM users WHERE username != ?", [req.user.username], (err, rows) => {
        if (err) return res.status(500).json({ error: "Database error" });

        const cityCounts = {};
        rows.forEach(row => {
            try {
                if (row.survey_data && row.survey_data !== "null" && row.survey_data.trim() !== "") {
                    const data = JSON.parse(row.survey_data);
                    if (data && Array.isArray(data.recommendedCities)) {
                        data.recommendedCities.forEach(city => {
                            if (city) {
                                cityCounts[city] = (cityCounts[city] || 0) + 1;
                            }
                        });
                    }
                }
            } catch (e) {
                console.warn("⚠️ Ошибка в популярных городах для одного из юзеров");
            }
        });

        // Превращаем объект в массив, сортируем по убыванию и берем топ-2
        const sortedCities = Object.entries(cityCounts)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 2)
            .map(([name]) => name);

        // Если данных мало, возвращаем дефолтные популярные города
        if (sortedCities.length < 2) {
            const defaults = ["Алматы", "Астана", "Боровое"];
            while (sortedCities.length < 2) sortedCities.push(defaults.shift());
        }

        res.json(sortedCities);
    });
});

// 👤 Защищенный маршрут: Дашборд пользователя
app.get("/dashboard", auth, (req, res) => {
  res.send(`Welcome ${req.user.username}`);
});

// ⚙️ Защищенный маршрут: Админ-панель
app.get("/admin", auth, adminOnly, (req, res) => {
  res.send("Admin panel");
});

// Используем порт, который даст хостинг, или 3000 для локальной разработки
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});