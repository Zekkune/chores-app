fetch('http://localhost:3001/chores')
  .then(response => response.json()) // Parse the JSON response
  .then(data => {
    // Handle the retrieved data
    showChores(data)
  }).catch(error => console.error('Error fetching chores:', error))

function showChores(chores) {


    const choresList = document.getElementById('chores-container') 

    chores.forEach(chore => {
        const listItem = document.createElement('div')
        listItem.innerHTML = `
        <h3>${chore.name}</h3>
        <p>${chore.task}</p>
      `
        choresList.appendChild(choresList)
      })
}

showChores()