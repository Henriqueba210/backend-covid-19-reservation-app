import { ICliente } from '../models/ICliente'
import { Request, Response } from 'express'
import ClienteService from 'src/services/ClienteService'
import { Route, Controller } from '@tsoa/runtime'

@Route('/login')
export class LoginController extends Controller {
  @Route('/usuario')
  async clienteLogin (request: Request<{email: string, senha: string}>, response: Response): Promise<ICliente> {
    const tentativaLogin = await ClienteService.query()
      .where('email', '=', request.body.email)
      .where('password', '=', request.body.password)

    if (tentativaLogin[0] !== null) {
      response.statusCode = 201
      return tentativaLogin[0]
    } else {
      throw new Error('Usuário ou senha incorretos')
    }
  }
}

export default new LoginController()
