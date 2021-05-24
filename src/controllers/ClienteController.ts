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
    return await ClienteService.query().insert(requestBody)
  }

  @Put('/')
  async atualizarClietne (@Body() requestBody: ICliente): Promise<ICliente> {
    return await ClienteService.query().updateAndFetch(requestBody)
  }

  @Delete('/{clienteID}')
  async deleteClient (@Path() clienteID: number) : Promise<string> {
    const linhasAfetadas = await ClienteService.query().deleteById(clienteID)
    if (linhasAfetadas > 0) {
      return 'Cliente deletado com sucesso'
    } else {
      this.setStatus(404)
      return 'Cliente não encontrado'
    }
  }
}
