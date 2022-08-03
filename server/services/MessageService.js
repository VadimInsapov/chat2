const ApiError = require("../errors/ApiError");
const MessageRepository = require("../repositories/MessageRepository");
const ChatService = require("./ChatService");

class MessageService {
    static async getMessagesByChat(chatId) {
        return await MessageRepository.getMessagesByChat(chatId);
    }
}

module.exports = MessageService;