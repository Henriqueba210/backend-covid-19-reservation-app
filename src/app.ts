import bodyParser from 'body-parser'
import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'
import { Model } from 'objection'
import { RegisterRoutes } from './routes/routes'
import swaggerUi from 'swagger-ui-express'
import objectionErrorHandler from './utils/objectionErrorHandler'
import tsoaErrorHandler from './utils/tsoaErrorHandler'
class App {
    public express: express.Application

    public constructor () {
      this.express = express()
      this.routes()
      this.database()
      this.middlewares()
    }

    private middlewares (): void {
      this.express.use(cors())
      this.express.use(
        bodyParser.urlencoded({
          extended: true
        })
      )
      this.express.use(bodyParser.json())
      this.express.use('/docs', swaggerUi.serve, async (_req: Request, _res: Response) => {
        return _res.send(
          swaggerUi.generateHTML(await import('./swagger/swagger.json'))
        )
      })
      this.express.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
        objectionErrorHandler(err, res)
      })
      this.express.use((err: any, req: Request, res: Response, next: NextFunction) => {
        tsoaErrorHandler(err, req, res, next)
      })
    }

    private database (): void {
      const knexfile = require('knexfile')
      const knex = require('knex')(knexfile.development)
      Model.knex(knex)
    }

    private routes (): void {
      RegisterRoutes(this.express)
    }
}

export default new App().express
