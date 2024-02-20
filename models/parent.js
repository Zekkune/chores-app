const { urlencoded } = require('express')
const mongoose = require('mongoose')
const { Schema } = require('mongoose')
const Family = require('./family-member')

const Parent = new Schema(
{
    name : {type: String, required: true},
    age : {type: String, required: true},
    family : {type: mongoose.Schema.Types.ObjectId, ref: 'Family', required: true}
},
{timestamps: true} )

module.exports = mongoose.model('Parent', Parent)