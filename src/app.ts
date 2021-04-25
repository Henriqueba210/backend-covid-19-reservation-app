import cors from 'cors'
import express from 'express'
import { Model } from 'objection'
import swaggerUI from 'swagger-ui-express'
import routes from './routes'
import { swaggerDocument } from './swaggerDocument'

class App {
    public express: express.Application

    public constructor () {
      this.express = express()
      this.middlewares()
      this.routes()
      this.database()
    }

    private middlewares (): void {
      this.express.use(express.json())
      this.express.use(cors())
      this.express.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
    }

    private database (): void {
      const knexfile = require('knexfile')
      const knex = require('knex')(knexfile.development)
      Model.knex(knex)
    }

    private routes (): void {
      this.express.use(routes)
    }
}

export default new App().express
