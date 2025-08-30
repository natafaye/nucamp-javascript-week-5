// REST API - the standard (this is what we're teaching)
// SOAP API - this is really old
// GraphQL API - this is really new and more niche


async function fetchData() {
    // fetch("https://developer.nps.gov/api/v1/events?stateCode=NV&api_key=" + NPS_KEY)
    // console.log("This logs before we get the response from nps.gov")

    const promiseOfResponse = fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=" + NASA_API_KEY)
    console.log("This logs BEFORE we get the response from nasa.gov Promise of Response:", promiseOfResponse)
}

async function fetchDataWait() {
    const response = await fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1500&api_key=" + NASA_API_KEY)
    // If you call an async function and don't wait, you get a promise (little buzzer)
    console.log("This logs AFTER we get the response from nasa.gov Response:", response)
    const data = await response.json(); // parses it from a string of JSON to actual Javascript objects and arrays
    renderFirstPhoto(data)
}

// async function fetchSomething() {
//     try {
//         const response = await fetch("fdsfdsf") // PUT YOUR URL HERE
//         if(!response.ok) {
//             alert("Uh oh! Is the server down?")
//         }
//         const data = await response.json()
//         // Do something with the data
//         renderFirstPhoto(data)
//     } catch (error) {
//         alert("Oh no! Is your internet out?")
//     }
// }

const resultsDiv = document.getElementById("results")

function renderFirstPhoto(data) {
    const newImage = document.createElement("img")
    newImage.src = data.photos[0].img_src

    resultsDiv.appendChild(newImage)
}