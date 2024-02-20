const express = require('express')
const db = require('./db');

const PORT = process.env.PORT || 3001
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const choreController = require('./controllers/choresController')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => res.send('working'))

app.post('/api/chores', choreController.addChore)

app.get('/chores', choreController.getAllChores)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))