import ClienteService from 'src/services/ClienteService'
import { Body, Controller, Delete, Get, Path, Post, Put, Route, Tags } from '@tsoa/runtime'
import { ICliente } from '@models/ICliente'

@Route('clientes')
@Tags('Clientes')
export class ClienteController extends Controller {
  @Get('/')
  async index (): Promise<ICliente[]> {
    const clientes: ICliente[] = await ClienteService.query()
    return clientes
  }

  @Post('/')
  async criarCliente (@Body() requestBody: ICliente): Promise<ICliente> {
    return ClienteService.query().insert(requestBody)
  }

  @Put('/')
  async atualizarClietne (@Body() requestBody: ICliente): Promise<ICliente> {
    return ClienteService.query().updateAndFetch(requestBody)
  }

  @Delete('/{clienteID}')
  async deleteClient (@Path() clienteID: number) : Promise<number> {
    return ClienteService.query().deleteById(clienteID)
  }
}
