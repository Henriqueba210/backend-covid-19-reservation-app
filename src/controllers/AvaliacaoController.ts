import AvaliacaoService from 'src/services/AvaliacaoService'
import { Body, Controller, Delete, Path, Post, Put, Route, Tags } from '@tsoa/runtime'
import { IAvaliacao } from '@models/IAvaliacao'

@Route('avaliacoes')
@Tags('Avaliacoes')
export class AvaliacaoController extends Controller {
  @Post('/')
  async criarAvaliacao (@Body() requestBody: IAvaliacao): Promise<IAvaliacao> {
    return AvaliacaoService.query().insert(requestBody)
  }

  @Put('/')
  async atualizarAvaliacao (@Body() requestBody: IAvaliacao): Promise<IAvaliacao> {
    return AvaliacaoService.query().updateAndFetch(requestBody)
  }

  @Delete('/{avaliacaoID}')
  async deletarAvaliacao (@Path() avaliacaoID: number) : Promise<number> {
    return AvaliacaoService.query().deleteById(avaliacaoID)
  }
}
