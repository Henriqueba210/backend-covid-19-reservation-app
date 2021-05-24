import AvaliacaoService from 'src/services/AvaliacaoService'
import { Body, Controller, Delete, Get, Path, Post, Put, Route, Tags } from '@tsoa/runtime'
import { IAvaliacao } from '@models/IAvaliacao'

@Route('avaliacoes')
@Tags('Avaliacoes')
export class AvaliacaoController extends Controller {
  @Get('/estabelecimento/{estabelecimentoID}')
  async getAvaliacaoEstabelecimento (@Path() estabelecimentoID: number): Promise<IAvaliacao[]> {
    return await AvaliacaoService.query().where('id_estabelecimento', estabelecimentoID)
  }

  @Get('/cliente/{clienteID}')
  async getAvaliacoesCliente (@Path() clienteID: number): Promise<IAvaliacao[]> {
    return await AvaliacaoService.query().where('id_cliente', clienteID)
  }

  @Post('/')
  async criarAvaliacao (@Body() requestBody: IAvaliacao): Promise<IAvaliacao> {
    return await AvaliacaoService.query().insert(requestBody)
  }

  @Put('/')
  async atualizarAvaliacao (@Body() requestBody: IAvaliacao): Promise<IAvaliacao> {
    return await AvaliacaoService.query().updateAndFetch(requestBody)
  }

  @Delete('/{avaliacaoID}')
  async deletarAvaliacao (@Path() avaliacaoID: number) : Promise<string> {
    const linhasAfetadas = await AvaliacaoService.query().deleteById(avaliacaoID)
    if (linhasAfetadas > 0) {
      return 'Avaliacao deletada com sucesso'
    } else {
      this.setStatus(404)
      return 'Avaliacao não encontrada'
    }
  }
}
