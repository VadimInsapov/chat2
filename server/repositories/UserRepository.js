const {USER, FRIENDS} = require("../db/tableNames");
const knex = require("../db/knexConfig");

class UserRepository {
    static async create(email, password) {
        const res = await knex(USER.tableName)
            .insert({
                [USER.columns.EMAIL(true)]: email,
                [USER.columns.PASSWORD(true)]: password
            })
            .returning('*');
        return res[0];
    }

    static async findByEmail(email) {
        const res = await knex(USER.tableName)
            .where(USER.columns.EMAIL(true), email)
            .returning('*');
        return res[0];
    }

    static async findById(id) {
        const res = await knex(USER.tableName)
            .where(USER.columns.ID(true), id)
            .returning('*');
        return res[0];
    }

    static async getFriends(id) {
        const friendsIds = 'friendsIds'
        const res = await knex
            .with(
                friendsIds,
                knex
                    .select(FRIENDS.columns.USER_ID())
                    .from(FRIENDS.tableName)
                    .where(FRIENDS.columns.USER_ID2(), id)
                    .union([
                        knex
                            .select(FRIENDS.columns.USER_ID2())
                            .from(FRIENDS.tableName)
                            .where(FRIENDS.columns.USER_ID(), id)
                    ])
            )
            .select(
                USER.columns.ID(),
                USER.columns.NAME(),
                USER.columns.LAST_NAME(),
                USER.columns.AVATAR(),
                USER.columns.EMAIL(),
                USER.columns.ACTIVE_STATUS(),
            )
            .from(friendsIds)
            .join(USER.tableName, USER.columns.ID(), `${friendsIds}.${FRIENDS.columns.USER_ID(true)}`)
        return res;
    }

    static async getUsersByNameOrLastName(nameOrLastName) {
        const res = await knex(USER.tableName)
            .whereILike(USER.columns.NAME(true), `${nameOrLastName}%`)
            .orWhereILike(USER.columns.LAST_NAME(true), `${nameOrLastName}%`)
            .returning('*');
        return res;
    }

    static async getUsersByFullName(name, lastName) {
        const res = await knex(USER.tableName)
            .where((builder) =>
                builder
                    .whereILike(USER.columns.LAST_NAME(true), `${lastName}%`)
                    .andWhereILike(USER.columns.NAME(true), `${name}%`)
            )
            .orWhere((builder) =>
                builder
                    .whereILike(USER.columns.LAST_NAME(true), `${name}%`)
                    .andWhereILike(USER.columns.NAME(true), `${lastName}%`)
            )
            .returning('*');
        return res;
    }
}

module.exports = UserRepository;