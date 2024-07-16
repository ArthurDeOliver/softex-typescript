var numeroDecimal = parseFloat(prompt("digite um número decimal"));
var numeroInteiro = parseInt(numeroDecimal);
var pElement = document.getElementById("questao25");
pElement.textContent = "tipo do numero que voc\u00EA digitou: ".concat(numeroDecimal, " agora ele \u00E9 do tipo: ").concat(numeroInteiro);
