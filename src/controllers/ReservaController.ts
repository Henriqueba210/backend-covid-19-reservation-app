import ReservaService from 'src/services/ReservaService'
import { Body, Controller, Delete, Get, Path, Post, Put, Query, Route, Tags } from '@tsoa/runtime'
import { IReserva } from '@models/IReserva'

@Route('reservas')
@Tags('Reservas')
export class ReservaController extends Controller {
  @Get('/cliente/{clienteID}')
  async getReservasByClienteID (@Path() clienteID: string, @Query() dataPesquisa?: Date): Promise<IReserva[]> {
    if (dataPesquisa === null) {
      return await ReservaService.query().where('cliente_id', clienteID)
    } else {
      return await ReservaService.query()
        .where('idCliente', clienteID)
        .where('data_reserva', dataPesquisa)
    }
  }

  @Get('/estabelecimento/{estabelecimentoID}')
  async getReservasByEstabelecimentoID (@Path() estabelecimentoID: string, @Query() dataPesquisa?: Date): Promise<IReserva[]> {
    if (dataPesquisa === null || dataPesquisa === undefined) {
      return await ReservaService.query().where('id_estabelecimento', estabelecimentoID)
    } else {
      return await ReservaService.query()
        .where('id_estabelecimento', estabelecimentoID)
        .where('data_reserva', dataPesquisa)
    }
  }

  @Post('/')
  async criarReserva (@Body() requestBody: IReserva): Promise<IReserva> {
    return await ReservaService.query().insert(requestBody)
  }

  @Put('/')
  async atualizarReserva (@Body() requestBody: IReserva): Promise<IReserva> {
    return await ReservaService.query().updateAndFetch(requestBody)
  }

  @Delete('/{reservaID}')
  async deletarReserva (@Path() reservaID: number) : Promise<string> {
    if (await ReservaService.query().delete().where('id_reserva', reservaID) > 0) {
      return 'Reserva deletada com sucesso'
    } else {
      this.setStatus(404)
      return 'Nenhuma reserva com esse id foi encontrada'
    }
  }
}
