# Brug data fra json objekter

Her i en simpel klient-side. Dvs, en html fil, hvor noget javascript linkes ind på siden. Der er altså _ingen_ server involveret.

Jeg forsøger nu at linke datafilerne som javascript kode :-)

Det kunne være sp enkelt som at lave et `<script>`-tag i `<head>`, som man kan forvente af Mozillas eksempel [MDN <script> element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#embedding_data_in_html)

Når man gerne vil indlæse data i eksterne filer, løber man ind i begrænsninger der lavet på breowseren, så en side ikke giver adgang til at læse og skrive direkte på filsystemet.
Der er betydelige sikkerhedsmessige problemer hvis det er muligt, og man kan sikkert finde mange eksempler på at tidligere _har_ kunnet lade sig gøre. I dag falder dette ind under CORS _(Cross-origin Resource Sharing)_. Lidt misvisende, fordi det hele jo er på den samme maskine; det lokale filsystem. Men det anses altså som lige så usikert som at hente scripts fra andre servere. Nok med rette. Se 
* [Wikipedia](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing), 
* [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS), 
* [Exploiting CORS misconfigurations](https://infosecwriteups.com/exploiting-cors-misconfigurations-ffb538698600), 
* [Exploiting CORS – How to Pentest Cross-Origin Resource Sharing Vulnerabilities](https://www.freecodecamp.org/news/exploiting-cors-guide-to-pentesting/).