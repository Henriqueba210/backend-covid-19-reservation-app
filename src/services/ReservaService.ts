import { IReserva } from '@models/IReserva'
import { Model } from 'objection'

export default class ReservaService extends Model implements IReserva {
  idReserva!: number
  idCliente!: number
  idEstabelecimento!: number
  valor!: string
  dataReserva!: string
  horaInicio!: string
  horaFim!: Date
  qtdPessoas!: string

  static get tableName (): string {
    return 'reserva'
  }
}
