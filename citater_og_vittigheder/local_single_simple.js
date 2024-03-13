// parse preloaded json data

/*
const userInfo = JSON.parse(document.getElementById("data").text);
console.log("User information: %o", userInfo);
*/
window.onload = function() {
    
    const json_element = document.getElementById("dad_jokes")
    console.log(json_element)

    console.log("jokes: ", jokes)

    function randomInt(max = 1) {
        return Math.round(Math.random() * max)
    }
    // console.log(randomInt())
    // console.log(randomInt(5))
    

    function selectJoke(jokes) {
        let n = jokes.length
        let i = randomInt(n)
        let joke = jokes[i]
        return joke
    }
    // console.log("Joke: ", selectJoke(jokes))

    function showJoke(joke) {
        let setup_p = document.querySelector("div#dad_jokes p#setup")
        setup_p.innerText = joke.setup
        let punchline_p = document.querySelector("div#dad_jokes p#punchline")
        punchline_p.innerText = joke.punchline
    }

    function tellJoke() {
        console.log("About to tell a joke.")
        joke = selectJoke(jokes)
        showJoke(joke)
    }

    tell_button = document.getElementById("Tell")
    tell_button.addEventListener("click", tellJoke)
}