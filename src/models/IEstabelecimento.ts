import { IEndereco } from './IEnderenco'

/**
 * @tsoaModel
 */
export interface IEstabelecimento {
  idEstabelecimento: number
  idEndereco: number
  endereco: IEndereco
  email: string
  cnpj: string
  senha: string
  telefone: string
  lotacao: number
  horaAbertura: Date
  descricao?: string
  createdAt: Date
  updatedAt: Date
}
