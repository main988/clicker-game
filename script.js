let score = 0; // Поточний рахунок (кількість кліків)
let balance = 0; // Баланс для купівлі автокліка
let autoClicker = 0; // Лічильник автокліків

const scoreElement = document.getElementById("score");
const balanceElement = document.getElementById("balance");
const clickBtn = document.getElementById("clickBtn");
const autoClickBtn = document.getElementById("autoClickBtn");

// Обробник кліку для кнопки
clickBtn.addEventListener("click", () => {
    score++; // Збільшуємо рахунок на 1
    balance++; // Кожен клік дає 1 бал на баланс
    updateDisplay();
});

// Функція для оновлення елементів на сторінці
function updateDisplay() {
    scoreElement.textContent = score;
    balanceElement.textContent = balance;
}

// Придбати автоклікер
autoClickBtn.addEventListener("click", () => {
    if (balance >= 50) {
        balance -= 50; // Витрачаємо 50 балів на автоклікер
        autoClicker++; // Збільшуємо кількість автокліків
        updateDisplay();
    } else {
        alert("У вас недостатньо балів для покупки автоклікера!");
    }
});

// Автоклікер
setInterval(() => {
    if (autoClicker > 0) {
        score += autoClicker; // Кожен автоклікер додає стільки кліків, скільки їх у вас
        updateDisplay();
    }
}, 1000); // Автоклікер активується раз на секунду