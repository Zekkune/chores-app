// document.getElementById('choreForm').addEventListener('submit', async (event) => {
//     event.preventDefault()
    
//     const choreName = document.getElementById('choreName').value
//     const choreTask = document.getElementById('choreTask').value

//     try {
//         const response = await fetch('http://localhost:3001/api/chores', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ name: choreName, task: choreTask})
//         })
        
//         if (!response.ok) {
//             throw new Error('Failed to add chore')
//         }

//         alert('Chore added successfully!')
//         console.log(choreName)
//         window.location.href = 'index.html'
//     } catch (error) {
//         console.error('Error adding chore:', error.message)
//         alert('Failed to add chore. Please try again later.')
//     }
// })

document.getElementById('choreForm').addEventListener('submit', async (event) => {
    event.preventDefault()
    
    const choreName = document.getElementById('choreName').value
    const choreTask = document.getElementById('choreTask').value

    try {
        const response = await axios.post('http://localhost:3001/api/chores', {
            name: choreName,
            task: choreTask
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        if (response.status < 200 || response.status > 299) {
            throw new Error('Failed to add chore')
        }

        alert('Chore added successfully!')
        console.log(choreName)
        window.location.href = 'index.html'
    } catch (error) {
        console.error('Error adding chore:', error.message)
        alert('Failed to add chore. Please try again later.')
    }
})






