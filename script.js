'use strict';

const criarDiv = (texto) => {  //função que recebe texto como parametro  
    const div = document.createElement('div');//cria um novo elemento <div> e armazena na 'const' div
    div.classList.add('key');//Adiciona a classe 'key' ao elemento <div>
    div.textContent = texto;//define  o conteudo do texto da <div>como valor de parametro 'texto'
    div.id = texto;//atributo da div como o valor de parametro texto
    document.getElementById('container').appendChild(div)//Adiciona o <div> criado como um filho do elemento com o id container no documento HTML.
}
criarDiv('A');
