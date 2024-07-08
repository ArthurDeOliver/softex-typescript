var nome = prompt("Qual o seu nome?");
//trazendo a tag do html para o código
var pElement = document.getElementById("boasVindas");
//método para sobrescrever o que está na tag
pElement.textContent = `Boas vindas ${nome}!!`;
