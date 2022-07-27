const {USER_CHAT, USER, CHAT} = require("../tableNames");
/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.up = function (knex) {
    return knex.schema
        .createTable(USER_CHAT.tableName, function (table) {
            table.integer(USER_CHAT.columns.USER_ID(true)).unsigned().notNullable();
            table.foreign(USER_CHAT.columns.USER_ID(true)).references(USER.columns.ID());
            table.integer(USER_CHAT.columns.CHAT_ID(true)).unsigned().notNullable();
            table.foreign(USER_CHAT.columns.CHAT_ID(true)).references(CHAT.columns.ID());
            table.boolean(USER_CHAT.columns.IS_ADMIN(true)).notNullable().defaultTo(false);
            table.primary([USER_CHAT.columns.USER_ID(true), USER_CHAT.columns.CHAT_ID(true)])
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.down = function (knex) {
    return knex.schema
        .dropTable(USER_CHAT.tableName);
};
