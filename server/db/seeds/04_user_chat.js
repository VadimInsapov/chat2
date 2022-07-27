const {CHAT, USER_CHAT} = require("../tableNames");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex(USER_CHAT.tableName).insert([
    {
      [USER_CHAT.columns.USER_ID(true)]: "1",
      [USER_CHAT.columns.CHAT_ID(true)]: "1",
    },
    {
      [USER_CHAT.columns.USER_ID(true)]: "5",
      [USER_CHAT.columns.CHAT_ID(true)]: "1",
    },
    {
      [USER_CHAT.columns.USER_ID(true)]: "1",
      [USER_CHAT.columns.CHAT_ID(true)]: "2",
    },
    {
      [USER_CHAT.columns.USER_ID(true)]: "4",
      [USER_CHAT.columns.CHAT_ID(true)]: "2",
    },
    {
      [USER_CHAT.columns.USER_ID(true)]: "1",
      [USER_CHAT.columns.CHAT_ID(true)]: "3",
      [USER_CHAT.columns.IS_ADMIN(true)]: true,
    },
    {
      [USER_CHAT.columns.USER_ID(true)]: "2",
      [USER_CHAT.columns.CHAT_ID(true)]: "3",
      [USER_CHAT.columns.IS_ADMIN(true)]: true,
    },
    {
      [USER_CHAT.columns.USER_ID(true)]: "3",
      [USER_CHAT.columns.CHAT_ID(true)]: "3",
    },
    {
      [USER_CHAT.columns.USER_ID(true)]: "1",
      [USER_CHAT.columns.CHAT_ID(true)]: "4",
      [USER_CHAT.columns.IS_ADMIN(true)]: true,
    },
    {
      [USER_CHAT.columns.USER_ID(true)]: "4",
      [USER_CHAT.columns.CHAT_ID(true)]: "4",
    },
    {
      [USER_CHAT.columns.USER_ID(true)]: "5",
      [USER_CHAT.columns.CHAT_ID(true)]: "4",
    },
  ]);
};
