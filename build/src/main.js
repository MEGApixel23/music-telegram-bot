"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TelegramBot = require("node-telegram-bot-api");
const config_1 = require("./config");
const handlers_1 = require("./handlers");
const util_1 = require("./util");
const bot = new TelegramBot(config_1.TELEGRAM_TOKEN, { polling: true });
bot.onText(/^\/start/, (msg) => {
    const chatId = msg.chat.id;
    return bot.sendMessage(chatId, 'Hey');
});
bot.on('text', (msg) => {
    if (util_1.isCommandMessage(msg.text)) {
        return null;
    }
    return handlers_1.addSong(bot)(msg);
});
//# sourceMappingURL=main.js.map