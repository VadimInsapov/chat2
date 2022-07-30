const ChatRepository = require("../repositories/ChatRepository");
const UserService = require("./UserService");

class ChatService {
    static async create(userId, name) {
        const res = await ChatRepository.createChat(name, userId);
        console.log(res);
    }
}

module.exports = ChatService;