// parse preloaded json data

/*
const userInfo = JSON.parse(document.getElementById("data").text);
console.log("User information: %o", userInfo);
*/
window.onload = function() {
    
    const json_element = document.getElementById("dad_jokes")
    console.log(json_element)

    console.log("jokes: ", jokes)

    //json_element.onload = function() {
        // const json_text = document.getElementById("dad_jokes").text
        // console.log("Element <>: ", document.getElementById("dad_jokes"))
        //console.log("json_text:", json_text)
        //const json = JSON.parse(document.getElementById("dad_jokes").text);
        
        //console.log("User information: %o", userInfo);
    //}
    //*/

    console.log("json embbeded i script-blok i slutninegen")
    const json_element_emb = document.getElementById("jokes")
    console.log(json_element_emb)

    //json_element.onload = function() {
        const json_text_emb = document.getElementById("jokes").text
        console.log("json_text_emb", json_text_emb)
        const json_emb = JSON.parse(document.getElementById("jokes").text);
        console.log("jokes: ", json_emb);
    //}
}