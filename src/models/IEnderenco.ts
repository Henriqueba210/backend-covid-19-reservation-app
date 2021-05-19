/**
 * @tsoaModel
 */
export interface IEndereco {
  idEndereco: number
  endereco: string
  numero: string
  bairro: string
  cidade: string
  uf: string
  pais: Date
  cep: string
  createdAt: Date
  updatedAt: Date
}
