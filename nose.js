//imagenes
let imagenPensando = document.getElementById('imagenPensando');
let imagenIdea = document.getElementById('imagenIdea');

//audios
let audioCorrecto = document.getElementById('audioCorrect');
let audioFail = document.getElementById('audioFail');

//documentos html

let parrafoIncorrecto = document.getElementById('pIncorrecto');
let parrafoCorreto = document.getElementById('pCorrecto');
let spanCorrecto = document.getElementById('rtaC');
let spanIncorrecto = document.getElementById('rtaI');

let ultimoBoton = document.getElementById('ultimoBoton');

let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

//funciones
function adivinar(){
    let numeroIngresado = Number(document.getElementById('numeroIngresado').value);
    if(numeroIngresado == numeroAleatorio){
        imagenPensando.style.display = 'none';
        imagenIdea.style.display = 'block';
        parrafoCorreto.style.display = 'block';
        spanCorrecto.innerHTML = numeroAleatorio;
        ultimoBoton.style.display = 'block';
        audioCorrecto.play();
    }else if(numeroIngresado != numeroAleatorio){
        parrafoIncorrecto.style.display = 'block';
        spanIncorrecto.innerHTML = numeroAleatorio;
        ultimoBoton.style.display = 'block';
        audioFail.play();
    }
}

function recargar(){
    location.reload();
}