import { IFidelidade } from '@models/IFidelidade'
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
}
