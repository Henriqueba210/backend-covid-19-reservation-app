/**
 * @tsoaModel
 */
export interface IFidelidade {
  idFidelidade: number
  idCliente: number
  idEstabelecimento: number
  quantidadeReservas: number
  quantidadeCancelamentos: number
  createdAt: Date
  updatedAt: Date
}
