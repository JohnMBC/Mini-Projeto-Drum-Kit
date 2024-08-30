'use strict';

const sons = {
    'A': 'bom.wav',
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

const letras = (sons) => {
    Object.keys(sons).forEach(criarDiv);

}
letras(sons)

