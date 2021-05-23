import EstabelecimentoService from 'src/services/EstabelecimentoService'
import { Body, Controller, Delete, Get, Path, Post, Put, Query, Route, Tags } from '@tsoa/runtime'
import { IEstabelecimento } from '@models/IEstabelecimento'

@Route('estabelecimentos')
@Tags('Estabelecimentos')
export class EstablecimentoController extends Controller {
  @Get('/')
  async index (@Query() cidade: string, @Query() estado: string): Promise<IEstabelecimento[]> {
    const estabelecimentos: IEstabelecimento[] =
      await EstabelecimentoService.relatedQuery('endereco')
        .where('endereco.cidade', cidade)

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
