/**
 * @tsoaModel
 */
export interface IAvaliacao {
  idAvaliacao: number
  idCliente: number
  idEstabelecimento: number
  quantidadeReservas: number
  quantidadeCancelamentos: string
  createdAt: Date
  updatedAt: Date
}
