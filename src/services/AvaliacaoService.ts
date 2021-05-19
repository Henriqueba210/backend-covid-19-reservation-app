import { Model } from 'objection'
import { IAvaliacao } from 'src/models/IAvaliacao'

export default class AvaliacaoService extends Model implements IAvaliacao {
  idAvaliacao!: number
  idCliente!: number
  idEstabelecimento!: number
  quantidadeReservas!: number
  quantidadeCancelamentos!: string
  createdAt!: Date
  updatedAt!: Date

  static get tableName (): string {
    return 'avaliacao'
  }
}
