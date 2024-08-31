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
const adicionarEfeito = (letra) => {
    const div = document.getElementById(letra);
        div.classList.add('active');

    const removerEfeito = (letra) => {
        const div = document.getElementById(letra);
        const removeActive = () => div.classList.remove('active');
        div.addEventListener('transitionend', removeActive);
    };
    removerEfeito(letra);

}
const ativarDiv = (evento) => {
    let letra = "";
    if (evento.type === 'click') {
        letra = evento.srcElement.id;
    } else if (evento.type === 'keydown') {
        letra = evento.key.toUpperCase();
    }

    if (sons.hasOwnProperty(letra)) {
        adicionarEfeito(letra);
        tocarSom(letra);
    }
}

exibir(sons)

document.getElementById('container')
    .addEventListener('click', ativarDiv);

window.addEventListener('keydown', ativarDiv);
