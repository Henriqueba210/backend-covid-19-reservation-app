import { ValidateError } from '@tsoa/runtime'
import { NextFunction, Request, Response } from 'express'

export default function tsoaErrorHandler (err: any, req: Request, res: Response, next: NextFunction) {
  if (err instanceof ValidateError) {
    console.warn(`Caught Validation Error for ${req.path}:`, err.fields)
    return res.status(422).json({
      message: 'Validation Failed',
      details: err?.fields
    })
  }
  next()
}
