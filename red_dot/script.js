window.onload = function(event) {
    dotElement = document.getElementById('dot');
    dotElement.onmouseover = dotMouseOver;
    dotElement.onclick = dotClick;
}

function dotMouseOver(event) {
    console.log('mus over prik')
    console.log(event);

    if (!event.ctrlKey) {
        x = Math.floor(Math.random() * (800-50));
        y = Math.floor(Math.random() * (600-50));
        event.target.style.top = String(y) + "px"
        event.target.style.left = String(x) + "px"
        responseBox = document.getElementById('respons')
        responseBox.innerHTML = "<p>Tips: Hold CTRL nede</p>"
    }
}

function dotClick(event) {
    responseBox = document.getElementById('respons')
    responseBox.innerHTML = "<p>Du klikkede på den røde prik</p>"
    document.getElementById('dot').style.backgroundColor = 'yellow'
}