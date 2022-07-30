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

    static async getUserRoleInChat(userId, chatId) {
        const res = await knex(USER_CHAT.tableName)
            .select(USER_CHAT.columns.IS_ADMIN())
            .where({
                userId,
                chatId,
            });
        return res[0];
    }

    static async findUserChat(userId, chatId) {
        const res = await knex(USER_CHAT.tableName)
            .select("*")
            .where({
                userId,
                chatId,
            });
        return res[0];
    }

    static async addUser(userId, chatId) {
        const res = await knex(USER_CHAT.tableName)
            .insert({
                userId,
                chatId
            });
        return res[0];
    }

    static async appointUserRole(userId, chatId, isAdmin) {
        const res = await knex(USER_CHAT.tableName)
            .where({userId, chatId})
            .update({isAdmin});
        return res[0];
    }
}

module.exports = ChatRepository;