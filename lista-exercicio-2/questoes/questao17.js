var numero = prompt("digite um número");
var pElement = document.getElementById("questao17");
if (parseInt(numero) > 0 || parseFloat(numero) > 0) {
    pElement.textContent = "o n\u00FAmero \u00E9 POSITIVO";
}
else
    pElement.textContent = "o n\u00FAmero \u00E9 NEGATIVO";
