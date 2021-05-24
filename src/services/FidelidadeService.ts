import { IFidelidade } from '@models/IFidelidade'
import { Model } from 'objection'
import BaseService from './BaseService'

export default class FidelidadeService extends BaseService implements IFidelidade {
  idFidelidade!: number
  idCliente!: number
  idEstabelecimento!: number
  quantidadeReservas!: number
  quantidadeCancelamentos!: string
  createdAt!: Date
  updatedAt!: Date

  static get tableName (): string {
    return 'fidelidade'
  }

  static get relationMappings () {
    return {
      cliente: {
        relation: Model.BelongsToOneRelation,
        modelClass: 'ClienteService',
        join: {
          from: 'fidelidade.id_cliente',
          to: 'cliente.id_cliente'
        }
      },
      estabelecimento: {
        relation: Model.BelongsToOneRelation,
        modelClass: 'EstabelecimentoService',
        join: {
          from: 'fidelidade.id_estabelecimento',
          to: 'estabelecimento.id_estabelecimento'
        }
      }
    }
  }
}
