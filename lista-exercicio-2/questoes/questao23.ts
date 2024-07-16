var cidade = prompt("digite um nome de uma cidade");
var pElement = document.getElementById("questao23");

if(cidade[0] == 's'){
    pElement.textContent = `a cidade que você digitou começa com a letra S`;
}else pElement.textContent = `a cidade que você digitou NÃO começa com a letra S`;

