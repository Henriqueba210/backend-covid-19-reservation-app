import FidelidadeService from 'src/services/FidelidadeService'
import { Body, Controller, Delete, Get, Path, Post, Put, Route, Tags } from '@tsoa/runtime'
import { IFidelidade } from '@models/IFidelidade'

@Route('fidelidade')
@Tags('Fidelidade')
export class ClienteController extends Controller {
  @Get('/')
  async index (): Promise<IFidelidade[]> {
    const Fidelidades: IFidelidade[] = await FidelidadeService.query()
    return Fidelidades
  }

  @Post('/')
  async criarFidelidade (@Body() requestBody: IFidelidade): Promise<IFidelidade> {
    return FidelidadeService.query().insert(requestBody)
  }

  @Put('/')
  async atualizarFidelidade (@Body() requestBody: IFidelidade): Promise<IFidelidade> {
    return FidelidadeService.query().updateAndFetch(requestBody)
  }

  @Delete('/{FidelidadeID}')
  async deletarFidelidade (@Path() FidelidadeID: number) : Promise<number> {
    return FidelidadeService.query().deleteById(FidelidadeID)
  }
}
