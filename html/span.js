var span = document.getElementById("txt");
var element = document.createElement("p");
element.textContent = "meu texto";
document.body.appendChild(element);
var textoPost = prompt("Escreva o texto do seu post aqui");
span.textContent = textoPost;
console.log(typeof (span));
