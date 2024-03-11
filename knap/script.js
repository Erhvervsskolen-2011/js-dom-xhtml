
function clickPaaKnap(event) {
    felt = document.getElementById('felt')
    felt.innerHTML = "Nu har du trykket på knappen"
}

window.onload = function(){
    knap = document.getElementById('knap')
    knap.onclick = clickPaaKnap
    console.log('siden loaded')
}