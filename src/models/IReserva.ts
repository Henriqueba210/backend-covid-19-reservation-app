/**
 * @tsoaModel
 */
export interface IReserva {
  idReserva: number
  idCliente: number
  idEstabelecimento: number
  valor: string
  dataReserva: Date
  horaInicio: Date
  horaFim: Date
  qtdPessoas: string
}
