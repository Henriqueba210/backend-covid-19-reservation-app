import { Knex } from 'knex'

exports.up = (knex: Knex) => {
  return knex.schema.createTable('cliente', (table) => {
    table.increments('id_cliente')
    table.string('nome', 50)
    table.integer('idade', 3)
    table.string('email', 30)
    table.string('senha', 30)
    table.string('telefone', 30)

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = (knex: Knex) => {
  return knex.schema.dropTable('cliente')
}
