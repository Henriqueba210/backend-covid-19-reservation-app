import { IReserva } from '@models/IReserva'
import { Model } from 'objection'
import BaseService from './BaseService'

export default class ReservaService extends BaseService implements IReserva {
  idReserva!: number
  idCliente!: number
  idEstabelecimento!: number
  valor!: string
  dataReserva!: Date
  horaInicio!: Date
  horaFim!: Date
  qtdPessoas!: string

  static get tableName (): string {
    return 'reserva'
  }

  static get relationMappings () {
    return {
      cliente: {
        relation: Model.BelongsToOneRelation,
        modelClass: 'ClienteService',
        join: {
          from: 'reserva.id_cliente',
          to: 'cliente.id_cliente'
        }
      },
      estabelecimento: {
        relation: Model.BelongsToOneRelation,
        modelClass: 'EstabelecimentoService',
        join: {
          from: 'reserva.id_estabelecimento',
          to: 'estabelecimento.id_estabelecimento'
        }
      }
    }
  }
}
