"use strict";
var idade = prompt("Qual a sua idade?");
var idadeConvertida = parseInt(idade);
var pElement = document.getElementById("idade");
pElement.textContent = `Sua idade: ${idade} entrou como ${typeof idade} e saiu como ${typeof idadeConvertida}`;
