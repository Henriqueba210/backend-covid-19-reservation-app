/**
 * @tsoaModel
 */
export interface IReserva {
  idReserva: number
  idCliente: number
  idEstabelecimento: number
  status: number
  valor: string
  dataReserva: Date
  horaInicio: Date
  horaFim: Date
  qtdPessoas: string
  createdAt: Date
  updatedAt: Date
}
