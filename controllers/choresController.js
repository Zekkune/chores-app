const Chores = require('../models/chore')


const getChoresById = async (req, res) => {
    try {
        const { id } = req.params
        const chore = await Chores.findById(id)
        if (chore) {
            return res.json(chore)
        }
        return res.status(500).send(e.message)
    } catch (e) {
        return res.status(500).send(error.message)
    }
}

const getAllChores = async (req, res) => {
    try {
        const chores = await Chores.find()
        res.json(chores)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}





// controller.js

const addChore = async (req, res) => {
    try {
        const { name, task } = req.body
        const newChore = new Chores({ name, task })
        await newChore.save()
        res.status(201).json(newChore)
        console.log(newChore)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}


module.exports = {
    addChore,
    getAllChores
}