var numero = parseFloat(
  prompt("digite um numero que eu irei calcular o seu quadrado")
);

var resultado: number = numero * numero;

var pElement = document.getElementById("questao9");

pElement.textContent = `o resultado do quadrado do número ${numero} é: ${resultado.toFixed(
  2
)}`;
