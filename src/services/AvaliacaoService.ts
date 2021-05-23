import { IAvaliacao } from 'src/models/IAvaliacao'
import BaseService from './BaseService'

export default class AvaliacaoService extends BaseService implements IAvaliacao {
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
