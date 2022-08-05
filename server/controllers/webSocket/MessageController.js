const ApiError = require("../../errors/ApiError");
const MessageService = require("../../services/MessageService");
const ApiErrorSocketMiddleware = require("../../middlewares/webSocket/ApiErrorSocketMiddleware");
const {MESSAGES_GET, MESSAGES_ADD} = require("../../utils/Constants");

class MessageController {
    async getMessagesByChat(chatId, socket) {
        try {
            if (!chatId) {
                throw new ApiError(400, "Не передан Id чата!");
            }
            const messages = await MessageService.getMessages(chatId);
            socket.emit(MESSAGES_GET, messages);
        } catch (err) {
            ApiErrorSocketMiddleware(err, socket);
        }
    }

    async addMessage(chatId, body, socket, io) {
        try {
            if (!chatId) {
                throw new ApiError(400, "Не передан Id чата!");
            }
            if (!body) {
                throw new ApiError(400, "Нет тела сообщения!");
            }
            const {user: authUser} = socket;
            const message = await MessageService.createMessage(body, chatId, authUser);
            io.to(chatId).emit(MESSAGES_ADD, message);
        } catch (err) {
            ApiErrorSocketMiddleware(err, socket);
        }
    }
}

module.exports = new MessageController();