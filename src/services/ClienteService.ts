import { Model } from 'objection'
import { ICliente } from '../models/ICliente'

export default class ClienteService extends Model implements ICliente {
  static get tableName (): string {
    return 'cliente'
  }

  public idCliente!: number
  public nome!: string
  public email!: string
  public senha!: string
  public telefone?: string
  public createdAt!: Date
  public updatedAt!: Date
}
