import { IEndereco } from '@models/IEnderenco'
import BaseService from './BaseService'

export default class EnderecoService extends BaseService implements IEndereco {
  idEndereco!: number
  endereco!: string
  numero!: string
  bairro!: string
  cidade!: string
  uf!: string
  pais!: string
  cep!: string
  createdAt!: Date
  updatedAt!: Date

  static get tableName (): string {
    return 'endereco'
  }
}
