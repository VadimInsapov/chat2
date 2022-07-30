const ChatRepository = require("../repositories/ChatRepository");
const UserService = require("./UserService");

class ChatService {
    static async create(authUser, name) {
        const res = await ChatRepository.createChat(name, authUser.id);
    }

    static async addUser(authUser, chatId, userId) {
        const authUserId = authUser.id;
        if (authUserId === userId) {
            throw new Error("Невозможно добавить себя в чат!");
        }
        const existsAuthUserInChat = await ChatRepository.getUserRoleInChat(authUserId, chatId);
        if (!existsAuthUserInChat) {
            throw new Error("Невозможно найти пользователя в чате!");
        }
        const {isAdmin: authUserIsAdminInChat} = existsAuthUserInChat;
        if (!authUserIsAdminInChat) {
            throw new Error("Пользователь не является администратором чата!");
        }
        const existsUserInChat = await ChatRepository.findUserChat(userId, chatId);
        if (existsUserInChat) {
            throw new Error("Пользователь уже в чате!");
        }
        await ChatRepository.addUser(userId, chatId);
    }
}

module.exports = ChatService;