

async function getLegoColors() {
    // Fetching
    const response = await fetch("https://rebrickable.com/api/v3/lego/colors?key=" + LEGO_API_KEY)
    const data = await response.json()

    // DOM Manipulation
    const div = document.getElementById("lego-colors-container")
    div.innerHTML = ""
    for (const color of data.results) {
        div.innerHTML += `<div style="background-color: #${color.rgb};">${color.name}</div>`
    }
}

// Slightly more complicated example that you don't have to fully understand
async function getNationalParks() {
    // This is an example of authenticating with a header instead of a query parameter
    try {
        const response = await fetch("https://developer.nps.gov/api/v1/parks", {
            headers: { "X-Api-Key": NATIONAL_PARKS_API_KEY }
        })
        // There's an ok property and a statusText property on the response that you can use for error handling
        if (!response.ok) {
            alert("Something went wrong with the response: " + response.statusText)
        }
        const data = await response.json()

        // DOM Manipulation
        const div = document.getElementById("national-parks-container")
        div.innerHTML = ""
        for (const park of data.data) {
            div.innerHTML += `<div>
            <h4>${park.fullName}</h4>
            <p>${park.description}</p>
        </div>`
        }
    } catch (error) {
        alert("Something went wrong with fetching the response: " + error.message)
    }
}


// No matter what, this will return a promise
async function mySpecialFunction() {
    return 5 // this will actually return a 5 wrapped in a promise
}

// fetch is an asynchronous function = it will always return a promise of a response

// If you need the results of an asynchronous function on the next line, you don't want a promise
// If you don't want a promise you have to tell it that you'll wait (await)

// async is contagious and if you wait for (breathe around) an asyc function then you catch it and you're async too