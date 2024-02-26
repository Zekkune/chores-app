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

const findChoreByName = async (req, res) => {
    try {
        const choreName = req.query.name // Get the name query parameter from the request

        // If no name query parameter is provided, return all chores
        if (choreName == null) {
            const chores = await Chores.find()
            res.json(chores)
        } else {
            // If a name query parameter is provided, filter chores by name
            const filteredChores = await Chores.find({ name: choreName })
            res.json(filteredChores)
        }
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const deleteChoreByName = async (req, res) => {
    try {
        const choreName = req.query.name

        if (!choreName) {
            return res.status(400).send('Please provide a chore name to delete')
        
        } else  {
            const filteredChores = await Chores.findOneAndDelete({ name: choreName })

           if (!filteredChores) {
                return res.status(404).send('Chore not found')
            }
            res.json(filteredChores)
        }
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const deleteChoreById = async (req, res) => {
    try {
        const { id } = req.params
        const chore = Chores.findById(id)
        if (chore) {
            return res.json(chore)
        }
        return res.status(500).send(e.message)
        } catch (e) {
        return res.status(500).send(e.message)
    }
}

const updateChore = async (req, res) => {
    try {
        const newName = req.params.newName
        const choreName = req.params.name

        const newTask = req.params.newTask
        
        if (!chore) {
            return res.status(400).send('Please provide a chore name to update')
        } else {
            const chore = await Chores.findOneAndUpdate({name: choreName}, {$set: {name: newName }, $set: {newTask}}, { new: true })

            if (!chore) {
                return res.status(404).send('Please provide a chore name to delete')
            }
            res.json(chore)
        }
        throw new Error("Chore not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

// // const findChoreByName = async (req, res) => {
// //     try {
// //         const chores = await Chores.find()
// //         res.json(chores) 
// //         console.log(chores)
// //     } catch (e) {
// //         return res.status(500).send(e.message)
// //     }
    
// }


// const deleteChoreByName = (req, res) => {
//     try {
//         const { name } = req.params.name
//         const chore = Chores.find({name: name})
//         if (chore) {
//             return res.json(chore)
//         }
//         return res.status(500).send(e.message)
//     } catch (e) {
//         return res.status(500).send(e.message)
//     }     
// }

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
    getAllChores,
    deleteChoreById,
    deleteChoreByName,
    findChoreByName,
}