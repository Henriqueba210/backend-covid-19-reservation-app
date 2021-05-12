import { Knex } from 'knex'

exports.seed = async (knex: Knex) => {
  // Deletes ALL existing entries
  await knex('cliente').del()

  // Inserts seed entries
  await knex('cliente').insert([
    { nome: 'Henrique Barros de Almeida', idade: 19, email: 'teste@example.com', senha: 1234, telefone: '19987456321' }
  ])
}
