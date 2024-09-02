const span = document.getElementById("txt");
// //criação de elemento html
// const element = document.createElement("p"); //elemento do tipo parágrafo
// element.textContent = "meu texto"; //adicionando texto a esse parágrafo

// document.body.appendChild(element); //adicionando no body o elemento criado

const textoPost = prompt("Escreva o texto do seu post aqui");

span.textContent = textoPost;

console.log(typeof span);
