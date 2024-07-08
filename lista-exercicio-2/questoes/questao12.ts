var numeros = prompt("digite numeros separados por espaços");
var quantidadeNumeros = 0;

for (let i = 0; i <= numeros.length; i++) {
  if (numeros[i] == " ") {
    quantidadeNumeros += 1;
  }
}

pElement = document.getElementById("questao12");
pElement.textContent = `quantidade de números digitados foi igual há: ${
  quantidadeNumeros + 1
}`;
