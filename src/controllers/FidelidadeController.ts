import FidelidadeService from 'src/services/FidelidadeService'
import { Body, Controller, Delete, Get, Path, Put, Query, Route, Tags } from '@tsoa/runtime'
import { IFidelidade } from '@models/IFidelidade'

@Route('fidelidade')
@Tags('Fidelidade')
export class FidelidadeController extends Controller {
  @Get('/')
  async index (@Query() idEstabelecimento: number, @Query() idCliente: number): Promise<IFidelidade[]> {
    return await FidelidadeService
      .query()
      .where('id_estabelecimento', idEstabelecimento)
      .where('id_cliente', idCliente)
  }

  @Put('/')
  async atualizarFidelidade (@Body() requestBody: IFidelidade): Promise<IFidelidade> {
    return FidelidadeService.query().upsertGraphAndFetch(requestBody)
  }

  @Delete('/{FidelidadeID}')
  async deletarFidelidade (@Path() FidelidadeID: number) : Promise<string> {
    const linhasAfetadas = await FidelidadeService.query().deleteById(FidelidadeID)
    if (linhasAfetadas > 0) {
      return 'Fidelidade deletada com sucesso'
    } else {
      this.setStatus(404)
      return 'Fidelidade não encontrada'
    }
  }
}
