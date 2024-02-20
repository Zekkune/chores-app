const db = require('../db')
const Parent = require('../models/parent')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
const parents = [
    {
        name: 'Tausha',
        age: 37,
        family: ['65d4d6cb2f13ef42d12d796a']
    }
]
await Parent.insertMany(parents)
console.log(`added parents`)
}
const run = async () => {
await main()
db.close()
}

run()
