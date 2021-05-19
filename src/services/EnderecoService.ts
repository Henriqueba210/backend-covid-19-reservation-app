import { IEndereco } from '@models/IEnderenco'
import { Model } from 'objection'

export default class EnderecoService extends Model implements IEndereco {
  idEndereco!: number
  endereco!: string
  numero!: string
  bairro!: string
  cidade!: string
  uf!: string
  pais!: Date
  cep!: string
  createdAt!: Date
  updatedAt!: Date

  static get tableName (): string {
    return 'endereco'
  }
}
