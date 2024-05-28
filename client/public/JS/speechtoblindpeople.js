let button = document.querySelector('#button');

button.addEventListener('click', () => {
var password = document.getElementById('password').innerText;
var numberpassword = document.getElementById('numberpassword').innerText;
var guiche = document.getElementById('guiche').innerText;
var numberguiche = document.getElementById('numberguiche').innerText;

var ticket = password + ' ' + numberpassword + ' ' + guiche + ' ' + numberguiche + ' ';

var synthesis = window.speechSynthesis;

var ut = new SpeechSynthesisUtterance(ticket);

var voices = synthesis.getVoices();

var selectedVoice = null;
for (var i = 0; i < voices.length; i++){
    if(voices[i].name === '')
        {
        selectedVoice = voices[i];
        break;
    }
}

if(!selectedVoice){
    console.log('Voz não encontrada, usando a voz padrão');
    selectedVoice = synthesis.getVoices()[0];
}
   
ut.voice = selectedVoice;
synthesis.speak(ut);
});

function disablebutton(){
    document.getElementById("button").disabled = true
}