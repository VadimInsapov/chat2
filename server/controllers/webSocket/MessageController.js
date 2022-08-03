const ApiError = require("../../errors/ApiError");
const MessageService = require("../../services/MessageService");
const ApiErrorSocketMiddleware = require("../../middlewares/webSocket/ApiErrorSocketMiddleware");

class MessageController {
    async getMessagesByChat(chatId, socket) {
        try {
            if (!chatId) {
                throw new ApiError(400, "Не передан Id чата!");
            }
            const messages = await MessageService.getMessagesByChat(chatId);
            console.log(messages);
        } catch (err) {
            ApiErrorSocketMiddleware(err, socket);
        }
    }
}

module.exports = new MessageController();