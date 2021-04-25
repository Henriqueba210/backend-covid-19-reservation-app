import { Knex } from 'knex'

exports.up = (knex: Knex) => {
  return knex.schema.createTable('cliente', (table) => {
    table.increments('id_cliente')
    table.string('nome', 50).notNullable()
    table.integer('idade', 3).notNullable()
    table.string('email', 30).notNullable()
    table.string('senha', 40).notNullable()
    table.string('telefone', 30)

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = (knex: Knex) => {
  return knex.schema.dropTable('cliente')
}
