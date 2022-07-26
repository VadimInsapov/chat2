const {FRIENDS, USER} = require("../db/tableNames");
const knex = require("../db/knexConfig");

class FriendsRepository {
    static async createFriends(userId, userId2) {
        const res = await knex(FRIENDS.tableName)
            .insert({
                [FRIENDS.columns.USER_ID(true)]: userId,
                [FRIENDS.columns.USER_ID2(true)]: userId2
            })
            .returning('*');
        return res[0];
    }

    static async deleteFriends({userId, userId2}) {
        const res = await knex(FRIENDS.tableName)
            .where(FRIENDS.columns.USER_ID(), userId)
            .andWhere(FRIENDS.columns.USER_ID2(), userId2)
            .del()
            .returning('*');
        return res[0];
    }

    static async findFriends(userId, userId2) {
        const res = await knex(FRIENDS.tableName)
            .where({
                [FRIENDS.columns.USER_ID(true)]: userId,
                [FRIENDS.columns.USER_ID2(true)]: userId2
            })
            .orWhere({
                [FRIENDS.columns.USER_ID(true)]: userId2,
                [FRIENDS.columns.USER_ID2(true)]: userId
            })
            .returning('*');
        return res[0];
    }
}

module.exports = FriendsRepository;