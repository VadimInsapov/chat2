const {USER} = require("../db/tableNames");
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
}

module.exports = UserRepository;