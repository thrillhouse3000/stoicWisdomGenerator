
const button = document.querySelector(`#getQuote`);
const quoteContainer = document.querySelector(`#quoteContainer`)
const authorContainer = document.querySelector(`#authorContainer`)
let opacity = 0;


//fadeIn function
function fadeIn() {
    opacity = 0;
    let intervalId = setInterval(function () {
        if (opacity < 1) {
            opacity = opacity + 0.1
            quoteContainer.style.opacity = opacity;
            authorContainer.style.opacity = opacity;
        } else {
            clearInterval(intervalId);
        }
    }, 60);
}

button.addEventListener(`click`, async () => {
    try {

        const response = await fetch(`https://stoic-server.herokuapp.com/random`);
        const data = await response.json();
        let quote = data[0].body;
        let author = data[0].author;
        console.log(`OG CALL: ${quote.length}`);
        quoteContainer.style.opacity = 0;
        authorContainer.style.opacity = 0;

        while (quote.length > 190) {
            const response = await fetch(`https://stoic-server.herokuapp.com/random`);
            const data = await response.json();
            quote = data[0].body;
            author = data[0].author;
            console.log(`OTHER CALL: ${quote.length}`);
            quoteContainer.style.opacity = 0;
            authorContainer.style.opacity = 0;
        }

        quoteContainer.onload = fadeIn();
        authorContainer.onload = fadeIn();
        quoteContainer.style.color = "white";
        authorContainer.style.color = "white";
        quoteContainer.style.textShadow = "3px 3px 5px black";
        authorContainer.style.textShadow = "3px 3px 5px black";
        quoteContainer.textContent = quote;
        authorContainer.textContent = `- ${author}`;
    } catch (err) {
        console.log(`Error!`, err);
    }
})

    // button.addEventListener(`click`, async () => {
    //     try {
    //         quoteContainer.textContent = ``;
    //         authorContainer.textContent = ``;
    //         quoteContainer.onload = fadeIn();
    //         authorContainer.onload = fadeIn();
    //         const response = await fetch(`https://stoic-server.herokuapp.com/random`);
    //         const data = await response.json();
    //         const quote = data[0].body;
    //         const author = data[0].author;
    //         quoteContainer.textContent = quote;
    //         authorContainer.textContent = `- ${author}`;
    //         quoteContainer.style.color = "white";
    //         authorContainer.style.color = "white";
    //         quoteContainer.style.textShadow = "3px 3px 5px black";
    //         authorContainer.style.textShadow = "3px 3px 5px black";
    //         if (quoteContainer.textContent.length > 200) {
    //             quoteContainer.textContent = ``;
    //             authorContainer.textContent = ``;
    //             const response = await fetch(`https://stoic-server.herokuapp.com/random`);
    //             const data = await response.json();
    //             const quote = data[0].body;
    //             const author = data[0].author
    //             quoteContainer.textContent = ``;
    //             authorContainer.textContent = ``;
    //             quoteContainer.onload = fadeIn();
    //             authorContainer.onload = fadeIn();
    //             quoteContainer.textContent = quote;
    //             authorContainer.textContent = `- ${author}`;
    //             quoteContainer.style.color = "white";
    //             authorContainer.style.color = "white";
    //             quoteContainer.style.textShadow = "3px 3px 5px black";
    //             authorContainer.style.textShadow = "3px 3px 5px black";
    //         }
    //     } catch (err) {
    //         console.log(`Error!`, err);
    //     }
    // })



    //API fetch with .then
    // fetch(`https://swapi.dev/api/`)
    //     .then(response => {
    //         console.log(`Response...`, response)
    //         return response.json()
    //     })
    //     .then(data => {
    //         console.log(`DATA...`, data)
    //     })
    //     .catch(err => {
    //         console.log(`ERROR!`, err)
    //     })

    //API Fetch with async function and await
    // const fetchData = async () => {
    //     try {
    //         const response = await fetch(`https://swapi.dev/api/people/?search=${userInput}`);
    //         const data = await response.json();
    //         console.log(`DATA...`, data);
    //     } catch (err) {
    //         console.log(`Error!`, err);
    //     }
    // 