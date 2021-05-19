/**
 * @tsoaModel
 */
export interface IReserva {
  idReserva: number
  idCliente: number
  idEstabelecimento: number
  valor: string
  dataReserva: string
  horaInicio: string
  horaFim: Date
  qtdPessoas: string
}
