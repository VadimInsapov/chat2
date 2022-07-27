/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const {CHAT} = require("../tableNames");
exports.seed = async function (knex) {
    await knex(CHAT.tableName).insert([
        {
            [CHAT.columns.NAME(true)]: "Михаил Емельянов",
        },
        {
            [CHAT.columns.NAME(true)]: "Олег Васнецов",
        },
        {
            [CHAT.columns.NAME(true)]: "Друзья",
        },
        {
            [CHAT.columns.NAME(true)]: "Коллеги",
        },
    ]);
};
