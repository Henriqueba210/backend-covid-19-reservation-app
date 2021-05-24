import { ICliente } from '@models/ICliente'
import BaseService from './BaseService'

export default class ClienteService extends BaseService implements ICliente {
  idCliente!: number
  nome!: string
  email!: string
  telefone?: string
  createdAt!: Date
  updatedAt!: Date

  static get tableName (): string {
    return 'cliente'
  }
}
