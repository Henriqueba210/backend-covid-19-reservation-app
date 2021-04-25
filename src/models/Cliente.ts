import { Model } from 'objection'

export class Cliente extends Model {
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
