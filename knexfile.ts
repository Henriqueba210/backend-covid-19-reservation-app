// Update with your config settings.
require('ts-node/register')
const path = require('path')

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'reservation_app',
      user: 'backend',
      password: '1234'
    },
    migrations: {
      tableName: 'reservation_app_migrations',
      directory: path.join('src/database/migrations')
    },
    seeds: {
      directory: path.join('src/database/seeds')
    }
  }
}
