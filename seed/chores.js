const db = require('../db')
const Chores = require('../models/chore')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
const chores = [
    {
        name: 'Dishes',
        task: 'Unload the clean dishes from the dishwasher and add a new load 😎🍽️'
    }
]
await Chores.insertMany(chores)
console.log("Created actors")
}
const run = async () => {
await main()
db.close()
}

run()
