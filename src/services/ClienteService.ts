import { ICliente } from '@models/ICliente'
import { Model } from 'objection'

export default class ClienteService extends Model implements ICliente {
  idCliente!: number
  nome!: string
  email!: string
  senha!: string
  telefone?: string
  createdAt!: Date
  updatedAt!: Date

  static get tableName (): string {
    return 'cliente'
  }
}
