import { Knex } from 'knex'

exports.up = (knex: Knex) => {
  return knex.schema.createTable('cliente', table => {
    table.increments('id_cliente')
    table.string('nome', 50).notNullable()
    table.integer('idade', 3).notNullable()
    table.string('email', 30).notNullable()
    table.string('senha', 40).notNullable()
    table.string('telefone', 30)

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
    .createTable('endereco', table => {
      table.increments('id_endereco')
      table.string('endereco', 100).notNullable()
      table.string('numero', 10).notNullable()
      table.string('bairro', 100).notNullable()
      table.string('cidade', 100).notNullable()
      table.string('uf', 2).notNullable()
      table.string('pais', 30).notNullable()
      table.string('cep', 8).notNullable()

      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
    .createTable('estabelecimento', table => {
      table.increments('id_estabelecimento')
      table.integer('id_endereco').unsigned().notNullable()
      table.string('email', 30).notNullable()
      table.string('cnpj', 14).notNullable()
      table.string('senha', 40).notNullable()
      table.string('telefone', 30).notNullable()
      table.integer('lotacao').notNullable()
      table.dateTime('hora_abertura').notNullable()
      table.string('descricao')
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())

      table.foreign('id_endereco').references('id_endereco').inTable('endereco')
    })
    .createTable('reserva', table => {
      table.increments('id_reserva')
      table.integer('id_cliente').unsigned().notNullable()
      table.integer('id_estabelecimento').unsigned().notNullable()
      table.integer('status').notNullable()
      table.double('valor').notNullable()
      table.dateTime('data_reserva').notNullable()
      table.dateTime('hora_inicio').notNullable()
      table.dateTime('hora_fim').notNullable()
      table.integer('qtd_pessoas').notNullable()

      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())

      table.foreign('id_cliente').references('id_cliente').inTable('cliente')
      table.foreign('id_estabelecimento').references('id_estabelecimento').inTable('estabelecimento')
    })
    .createTable('fidelidade', table => {
      table.increments('id_fidelidade')
      table.integer('id_cliente').unsigned().notNullable()
      table.integer('id_estabelecimento').unsigned().notNullable()
      table.integer('qtd_reservas').notNullable()
      table.integer('qtd_cancelamentos').notNullable()

      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())

      table.foreign('id_cliente').references('id_cliente').inTable('cliente')
      table.foreign('id_estabelecimento').references('id_estabelecimento').inTable('estabelecimento')
    })
    .createTable('avaliacao', table => {
      table.increments('id_avaliacao')
      table.integer('id_cliente').unsigned().notNullable()
      table.integer('id_estabelecimento').unsigned().notNullable()
      table.integer('avaliacao').notNullable()
      table.string('descricao', 500).notNullable()

      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())

      table.foreign('id_cliente').references('id_cliente').inTable('cliente')
      table.foreign('id_estabelecimento').references('id_estabelecimento').inTable('estabelecimento')
    })
}

exports.down = (knex: Knex) => {
  return knex.schema.dropTable('cliente')
    .dropTable('endereco')
    .dropTable('estabelecimento')
    .dropTable('reserva')
    .dropTable('fidelidade')
    .dropTable('avaliacao')
}
