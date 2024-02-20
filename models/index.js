const mongoose = require('mongoose')
const choreSchema = require('./chore')
const familyMemberSchema = require('./family-member')
const parentSchema = require('./parent')


const Chore = mongoose.model('Chore', choreSchema)
const Family = mongoose.model('Family', familyMemberSchema)
const Parent = mongoose.model('Parent', parentSchema)

module.exports = {
    Chore,
    Family,
    Parent
}