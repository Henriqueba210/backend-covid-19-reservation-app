import { IFidelidade } from '@models/IFidelidade'
import { Model } from 'objection'

export default class FidelidadeService extends Model implements IFidelidade {
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
