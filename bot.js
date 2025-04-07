const TelegramBot = require('node-telegram-bot-api');
const token = ''; // Замените на ваш токен
const bot = new TelegramBot(token, {polling: true});

// Обработка команды /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const webAppUrl = 'https://neliall2.github.io/TranquilTide/'; // Замените на URL вашего приложения
    
    bot.sendMessage(chatId, 'Добро пожаловать в MindSpace! Нажмите кнопку ниже, чтобы открыть приложение:', {
        reply_markup: {
            inline_keyboard: [[
                { text: 'Открыть MindSpace', web_app: { url: webAppUrl } }
            ]]
        }
    });
});

// Обработка ошибок
bot.on('polling_error', (error) => {
    console.log(error);
}); 