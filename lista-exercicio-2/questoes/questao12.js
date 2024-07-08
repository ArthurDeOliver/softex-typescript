var numeros = prompt("digite numeros separados por espaços");
var quantidadeNumeros = 0;
for (var i = 0; i <= numeros.length; i++) {
    if (numeros[i] == " ") {
        quantidadeNumeros += 1;
    }
}
pElement = document.getElementById("questao12");
pElement.textContent = "quantidade de n\u00FAmeros digitados foi igual h\u00E1: ".concat(quantidadeNumeros + 1);
