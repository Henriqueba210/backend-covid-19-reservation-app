import { IEstabelecimento } from '@models/IEstabelecimento'
import { Model } from 'objection'

export default class EstablecimentoService extends Model implements IEstabelecimento {
  idEstabelecimento!: number
  idEndereco!: number
  cnpj!: string
  senha!: string
  telefone!: string
  lotacao!: string
  horaAbertura!: Date
  descricao?: string
  createdAt!: Date
  updatedAt!: Date

  static get tableName (): string {
    return 'estabelecimento'
  }
}
