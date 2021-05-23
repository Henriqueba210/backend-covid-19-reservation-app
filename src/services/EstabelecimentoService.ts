import { IEndereco } from '@models/IEnderenco'
import { IEstabelecimento } from '@models/IEstabelecimento'
import { Model } from 'objection'

export default class EstabelecimentoService extends Model implements IEstabelecimento {
  idEstabelecimento!: number
  idEndereco!: number
  endereco!: IEndereco
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

  static get relationMappings () {
    return {
      enderecoEstabelecimento: {
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
