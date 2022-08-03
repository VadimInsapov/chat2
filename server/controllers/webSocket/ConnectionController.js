const ChatService = require("../../services/ChatService");
const {CHATS_GET} = require("../../utils/Constants");
const ApiErrorSocketMiddleware = require("../../middlewares/webSocket/ApiErrorSocketMiddleware");
class ConnectionController {
    async connect(socket) {
        try {
            const {user: authUser} = socket;
            const chats = await ChatService.getChatsByUser(authUser.id);
            chats.map((chat) => socket.join(chat.chatId));
            socket.emit(CHATS_GET, chats);
        } catch (e) {
            ApiErrorSocketMiddleware(e, socket);
        }
    }
}

module.exports = new ConnectionController();