/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const {USER} = require("../tableNames");
exports.seed = async function (knex) {
    await knex(USER.tableName).del()
    await knex(USER.tableName).insert([
        {
            [USER.columns.EMAIL(true)]: 'insapovvadik@gmail.com',
            [USER.columns.PASSWORD(true)]: '$2a$05$EmNE/Gzo0k5tX1zaU7nK1OLwd5m0S/yKoBRs.wl8inqsWIMkfRt26',
            [USER.columns.NAME(true)]: 'Вадим',
            [USER.columns.LAST_NAME(true)]: 'Инсапов',
            [USER.columns.PHONE(true)]: '89825048630',
            [USER.columns.ACTIVE_STATUS(true)]: false,
        },
        {
            [USER.columns.EMAIL(true)]: 'ivanov@gmail.com',
            [USER.columns.PASSWORD(true)]: '$2a$05$EmNE/Gzo0k5tX1zaU7nK1OLwd5m0S/yKoBRs.wl8inqsWIMkfRt26',
            [USER.columns.NAME(true)]: 'Иван',
            [USER.columns.LAST_NAME(true)]: 'Иванов',
            [USER.columns.PHONE(true)]: '89821112233',
            [USER.columns.ACTIVE_STATUS(true)]: false,
        },
        {
            [USER.columns.EMAIL(true)]: 'roma@gmail.com',
            [USER.columns.PASSWORD(true)]: '$2a$05$EmNE/Gzo0k5tX1zaU7nK1OLwd5m0S/yKoBRs.wl8inqsWIMkfRt26',
            [USER.columns.NAME(true)]: 'Роман',
            [USER.columns.LAST_NAME(true)]: 'Сурков',
            [USER.columns.PHONE(true)]: '89825558833',
            [USER.columns.ACTIVE_STATUS(true)]: false,
        },
        {
            [USER.columns.EMAIL(true)]: 'oleg@gmail.com',
            [USER.columns.PASSWORD(true)]: '$2a$05$EmNE/Gzo0k5tX1zaU7nK1OLwd5m0S/yKoBRs.wl8inqsWIMkfRt26',
            [USER.columns.NAME(true)]: 'Олег',
            [USER.columns.LAST_NAME(true)]: 'Васнецов',
            [USER.columns.PHONE(true)]: '89829998877',
            [USER.columns.ACTIVE_STATUS(true)]: false,
        },
    ]);
};
