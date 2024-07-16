var numero1 = parseFloat(prompt("digite um número:"));
var numero2 = parseFloat(prompt("digite outro número:"));

var resultado = numero1%numero2;

var pElement = document.getElementById("questao24");

pElement.textContent = `o seu resultado é: ${resultado.toFixed(2)}`;