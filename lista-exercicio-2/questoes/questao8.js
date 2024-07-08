"use strict";
var numero1 = parseInt(prompt("digite um número para uma soma"));
var numero2 = parseInt(prompt("digite outro numero"));
var soma = numero1 + numero2;
var pElement = document.getElementById("questao8");
pElement.textContent = `O resultado da sua soma é: ${soma}`;
