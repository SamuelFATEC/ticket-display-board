let button = document.querySelector('#button');

button.addEventListener('click', () => {
var password = document.getElementById('password').innerText;
var numberpassword = document.getElementById('numberpassword').innerText;
var guiche = document.getElementById('guiche').innerText;
var numberguiche = document.getElementById('numberguiche').innerText;

var ticket = password + ' ' + numberpassword + ' ' + guiche + ' ' + numberguiche + ' ';

var synthesis = window.speechSynthesis;

var ut = new SpeechSynthesisUtterance(ticket);

synthesis.speak(ut);
});

function disablebutton(){
    document.getElementById("button").disabled = true
}