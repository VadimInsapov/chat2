const knex = require("../db/knexConfig");
const {CHAT, USER_CHAT} = require("../db/tableNames");

class ChatRepository {
    static async createChat(name, userId) {
        const trx = await knex.transaction();
        const chatIds = await trx(CHAT.tableName)
            .insert({name})
            .returning('*');
        const chatId = chatIds[0][CHAT.columns.ID(true)];
        const res = await trx(USER_CHAT.tableName)
            .insert({
                chatId,
                userId
            })
            .returning('*');
        trx.commit();
        return res[0];
    }
}

module.exports = ChatRepository;