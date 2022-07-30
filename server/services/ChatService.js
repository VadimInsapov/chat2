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
        await this.validateAuthUserInChat(authUserId, chatId);
        const existsUserInChat = await ChatRepository.findUserChat(userId, chatId);
        if (existsUserInChat) {
            throw new Error("Пользователь уже в чате!");
        }
        await ChatRepository.addUser(userId, chatId);
    }

    static async appointUserRoleInChat(authUser, chatId, userId, isAdmin) {
        const authUserId = authUser.id;
        const existsUserInChat = await ChatRepository.findUserChat(userId, chatId);
        if (!existsUserInChat) {
            throw new Error("Пользователя, которому назначется роль, нет в чате!");
        }
        await this.validateAuthUserInChat(authUserId, chatId);
        await ChatRepository.appointUserRole(userId, chatId, isAdmin);
    }

    static async validateAuthUserInChat(authUserId, chatId) {
        const existsAuthUserInChat = await ChatRepository.getUserRoleInChat(authUserId, chatId);
        if (!existsAuthUserInChat) {
            throw new Error("Невозможно найти авторизованного пользователя в чате!");
        }
        const {isAdmin: authUserIsAdminInChat} = existsAuthUserInChat;
        if (!authUserIsAdminInChat) {
            throw new Error("У авторизованного пользователя нет прав администратора в чате!");
        }
    }
}

module.exports = ChatService;