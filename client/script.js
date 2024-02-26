
const peopleButton = document.getElementById('peopleButton')
const choreButton = document.getElementById('choreButton')
const settingsButton = document.getElementById('settingsButton')
const allChores = document.querySelectorAll('#choreDiv')

document.addEventListener('DOMContentLoaded', () =>{
    
})
allChores.forEach((chore) => {
    chore.addEventListener('click', () => {
        console.log(`working`)
    })
})




const choreName = document.getElementById

const getChores = async () => {
    try {
        // Fetch chores data from the server
        const response = await axios.get('http://localhost:3001/chores')
        console.log(response.data)

        // Check if the fetch request was successful
        if (response.status < 200 || response.status > 299) {
            throw new Error('Network response was not ok')
        }

        // Parse the JSON response
        return response.data
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('There was a problem with the fetch operation:', error)
        throw error // Rethrow the error to propagate it further
    }
}

const getChore = async () => {
    getChores()
    const chore = await axios.get(`http://localhost:3001/chores/name?name=${chore.name}`)
}

// function updateChore () {
//     getChores()
//     const chore = await axios.get(`http://localhost:3001/chores/name?name=${chore.name}`)

// }

choreButton.addEventListener('click', () => {
    window.location.href = './addChores.html'
})

peopleButton.addEventListener('click', () => {
    window.location.href = './family.html'
})

settingsButton.addEventListener('click', () => {
    window.location.href = './settings.html'
})

    


// function getChores() {
//     fetch('http://localhost:3001/chores').then(response => {
// 	// Check if the request was successful
// 	if (!response.ok) {
// 	throw new Error('Network response was not ok');
// 	}
// 	// Parse the JSON response
// 	return response.json();
// }).then(data => {
// 	// Handle the data returned from the server
// 	console.log(data);
// }).catch(error => {
// 	// Handle any errors that occurred during the fetch
// 	console.error('There was a problem with the fetch operation:', error);
// })
// }



const showChores = async () => {
    
    try {
        
        const chores = await getChores()
        
        // Get the container element
        const container = document.getElementById('chores-container')
        
        // Clear previous content in the container
        container.innerHTML = ''

        // Loop through the fetched chores and create HTML elements for each chore
        chores.forEach(chore => {
            const choreDiv = document.createElement('div')
            choreDiv.classList.add('w-11/12', 'h-auto', 'bg-gray-600', 'z-10', 'mt-6', 'rounded-md', 'shadow-lg', 'shadow-gray-700', 'p-3')
            choreDiv.setAttribute('id', `choreDiv`)
            choreDiv.setAttribute('name', `${chore.name}`)
            choreDiv.innerHTML = `
                <h3 class="text-indian-red opacity-1">${chore.name}</h3>
                <p class="text-superior-blue opacity-70">${chore.task}</p>`
            container.appendChild(choreDiv)
            
        })
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('There was a problem with the fetch operation:', error)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(showChores, 500)

})





