import express, { request, response } from 'express'

const app = express()

app.get('/', (request, response) => {
    return { message: 'Hello World' }
})

app.listen(3333)

console.log("App started 1")