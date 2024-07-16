var peso = parseFloat(prompt("digite seu peso"));
var altura = parseFloat(prompt("digite seu altura"));

var imc = peso / (altura * altura);

var pElement = document.getElementById("questao19");

pElement.textContent = `seu imc é ${imc.toFixed(2)}`;