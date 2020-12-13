import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'

const app = express()

app.use(bodyParser.json())
app.use('/api/v1', routes)

const PORT = '3333'
app.listen(PORT, () => console.log('app running on port ' + PORT))
