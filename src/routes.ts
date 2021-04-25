import ClientController from '@controllers/ClientController'
import { Router } from 'express'

const routes = Router()

routes.get('/clientes', ClientController.index)

export default routes
