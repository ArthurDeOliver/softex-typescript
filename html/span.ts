const span = document.getElementById("txt");
const element = document.createElement("p");
element.textContent = "meu texto";

document.body.appendChild(element);

const textoPost = prompt("Escreva o texto do seu post aqui");

span.textContent = textoPost;

console.log(typeof(span));