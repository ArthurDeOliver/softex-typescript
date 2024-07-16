var numeroDecimal = parseFloat(prompt("digite um número decimal"));

var numeroInteiro = parseInt(numeroDecimal);

var pElement = document.getElementById("questao25");

pElement.textContent = `tipo do numero que você digitou: ${numeroDecimal} agora ele é do tipo: ${numeroInteiro}`;
