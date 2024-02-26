const { urlencoded } = require('express')
const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Family = new Schema(
{
    name : {type: String, required: true},
    age : {type: Number, required: true},
    relationshipToParent : {type: String, required: true},
},
{timestamps: true} )

module.exports = mongoose.model('Family', Family)