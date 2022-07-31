const ChatRepository = require("../repositories/ChatRepository");
const UserService = require("./UserService");
const ApiError = require("../errors/ApiError");

class ChatService {
    static async create(authUser, name) {
        const res = await ChatRepository.createChat(name, authUser.id);
    }

    static async addUser(authUser, chatId, userId) {
        const authUserId = authUser.id;
        if (authUserId === userId) {
            throw ApiError.BadRequest("Невозможно добавить себя в чат!");
        }
        await this.validateAuthUserInChat(authUserId, chatId);
        const existsUserInChat = await ChatRepository.findUserChat(userId, chatId);
        if (existsUserInChat) {
            throw ApiError.BadRequest("Пользователь уже в чате!");
        }
        await ChatRepository.addUser(userId, chatId);
    }

    static async appointUserRole(authUser, chatId, userId, isAdmin) {
        const authUserId = authUser.id;
        const existsUserInChat = await ChatRepository.findUserChat(userId, chatId);
        if (!existsUserInChat) {
            throw ApiError.BadRequest("Пользователя, которому назначется роль, нет в чате!");
        }
        await this.validateAuthUserInChat(authUserId, chatId);
        await ChatRepository.appointUserRole(userId, chatId, isAdmin);
    }

    static async validateAuthUserInChat(authUserId, chatId) {
        const existsAuthUserInChat = await ChatRepository.getUserRoleInChat(authUserId, chatId);
        if (!existsAuthUserInChat) {
            throw ApiError.BadRequest("Невозможно найти авторизованного пользователя в чате!");
        }
        const {isAdmin: authUserIsAdminInChat} = existsAuthUserInChat;
        if (!authUserIsAdminInChat) {
            throw ApiError.BadRequest("У авторизованного пользователя нет прав администратора в чате!");
        }
    }

    static async deleteUser(chatId, userId) {
        await this.confirmPresenceUserInChat(chatId, userId);
        await ChatRepository.deleteUser(userId, chatId);
    }

    static async confirmPresenceUserInChat(chatId, userId){
        const existsUserInChat = await ChatRepository.findUserChat(userId, chatId);
        if (!existsUserInChat) {
            throw ApiError.BadRequest("Пользователя не существвует в чате!");
        }
    }

    static async getUsers(authUserId, chatId) {
        await this.confirmPresenceUserInChat(chatId, authUserId);
        const chat = await ChatRepository.findChat(chatId);
        if (!chat) {
            throw ApiError.BadRequest("Чата с заданным ID не существует!");
        }
        const usersInChat = await ChatRepository.getUsers(chatId);
        return usersInChat;
    }
}

module.exports = ChatService;