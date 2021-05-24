import EstabelecimentoService from 'src/services/EstabelecimentoService'
import { Body, Controller, Delete, Get, Path, Post, Put, Query, Route, Tags } from '@tsoa/runtime'
import { IEstabelecimento } from '@models/IEstabelecimento'

@Route('estabelecimentos')
@Tags('Estabelecimentos')
export class EstablecimentoController extends Controller {
  @Get('/')
  async index (@Query() cidade: string, @Query() uf: string): Promise<IEstabelecimento[]> {
    const estabelecimentos: IEstabelecimento[] = await EstabelecimentoService.query()
      .where('endereco.cidade', cidade)
      .where('endereco.uf', uf)
      .joinRelated('endereco')

    return estabelecimentos
  }

  @Post('/')
  async criarEstabelecimento (@Body() requestBody: IEstabelecimento): Promise<IEstabelecimento> {
    return EstabelecimentoService.query().insertGraphAndFetch(requestBody)
  }

  @Put('/')
  async atualizarEstabelecimento (@Body() requestBody: IEstabelecimento): Promise<IEstabelecimento> {
    return EstabelecimentoService.query().upsertGraphAndFetch(requestBody)
  }

  @Delete('/{estabelecimentoID}')
  async deletarEstabelecimento (@Path() estabelecimentoID: number) : Promise<string> {
    const linhasAfetadas = await EstabelecimentoService.query().deleteById(estabelecimentoID)
    if (linhasAfetadas > 0) {
      return 'Estabelecimento deletado com sucesso'
    } else {
      this.setStatus(404)
      return 'Estabelecimento não encontrado'
    }
  }
}
