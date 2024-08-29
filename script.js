'use strict';

const criarDiv = (texto) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = texto;
    div.id = texto;
    document.getElementById('container').appendChild(div);

}
criarDiv('A')

const criarDivTitle = (texto) => {
const div = document.createElement('div');
div.classList.add('title__main');
div.textContent = texto;
div.id = texto;
document.getElementById('title').appendChild(div);

}
criarDivTitle('Louvai ao Senhor!')


 