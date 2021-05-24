import { Knex } from 'knex'

exports.seed = async (knex: Knex) => {
  // Deletes ALL existing entries
  await knex('avaliacao').del()
  await knex('reserva').del()
  await knex('estabelecimento').del()
  await knex('endereco').del()
  await knex('cliente').del()

  // Inserts seed entries
  await knex('cliente').insert([
    { id_cliente: 1, nome: 'Carol', idade: 19, email: 'teste@example.com', senha: 1234, telefone: '19987456321' },
    { id_cliente: 2, nome: 'Eliana', idade: 19, email: 'teste@example.com', senha: 1234, telefone: '19987456321' },
    { id_cliente: 3, nome: 'Henrique Barros de Almeida', idade: 19, email: 'teste@example.com', senha: 1234, telefone: '19987456321' },
    { id_cliente: 4, nome: 'Gabriel Cabral', idade: 19, email: 'teste@example.com', senha: 1234, telefone: '19987456321' },
    { id_cliente: 5, nome: 'Gabriel Gonçalves de Oliveira', idade: 19, email: 'teste@example.com', senha: 1234, telefone: '19987456321' }
  ])

  await knex('endereco').insert([
    {
      id_endereco: 1,
      endereco: 'Av. Nossa Sra. de Fátima, 850',
      numero: '850',
      bairro: 'Vila Israel',
      cidade: 'Americana',
      uf: 'SP',
      pais: 'Brasil',
      cep: '13478540'
    }
  ])

  await knex('estabelecimento').insert([
    {
      id_estabelecimento: 1,
      id_endereco: 1,
      email: 'teste@gmail.com',
      cnpj: '44477108000145',
      senha: '1234',
      telefone: '9125885994',
      lotacao: 20,
      hora_abertura: '2021-01-01 10:10:10',
      descricao: 'McDonald\'s'
    }
  ])

  await knex('avaliacao').insert([
    {
      id_avaliacao: 1,
      id_cliente: 1,
      id_estabelecimento: 1,
      avaliacao: 10,
      descricao: 'Maravilhoso'
    }
  ])

  await knex('reserva').insert([
    {
      id_reserva: 1,
      id_cliente: 1,
      id_estabelecimento: 1,
      status: 1,
      valor: '50.00',
      data_reserva: '2021-05-24 10:10:10',
      hora_inicio: '2021-05-24 10:10:10',
      hora_fim: '2021-05-24 11:10:10',
      qtd_pessoas: '2'
    }
  ])

  await knex('fidelidade').insert([
    {
      id_fidelidade: 1,
      id_cliente: 1,
      id_estabelecimento: 1,
      qtd_reservas: 1,
      qtd_cancelamentos: 0
    }
  ])
}
