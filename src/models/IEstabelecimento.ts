import { IEndereco } from './IEnderenco'

/**
 * @tsoaModel
 */
export interface IEstabelecimento {
  idEstabelecimento: number
  idEndereco: number
  endereco: IEndereco
  cnpj: string
  senha: string
  telefone: string
  lotacao: string
  horaAbertura: Date
  descricao?: string
  createdAt: Date
  updatedAt: Date
}
