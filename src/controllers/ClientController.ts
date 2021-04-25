import { Cliente } from '@models/Cliente'
import { Request, Response } from 'express'

class ClientController {
  async index (request: Request, response: Response): Promise<Response> {
    const clientes: Cliente[] = await Cliente.query()
    return response.json(clientes)
  }
}

export default new ClientController()
