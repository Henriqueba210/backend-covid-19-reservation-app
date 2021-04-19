// Update with your config settings.
require('ts-node/register')

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
      // eslint-disable-next-line node/no-path-concat
      directory: `${__dirname}/src/database/migrations`
    }
  }
}
