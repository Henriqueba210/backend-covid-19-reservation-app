/**
 * @tsoaModel
 */
export interface IAvaliacao {
  idAvaliacao: number
  idCliente: number
  idEstabelecimento: number
  avaliacao: number
  descricao: string
  createdAt: Date
  updatedAt: Date
}
