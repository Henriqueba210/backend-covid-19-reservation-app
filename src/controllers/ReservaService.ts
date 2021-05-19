import ReservaService from 'src/services/ReservaService'
import { Body, Controller, Delete, Get, Path, Post, Put, Route, Tags } from '@tsoa/runtime'
import { IReserva } from '@models/IReserva'

@Route('reservas')
@Tags('Reservas')
export class ClienteController extends Controller {
  @Get('/')
  async index (): Promise<IReserva[]> {
    const Reservas: IReserva[] = await ReservaService.query()
    return Reservas
  }

  @Post('/')
  async criarReserva (@Body() requestBody: IReserva): Promise<IReserva> {
    return ReservaService.query().insert(requestBody)
  }

  @Put('/')
  async atualizarReserva (@Body() requestBody: IReserva): Promise<IReserva> {
    return ReservaService.query().updateAndFetch(requestBody)
  }

  @Delete('/{ReservaID}')
  async deletarReserva (@Path() ReservaID: number) : Promise<number> {
    return ReservaService.query().deleteById(ReservaID)
  }
}
