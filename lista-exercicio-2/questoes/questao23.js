var cidade = prompt("digite um nome de uma cidade");
var pElement = document.getElementById("questao23");
if (cidade[0] == 's') {
    pElement.textContent = "a cidade que voc\u00EA digitou come\u00E7a com a letra S";
}
else
    pElement.textContent = "a cidade que voc\u00EA digitou N\u00C3O come\u00E7a com a letra S";
