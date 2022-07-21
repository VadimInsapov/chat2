/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const {USER} = require("../tableNames");
exports.up = function(knex) {
    return knex.schema
        .createTable(USER.tableName, function (table) {
            table.increments(USER.columns.ID(true)).primary();
            table.string(USER.columns.EMAIL(true)).notNullable();
            table.string(USER.columns.PASSWORD(true)).notNullable();
            table.string(USER.columns.NAME(true));
            table.string(USER.columns.LAST_NAME(true));
            table.timestamp(USER.columns.BIRTH_DATE(true)).defaultTo(null);
            table.string(USER.columns.PHONE(true));
            table.string(USER.columns.AVATAR(true));
            table.boolean(USER.columns.ACTIVE_STATUS(true)).defaultTo(false);
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
        .dropTable(USER.tableName);
};
