
async function getMoves() {
    try {
        // Make a request to the API and wait for the response
        const response = await fetch("https://pokeapi.co/api/v2/move/3")
        // parse the data in the body of the response from JSON into javascript objects/arrays
        const data = await response.json()
        console.log(data)
    } catch (error) {
        alert("There was an error!")
    }
}

async function getLego() {
    try {
        const response = await fetch("https://rebrickable.com/api/v3/lego/sets?key=" + LEGO_KEY)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        alert("There was an error!")
    }
}


// What are .env files?
// They allow you to have different values for variables in the dev version of the app vs the actual app
// For example, make requests to a test database during development and the actual database in the real app