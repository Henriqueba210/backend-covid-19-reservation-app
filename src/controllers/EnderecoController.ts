import EnderecoService from 'src/services/EnderecoService'
import { Body, Controller, Delete, Get, Path, Post, Put, Route, Tags } from '@tsoa/runtime'
import { IEndereco } from '@models/IEnderenco'

@Route('enderecos')
@Tags('Enderecos')
export class EnderecoController extends Controller {
  @Get('/')
  async index (): Promise<IEndereco[]> {
    const enderecos: IEndereco[] = await EnderecoService.query()
    return enderecos
  }

  @Post('/')
  async criarEndereco (@Body() requestBody: IEndereco): Promise<IEndereco> {
    return EnderecoService.query().insert(requestBody)
  }

  @Put('/')
  async atualizarEndereco (@Body() requestBody: IEndereco): Promise<IEndereco> {
    return EnderecoService.query().updateAndFetch(requestBody)
  }

  @Delete('/{enderecoID}')
  async deletarCliente (@Path() enderecoID: number) : Promise<string> {
    const linhasAfetadas = await EnderecoService.query().deleteById(enderecoID)
    if (linhasAfetadas > 0) {
      return 'Endereco deletado com sucesso'
    } else {
      this.setStatus(404)
      return 'Endereco não encontrado'
    }
  }
}
