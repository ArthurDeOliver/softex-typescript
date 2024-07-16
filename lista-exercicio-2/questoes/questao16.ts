var numero = parseInt(prompt("digite um numero"));

var pElement = document.getElementById("questao16");

if(numero%2 == 0){

    pElement.textContent = `o numero que você digitou é PAR`;

}else pElement.textContent = `o numero que você digitou é IMPAR`;

