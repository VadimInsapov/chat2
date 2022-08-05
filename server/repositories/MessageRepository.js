const knex = require("../db/knexConfig");
const {MESSAGE} = require("../db/tableNames");

class MessageRepository {
    static async getMessagesByChat(chatId) {
        const res = await knex(MESSAGE.tableName)
            .where(MESSAGE.columns.CHAT_ID(true), chatId);
        return res;
    }

    static async createMessage(body, chatId, userId) {
        const res = await knex(MESSAGE.tableName)
            .insert({
                body,
                chatId,
                userId
            })
            .returning('*');
        return res[0];
    }
}

module.exports = MessageRepository;