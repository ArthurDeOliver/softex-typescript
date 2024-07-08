var anoNascimento = parseInt(prompt("Qual o ano que você nasceu?"));
var anoAtual = 2024;
var idade = anoAtual - anoNascimento;
pElement = document.getElementById("questao10");
pElement.textContent = "Sua idade \u00E9 ".concat(idade, " anos");
