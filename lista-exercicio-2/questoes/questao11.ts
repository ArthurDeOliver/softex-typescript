var nome = prompt("digite seu nome");
var sobrenome = prompt("digite seu sobrenome");

var pElement = document.getElementById("questao11");

pElement.textContent = `seu nome completo é ${nome + sobrenome}`;
