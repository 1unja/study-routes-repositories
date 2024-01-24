import bodyParser from 'body-parser'
import express from 'express'
import { coureseRouter } from './routes/coursesRouter'
import { adressesRouter } from './routes/adressesRouter'

const app = express()
const port = 3000

const jsonBodyMidlewear = bodyParser({})
app.use(jsonBodyMidlewear)


app.use('/home', coureseRouter)
app.use('/adresses', adressesRouter)

app.listen(port, () => {
  console.log('app is listening port: ' + port)
})