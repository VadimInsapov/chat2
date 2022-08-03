const webSocketAuthMiddleware = require("../middlewares/webSocket/AuthMiddleware");
const ConnectionController = require("../controllers/webSocket/ConnectionController");
const MessageController = require("../controllers/webSocket/MessageController");
const {MESSAGES_GET} = require("../utils/Constants");
module.exports = (io) => {
    io.use(webSocketAuthMiddleware);
    io.on("connection", async (socket, next) => {
        await ConnectionController.connect(socket, next);
        socket.on(
            MESSAGES_GET,
            (chatId) => MessageController.getMessagesByChat(chatId, socket)
        );
    });
}