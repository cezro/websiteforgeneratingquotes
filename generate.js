const api_url = "https://api.quotable.io/quotes/random?tags=technology"
const quote = document.getElementById("quote")
const author = document.getElementById("author")

async function  generateQuote(url) {
    const response = await fetch(url)
    let data = await response.json()
    quote.innerHTML = data[0].content;
    author.innerText = data[0].author;
}
generateQuote(api_url)