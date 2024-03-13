// parse preloaded json data

/*
const userInfo = JSON.parse(document.getElementById("data").text);
console.log("User information: %o", userInfo);
*/
window.onload = function() {
    
    const json_element = document.getElementById("dad_jokes")
    // console.log(json_element)

    // console.log("jokes: ", jokes)

    function getJokeTypes(jokes) {
        let types = {} 
        let l = jokes.length
        for (let i = 0; i < l; i++) {
            if (jokes[i].type && !(jokes[i].type in types) ) {
                // console.log("type: ", jokes[i].type)
                type = jokes[i].type
                types[type] = type[0].toUpperCase() + type.slice(1)
            }
        }
        return types
    }
    // console.log("types; ", getJokeTypes(jokes))
    jokeTypes = getJokeTypes(jokes)

    function getJokesByType(type, jokes) {
        let sublist = []
        let l = jokes.length
        for (let i = 0; i < l; i++) {
            if (jokes[i].type == type) {
                sublist.push(jokes[i])
            }
        }
        return sublist
    }
    // console.log("Programming jokes: ", getJokesByType("programming", jokes))

    let type_selector = document.getElementById("joke_type")
    for (var key in jokeTypes) {
        // console.log("key: ", key)
        // console.log("val: ", jokeTypes[key])
        // console.log(jokeTypes[key], "-jokes: ", getJokesByType(key, jokes))
        option = document.createElement('option')
        option.value = key
        option.innerText = jokeTypes[key]
        type_selector.appendChild(option)
    }



    function randomInt(max = 1) {
        return Math.floor(Math.random() * max)
    }
    // console.log(randomInt())
    // console.log(randomInt(5))

    function selectJoke(jokes) {
        _jokes = getJokesByType(document.getElementById('joke_type').value, jokes)
        let n = _jokes.length
        let i = randomInt(n)
        let joke = _jokes[i]
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
        // console.log("About to tell a joke.")
        joke = selectJoke(jokes)
        // console.log(joke)
        showJoke(joke)
    }

    tell_button = document.getElementById("Tell")
    tell_button.addEventListener("click", tellJoke)
}