/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const {MESSAGE} = require("../tableNames");
exports.seed = async function(knex) {
  await knex(MESSAGE.tableName).insert([
    {
      [MESSAGE.columns.BODY(true)]: 'Привет, это Вадим, диалог с Мишей',
      [MESSAGE.columns.CHAT_ID(true)]: 1,
      [MESSAGE.columns.USER_ID(true)]: 1,
      [MESSAGE.columns.IS_READ(true)]: true,
      [MESSAGE.columns.IS_IMPORTANT(true)]: false,
    },
    {
      [MESSAGE.columns.BODY(true)]: 'Привет, это Миша, диалог с Вадимом',
      [MESSAGE.columns.CHAT_ID(true)]: 1,
      [MESSAGE.columns.USER_ID(true)]: 5,
      [MESSAGE.columns.IS_READ(true)]: true,
      [MESSAGE.columns.IS_IMPORTANT(true)]: false,
    },
    {
      [MESSAGE.columns.BODY(true)]: 'Всё круто!',
      [MESSAGE.columns.CHAT_ID(true)]: 1,
      [MESSAGE.columns.USER_ID(true)]: 5,
      [MESSAGE.columns.IS_READ(true)]: true,
      [MESSAGE.columns.IS_IMPORTANT(true)]: false,
    },

    {
      [MESSAGE.columns.BODY(true)]: 'Привет, это Вадим, диалог с Олегом!',
      [MESSAGE.columns.CHAT_ID(true)]: 2,
      [MESSAGE.columns.USER_ID(true)]: 1,
      [MESSAGE.columns.IS_READ(true)]: true,
      [MESSAGE.columns.IS_IMPORTANT(true)]: false,
    },
    {
      [MESSAGE.columns.BODY(true)]: 'Привет, это Олег, диалог с Вадимом!',
      [MESSAGE.columns.CHAT_ID(true)]: 2,
      [MESSAGE.columns.USER_ID(true)]: 4,
      [MESSAGE.columns.IS_READ(true)]: true,
      [MESSAGE.columns.IS_IMPORTANT(true)]: false,
    },
    {
      [MESSAGE.columns.BODY(true)]: 'Всё круто!',
      [MESSAGE.columns.CHAT_ID(true)]: 2,
      [MESSAGE.columns.USER_ID(true)]: 4,
      [MESSAGE.columns.IS_READ(true)]: true,
      [MESSAGE.columns.IS_IMPORTANT(true)]: false,
    },

    {
      [MESSAGE.columns.BODY(true)]: 'Привет, это Вадим в чате Друзей!',
      [MESSAGE.columns.CHAT_ID(true)]: 3,
      [MESSAGE.columns.USER_ID(true)]: 1,
      [MESSAGE.columns.IS_READ(true)]: true,
      [MESSAGE.columns.IS_IMPORTANT(true)]: false,
    },
    {
      [MESSAGE.columns.BODY(true)]: 'Привет, это Ваня в чате Друзей!',
      [MESSAGE.columns.CHAT_ID(true)]: 3,
      [MESSAGE.columns.USER_ID(true)]: 2,
      [MESSAGE.columns.IS_READ(true)]: true,
      [MESSAGE.columns.IS_IMPORTANT(true)]: false,
    },
    {
      [MESSAGE.columns.BODY(true)]: 'Привет, это Рома в чате Друзей!',
      [MESSAGE.columns.CHAT_ID(true)]: 3,
      [MESSAGE.columns.USER_ID(true)]: 3,
      [MESSAGE.columns.IS_READ(true)]: true,
      [MESSAGE.columns.IS_IMPORTANT(true)]: false,
    },
    {
      [MESSAGE.columns.BODY(true)]: 'Всё круто!',
      [MESSAGE.columns.CHAT_ID(true)]: 3,
      [MESSAGE.columns.USER_ID(true)]: 2,
      [MESSAGE.columns.IS_READ(true)]: true,
      [MESSAGE.columns.IS_IMPORTANT(true)]: false,
    },
    {
      [MESSAGE.columns.BODY(true)]: 'Как вы?',
      [MESSAGE.columns.CHAT_ID(true)]: 3,
      [MESSAGE.columns.USER_ID(true)]: 3,
      [MESSAGE.columns.IS_READ(true)]: true,
      [MESSAGE.columns.IS_IMPORTANT(true)]: false,
    },

    {
      [MESSAGE.columns.BODY(true)]: 'Привет, это Миша в чате Коллеги!',
      [MESSAGE.columns.CHAT_ID(true)]: 4,
      [MESSAGE.columns.USER_ID(true)]: 5,
      [MESSAGE.columns.IS_READ(true)]: true,
      [MESSAGE.columns.IS_IMPORTANT(true)]: false,
    },
    {
      [MESSAGE.columns.BODY(true)]: 'Привет, это Олег в чате Коллеги!',
      [MESSAGE.columns.CHAT_ID(true)]: 4,
      [MESSAGE.columns.USER_ID(true)]: 4,
      [MESSAGE.columns.IS_READ(true)]: true,
      [MESSAGE.columns.IS_IMPORTANT(true)]: false,
    },
    {
      [MESSAGE.columns.BODY(true)]: 'Привет, это Вадим в чате Коллеги!',
      [MESSAGE.columns.CHAT_ID(true)]: 4,
      [MESSAGE.columns.USER_ID(true)]: 1,
      [MESSAGE.columns.IS_READ(true)]: true,
      [MESSAGE.columns.IS_IMPORTANT(true)]: false,
    },
    {
      [MESSAGE.columns.BODY(true)]: 'Чё там по задачам?',
      [MESSAGE.columns.CHAT_ID(true)]: 4,
      [MESSAGE.columns.USER_ID(true)]: 1,
      [MESSAGE.columns.IS_READ(true)]: true,
      [MESSAGE.columns.IS_IMPORTANT(true)]: false,
    },
    {
      [MESSAGE.columns.BODY(true)]: 'Всё круто!',
      [MESSAGE.columns.CHAT_ID(true)]: 4,
      [MESSAGE.columns.USER_ID(true)]: 4,
      [MESSAGE.columns.IS_READ(true)]: true,
      [MESSAGE.columns.IS_IMPORTANT(true)]: false,
    },
    {
      [MESSAGE.columns.BODY(true)]: 'Всё круто!',
      [MESSAGE.columns.CHAT_ID(true)]: 4,
      [MESSAGE.columns.USER_ID(true)]: 5,
      [MESSAGE.columns.IS_READ(true)]: true,
      [MESSAGE.columns.IS_IMPORTANT(true)]: false,
    },
  ]);
};
