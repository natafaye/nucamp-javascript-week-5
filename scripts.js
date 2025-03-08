const apiKey = "SUPERSECRET"

async function fetchNews() {
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
        const data = await response.json();
        console.log(data);
        displayNews(data.articles)
    } catch (error) {
        console.error('There was an error!', error);
    }
}

fetchNews();

async function showBusinessHeadlines() {
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`);
        const data = await response.json();
        console.log(data);
        displayNews(data.articles)
    } catch (error) {
        console.error('There was an error!', error);
    }
}

// You can't really have known that you had do this
document.getElementById("business-button").addEventListener("click", showBusinessHeadlines)

function displayNews(articles) {
    const newsDiv = document.querySelector('#news');
    newsDiv.innerHTML = ""
    for (const article of articles) {
        const articleDiv = document.createElement('div');

        //create and append a headline to the articleDiv
        const title = document.createElement('h4');
        title.textContent = article.title;
        articleDiv.appendChild(title);

        // TODO: Use document.createElement and appendChild to create and append more elements

        newsDiv.appendChild(articleDiv);
    }
}