import EstabelecimentoService from 'src/services/EstabelecimentoService'
import { Body, Controller, Delete, Get, Path, Post, Put, Route, Tags } from '@tsoa/runtime'
import { IEstabelecimento } from '@models/IEstabelecimento'

@Route('estabelecimentos')
@Tags('Estabelecimentos')
export class EstablecimentoController extends Controller {
  @Get('/')
  async index (): Promise<IEstabelecimento[]> {
    const estabelecimentos: IEstabelecimento[] = await EstabelecimentoService.query()
    return estabelecimentos
  }

  @Post('/')
  async criarEstabelecimento (@Body() requestBody: IEstabelecimento): Promise<IEstabelecimento> {
    return EstabelecimentoService.query().insert(requestBody)
  }

  @Put('/')
  async atualizarEstabelecimento (@Body() requestBody: IEstabelecimento): Promise<IEstabelecimento> {
    return EstabelecimentoService.query().updateAndFetch(requestBody)
  }

  @Delete('/{estabelecimentoID}')
  async deletarEstabelecimento (@Path() estabelecimentoID: number) : Promise<number> {
    return EstabelecimentoService.query().deleteById(estabelecimentoID)
  }
}
