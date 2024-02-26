window.addEventListener('load', () => {
    setTimeout(showFamily, 500)

})


const showFamily = async () => {
    try {
        // Fetch chores data from the server
        const response = await fetch('http://localhost:3001/family-members')
        
        // Check if the fetch request was successful
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        
        // Parse the JSON response
        const people = await response.json()
        
        // Get the container element
        const container = document.getElementById('people-container')
        
        // Clear previous content in the container
        container.innerHTML = '';

        // Loop through the fetched chores and create HTML elements for each chore
        people.forEach(people => {
            const peopleDiv = document.createElement('div')
            peopleDiv.classList.add('w-fit', 'h-auto', 'bg-gray-600', 'z-10', 'rounded-md', 'shadow-lg', 'shadow-gray-700', 'p-3', 'mb-4')
            peopleDiv.innerHTML = `
                <h3 class="text-indian-red opacity-1">${people.name}</h3>
                <p class="text-superior-blue opacity-70">Age: ${people.age}</p>
                <p class="text-superior-blue opacity-70">${people.relationshipToParent}</p>`
            container.appendChild(peopleDiv)
            
        })
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('There was a problem with the fetch operation:', error)
    }
}