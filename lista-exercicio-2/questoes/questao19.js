var peso = parseFloat(prompt("digite seu peso"));
var altura = parseFloat(prompt("digite seu altura"));
var imc = peso / (altura * altura);
var pElement = document.getElementById("questao19");
pElement.textContent = "seu imc \u00E9 ".concat(imc.toFixed(2));
