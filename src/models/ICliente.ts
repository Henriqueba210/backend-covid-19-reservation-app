/**
 * @tsoaModel
 */
export interface ICliente {
  idCliente: number
  nome: string
  email: string
  telefone?: string
  createdAt: Date
  updatedAt: Date
}
