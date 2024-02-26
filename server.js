const express = require('express')
const db = require('./db');

const PORT = process.env.PORT || 3001
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const choreController = require('./controllers/choresController')
const familyController = require('./controllers/family-membersController')

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => res.send('working'))
app.get('/chores', choreController.getAllChores)
// app.get('/chores/:id', choreController.deleteChoreById)
app.get('/chores/name', choreController.findChoreByName)
app.get('/chores/delete', choreController.deleteChoreByName)
app.get('/family-members', familyController.getAllFamily)
app.get('/family-members/name', familyController.findFamily)


app.post('/api/chores', choreController.addChore)
app.post('/api/family', async (req, res) => {
    try {
        await familyController.addFamily(req, res)
    } catch (error) {
        console.error('Error in adding family member route:', error.message)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})



