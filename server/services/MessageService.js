const ApiError = require("../errors/ApiError");
const MessageRepository = require("../repositories/MessageRepository");
const ChatService = require("./ChatService");

class MessageService {
    static async getMessages(chatId) {
        return await MessageRepository.getMessagesByChat(chatId);
    }
    static async createMessage(body, chatId, user) {
        return await MessageRepository.createMessage(body, chatId, user.id);
    }
}

module.exports = MessageService;