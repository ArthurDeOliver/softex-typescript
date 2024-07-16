var numero1 = parseInt(prompt("digite um número"));
var numero2 = parseInt(prompt("digite outro número"));

var pElement = document.getElementById("questao18");

if(numero1 > numero2){

    pElement.textContent = `o primeiro número é maior`;

}else pElement.textContent = `o segundo número é maior`;
    
