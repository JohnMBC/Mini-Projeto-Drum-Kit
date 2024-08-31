'use strict';

const sons = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'
}

const criarDiv = (texto) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = texto;
    div.id = texto;
    document.getElementById('container').appendChild(div);
}

const criarDivTitle = (texto) => {
    const div = document.createElement('div');
    div.classList.add('title__main');
    div.textContent = texto;
    div.id = texto;
    document.getElementById('title').appendChild(div);
}
criarDivTitle('Louvai ao Senhor!')

const exibir = (sons) => {
    Object.keys(sons).forEach(criarDiv);
}

const tocarSom = (letra) => {
    const audio = new Audio(`./sounds/${sons[letra]}`);
    audio.play();
}

const ativarDiv = (evento) => {
    const letra = evento.srcElement.id;
    const letraPermitida = sons.hasOwnProperty(letra);
    if (letraPermitida) {
        tocarSom(letra);
    }
}
exibir(sons)

document.getElementById('container')
    .addEventListener('click', ativarDiv);
