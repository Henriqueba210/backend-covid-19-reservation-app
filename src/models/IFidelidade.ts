/**
 * @tsoaModel
 */
export interface IFidelidade {
  idFidelidade: number
  idCliente: number
  idEstabelecimento: number
  quantidadeReservas: number
  quantidadeCancelamentos: string
  createdAt: Date
  updatedAt: Date
}
