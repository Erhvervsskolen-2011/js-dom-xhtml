// parse preloaded json data

const userInfo = JSON.parse(document.getElementById("data").text);
console.log("User information: %o", userInfo);

window.onload = function() {
    /*
    const json_element = document.getElementById("dad_jokes")
    console.log(json_element)

    json_element.onload = function() {
        const json_text = document.getElementById("dad_jokes").text
        console.log(json_text)
        const json = JSON.parse(document.getElementById("dad_jokes").text);
        console.log("User information: %o", userInfo);
    }
    */

    const json_element = document.getElementById("jokes")
    console.log(json_element)

    json_element.onload = function() {
        const json_text = document.getElementById("jokes").text
        console.log(json_text)
        const json = JSON.parse(document.getElementById("jokes").text);
        console.log("User information: %o", userInfo);
    }
}