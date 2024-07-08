var anoNascimento = parseInt(prompt("Qual o ano que você nasceu?"));
const anoAtual = 2024;
var idade = anoAtual - anoNascimento;

pElement = document.getElementById("questao10");
pElement.textContent = `Sua idade é ${idade} anos`;
