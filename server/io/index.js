const webSocketAuthMiddleware = require("../middlewares/webSocket/AuthMiddleware");
const ConnectionController = require("../controllers/webSocket/ConnectionController");
const MessageController = require("../controllers/webSocket/MessageController");
const {MESSAGES_GET, MESSAGES_ADD} = require("../utils/Constants");
module.exports = (io) => {
    io.use(webSocketAuthMiddleware);
    io.on("connection", async (socket) => {
        await ConnectionController.connect(socket);
        socket.on(
            MESSAGES_GET,
            (chatId) => MessageController.getMessagesByChat(chatId, socket)
        );
        socket.on(
            MESSAGES_ADD,
            (chatId, body) => MessageController.addMessage(chatId, body, socket, io)
        );
    });
}