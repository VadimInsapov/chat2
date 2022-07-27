const {CHAT, FRIENDS} = require("../tableNames");
/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.up = function(knex) {
    return knex.schema
        .createTable(CHAT.tableName, function (table) {
            table.increments(CHAT.columns.ID(true)).primary();
            table.string(CHAT.columns.NAME(true)).notNullable();
            table.string(CHAT.columns.LOGO(true))
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.down = function(knex) {
    return knex.schema
        .dropTable(CHAT.tableName);
};
