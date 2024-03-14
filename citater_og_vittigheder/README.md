# Brug data fra json objekter

Her i en simpel klient-side. Dvs, en html fil, hvor noget javascript linkes ind på siden. Der er altså _ingen_ server involveret.

Jeg forsøger nu at linke datafilerne som javascript kode :-)

Det kunne være sp enkelt som at lave et `<script>`-tag i `<head>`, som man kan forvente af Mozillas eksempel [MDN \<script\> element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#embedding_data_in_html)

Når man gerne vil indlæse data i eksterne filer, løber man ind i begrænsninger der lavet på breowseren, så en side ikke giver adgang til at læse og skrive direkte på filsystemet.
Der er betydelige sikkerhedsmessige problemer hvis det er muligt, og man kan sikkert finde mange eksempler på at tidligere _har_ kunnet lade sig gøre. I dag falder dette ind under CORS _(Cross-origin Resource Sharing)_. Lidt misvisende, fordi det hele jo er på den samme maskine; det lokale filsystem. Men det anses altså som lige så usikert som at hente scripts fra andre servere. Nok med rette. Se 
* [Wikipedia](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing), 
* [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS), 
* [Exploiting CORS misconfigurations](https://infosecwriteups.com/exploiting-cors-misconfigurations-ffb538698600), 
* [Exploiting CORS – How to Pentest Cross-Origin Resource Sharing Vulnerabilities](https://www.freecodecamp.org/news/exploiting-cors-guide-to-pentesting/).

## Udvælgelse af jokes med type

Når der skal vises en vits, femstiller jeg først en ny liste med kun den valgte type. 

```javascript
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
```

Den type joke der skal vises, vælger brugeren i en dropdown-liste, i browseren. Nøglen til typen hentes fra `<select id="joke_type">`-elementet, med id'et `joke_type`. Den valgte type aflæses fra elementets `value`-attribut.
Dernest vælges en tilfældig fra dellisten, som før.

```javascript
function selectJoke(jokes) {
    _jokes = getJokesByType(document.getElementById('joke_type').value, jokes)
    let n = _jokes.length
    let i = randomInt(n)
    let joke = _jokes[i]
    return joke
}
// console.log("Joke: ", selectJoke(jokes))
```
