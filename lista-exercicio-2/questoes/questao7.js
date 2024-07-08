"use strict";
var numeroInt = parseInt(prompt("Digite um número inteiro que eu irei converter para um float"));
var numeroFloat = parseFloat(numeroInt);
var pElement = document.getElementById("questao7");
pElement.textContent = `o numero de entrada é do tipo ${typeof numeroInt} e foi convertido para um ${numeroFloat.toFixed(2)} do tipo: ${typeof numeroFloat}`;
