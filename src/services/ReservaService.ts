import { IReserva } from '@models/IReserva'
import BaseService from './BaseService'

export default class ReservaService extends BaseService implements IReserva {
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
