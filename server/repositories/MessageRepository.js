const knex = require("../db/knexConfig");
const {MESSAGE} = require("../db/tableNames");

class MessageRepository {
    static getMessagesByChat(chatId) {
        const res = knex(MESSAGE.tableName)
            .where(MESSAGE.columns.CHAT_ID(true), chatId);
        return res;
    }
}

module.exports = MessageRepository;