let tokens = 0;
let clickLevel = 1;
let energy = 1500;
let afkBotLevel = 1;

// Функция для обновления отображения
function updateDisplay() {
    document.getElementById('tokens').textContent = tokens.toFixed(3);
    document.getElementById('clickLevel').textContent = clickLevel;
    document.getElementById('energy').textContent = energy;
    document.getElementById('afkBotLevel').textContent = afkBotLevel;
}

// Клик по кнопке для получения токенов
document.getElementById('clickButton').addEventListener('click', () => {
    if (energy > 0) {
        tokens += 0.002 * clickLevel;
        energy--;
        updateDisplay();
        Telegram.WebApp.MainButton.setText(Токены: ${tokens.toFixed(3)});
        Telegram.WebApp.MainButton.show();
    } else {
        alert('Недостаточно энергии!');
    }
});

// Улучшение кликов
document.getElementById('upgradeClicks').addEventListener('click', () => {
    if (tokens >= 16) {
        tokens -= 16;
        clickLevel++;
        updateDisplay();
    } else {
        alert('Недостаточно токенов для улучшения кликов!');
    }
});

// Улучшение энергии
document.getElementById('upgradeEnergy').addEventListener('click', () => {
    if (tokens >= 25) {
        tokens -= 25;
        energy = 1500;
        updateDisplay();
    } else {
        alert('Недостаточно токенов для улучшения энергии!');
    }
});

// Улучшение AFK-бота
document.getElementById('upgradeAfkBot').addEventListener('click', () => {
    if (tokens >= 100) {
        tokens -= 100;
        afkBotLevel++;
        updateDisplay();
    } else {
        alert('Недостаточно токенов для улучшения AFK-бота!');
    }
});

// Инициализация Telegram WebApp API
Telegram.WebApp.onEvent('mainButtonClicked', function() {
    console.log('Main button clicked!');
});

Telegram.WebApp.ready();