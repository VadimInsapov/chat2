require('dotenv').config({path: '../.env'});
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    migrations: {
      tableName: 'knex_migrations'
    },
    connection: process.env.DB_CONNECTION_STRING,
  },
};
