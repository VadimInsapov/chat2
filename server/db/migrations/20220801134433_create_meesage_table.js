/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const {MESSAGE, USER, CHAT, USER_CHAT} = require("../tableNames");
exports.up = function (knex) {
    return knex.schema
        .createTable(MESSAGE.tableName, function (table) {
            table.increments(MESSAGE.columns.ID(true)).primary();
            table.string(MESSAGE.columns.BODY(true)).notNullable();

            table.integer(MESSAGE.columns.CHAT_ID(true)).unsigned().notNullable();
            table.foreign(MESSAGE.columns.CHAT_ID(true)).references(CHAT.columns.ID());
            table.integer(MESSAGE.columns.USER_ID(true)).unsigned().notNullable();
            table.foreign(MESSAGE.columns.USER_ID(true)).references(USER.columns.ID());

            table.boolean(MESSAGE.columns.IS_READ(true)).defaultTo(false);
            table.boolean(MESSAGE.columns.IS_IMPORTANT(true)).defaultTo(false);
            table.timestamp(MESSAGE.columns.CREATED_AT(true)).defaultTo(knex.fn.now());
            table.timestamp(MESSAGE.columns.UPDATED_AT(true)).defaultTo(knex.fn.now());
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.down = function (knex) {
    return knex.schema
        .dropTable(MESSAGE.tableName);
};
