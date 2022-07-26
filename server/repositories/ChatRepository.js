const knex = require("../db/knexConfig");
const {CHAT, USER_CHAT, USER} = require("../db/tableNames");

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

    static async deleteUser(userId, chatId) {
        const res = await knex(USER_CHAT.tableName)
            .where({userId, chatId})
            .del();
        return res[0];
    }

    static async findChat(chatId) {
        const res = await knex(CHAT.tableName)
            .where({[CHAT.columns.ID()]: chatId});
        return res[0];
    }

    static async getUsers(chatId) {
        const res = await knex(USER_CHAT.tableName)
            .join(USER.tableName, USER.columns.ID(), USER_CHAT.columns.USER_ID())
            .where({[USER_CHAT.columns.CHAT_ID()]: chatId})
            .returning('*');
        return res;
    }

    static async getChatsByUser(userId) {
        const res = await knex(USER_CHAT.tableName)
            .join(CHAT.tableName, CHAT.columns.ID(), USER_CHAT.columns.CHAT_ID())
            .where({[USER_CHAT.columns.USER_ID()]: userId})
            .returning('*');
        return res;
    }
}

module.exports = ChatRepository;