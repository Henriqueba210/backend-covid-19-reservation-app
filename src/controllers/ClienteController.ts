import { ICliente } from '../models/ICliente'
import ClienteService from 'src/services/ClienteService'
import { Body, Controller, Delete, Get, Path, Post, Put, Route } from '@tsoa/runtime'

@Route('clientes')
export class ClienteController extends Controller {
  @Get('/')
  async index (): Promise<ICliente[]> {
    const clientes: ICliente[] = await ClienteService.query()
    return clientes
  }

  @Post('/')
  async createClient (@Body() requestBody: ICliente): Promise<ICliente> {
    return ClienteService.query().insert(requestBody)
  }

  @Put('/')
  async updateClient (@Body() requestBody: ICliente): Promise<ICliente> {
    return ClienteService.query().updateAndFetch(requestBody)
  }

  @Delete('/{clienteID}')
  async deleteClient (@Path() clienteID: number) : Promise<number> {
    return ClienteService.query().deleteById(clienteID)
  }
}
