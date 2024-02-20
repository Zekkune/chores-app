const db = require('../db')
const Family = require('../models/family-member')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
const familyMembers = [
    {
        name: 'Aubrey',
        age: 17,
        relationshipToParent: 'Daughter',
        primary_user: true
    }
]
await Family.insertMany(familyMembers)
console.log(`added family members`)
}
const run = async () => {
await main()
db.close()
}

run()
