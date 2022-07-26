const {FRIENDS, USER} = require("../tableNames");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
        .createTable(FRIENDS.tableName, function (table) {
            table.integer(FRIENDS.columns.USER_ID(true)).unsigned().notNullable();
            table.foreign(FRIENDS.columns.USER_ID(true)).references(USER.columns.ID())
            table.integer(FRIENDS.columns.USER_ID2(true)).unsigned().notNullable();
            table.foreign(FRIENDS.columns.USER_ID2(true)).references(USER.columns.ID())
            table.primary([FRIENDS.columns.USER_ID(true), FRIENDS.columns.USER_ID2(true)])
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
        .dropTable(FRIENDS.tableName);
};
