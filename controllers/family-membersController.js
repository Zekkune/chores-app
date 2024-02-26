const Family = require('../models/family-member')


const getAllFamily = async (req, res) => {
    try {
        const people = await Family.find()
        res.json(people)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}
const findFamily = (req, res) => {
    req.query.name == null ? res.send( {msg: People } ) : res.send(People.filter(x => x.name === req.query.name))
}

const addFamily = async (req, res) => {
    try {
        const { name, age, relationshipToParent } = req.body
        const newFamily = new Family({ name, age, relationshipToParent })
        await newFamily.save()
        res.status(201).json(newFamily)
        console.log(newFamily)
    } catch (error) {
        console.error('Error adding family member:', error)
        return res.status(500).json({ error: 'Failed to add family member', message: error.message })
    }
}


module.exports = {
    findFamily,
    getAllFamily,
    addFamily,
}