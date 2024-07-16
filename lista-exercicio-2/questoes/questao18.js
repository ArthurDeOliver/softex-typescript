var numero1 = parseInt(prompt("digite um número"));
var numero2 = parseInt(prompt("digite outro número"));
var pElement = document.getElementById("questao18");
if (numero1 > numero2) {
    pElement.textContent = "o primeiro n\u00FAmero \u00E9 maior";
}
else
    pElement.textContent = "o segundo n\u00FAmero \u00E9 maior";
