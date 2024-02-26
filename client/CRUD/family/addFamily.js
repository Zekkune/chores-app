

document.getElementById('peopleForm').addEventListener('submit', async (event) => {
    event.preventDefault()
    
    const famName = document.getElementById('famName').value
    const famAge = document.getElementById('famAge').value
    const famRelation = document.getElementById('famRelation').value

    const famAgeNumber = parseInt(famAge)

    try {
        const response = await axios.post('http://localhost:3001/api/family', {
            name: famName,
            age: famAgeNumber,
            relationshipToParent: famRelation
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        if (response.status < 200 || response.status > 299) {
            throw new Error(`Failed to add person. Server responded with status ${response.status}`)
        }

        alert('Person added successfully!')
        console.log(famName)
        window.location.href = '../../index.html'
    } catch (error) {
        console.error(`Error adding person: ${error.message}.`)
        alert('Failed to add person. Please try again later.')
    }
})

