import { IEndereco } from '@models/IEnderenco'
import { IEstabelecimento } from '@models/IEstabelecimento'
import { Model } from 'objection'
import BaseService from './BaseService'

export default class EstabelecimentoService extends BaseService implements IEstabelecimento {
  idEstabelecimento!: number
  idEndereco!: number
  endereco!: IEndereco
  email!: string
  cnpj!: string
  senha!: string
  telefone!: string
  lotacao!: number
  horaAbertura!: Date
  descricao?: string
  createdAt!: Date
  updatedAt!: Date

  static get tableName (): string {
    return 'estabelecimento'
  }

  static get relationMappings () {
    return {
      endereco: {
        relation: Model.HasOneRelation,
        modelClass: 'EnderecoService',
        join: {
          from: 'estabelecimento.id_endereco',
          to: 'endereco.id_endereco'
        }
      }
    }
  }
}
