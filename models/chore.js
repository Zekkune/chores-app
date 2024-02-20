const { urlencoded } = require('express')
const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Chore = new Schema(
{
    name : {type: String, required: true},
    task : {type: String, required: true}
},
{timestamps: true} )

module.exports = mongoose.model('Chore', Chore)