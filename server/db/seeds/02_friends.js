/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const {FRIENDS} = require("../tableNames");
exports.seed = async function (knex) {
  await knex(FRIENDS.tableName).insert([
    {
      [FRIENDS.columns.USER_ID(true)]: '1',
      [FRIENDS.columns.USER_ID2(true)]: '2',
    },
    {
      [FRIENDS.columns.USER_ID(true)]: '3',
      [FRIENDS.columns.USER_ID2(true)]: '1',
    },
    {
      [FRIENDS.columns.USER_ID(true)]: '3',
      [FRIENDS.columns.USER_ID2(true)]: '2',
    },
    {
      [FRIENDS.columns.USER_ID(true)]: '3',
      [FRIENDS.columns.USER_ID2(true)]: '4',
    },
    {
      [FRIENDS.columns.USER_ID(true)]: '5',
      [FRIENDS.columns.USER_ID2(true)]: '3',
    },
  ]);
};
