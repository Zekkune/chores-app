const express = require('express')
const db = require('./db');

const PORT = process.env.PORT || 3001
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')

app.use(logger('dev'))
app.use(bodyParser.json())


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/middleware', (req, res, next) => {
console.log('this is middleware')
next()
},
(req, res) => {
res.send('response completed')
})

app.get('/', (req, res) => res.send('working'))