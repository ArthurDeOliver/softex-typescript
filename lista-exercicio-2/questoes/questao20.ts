var nome = prompt("digite seu nome");

var pElement = document.getElementById("questao20");

if (nome.length > 5) {
    pElement.textContent = `nome MAIOR que 5 caracteres`;
} else pElement.textContent = `nome MENOR que 5 caracteres`;