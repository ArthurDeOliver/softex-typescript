var estadoCivil = prompt("qual o seu estado civil?");
var pElement = document.getElementById("questao21");
if (estadoCivil == "casado") {
    pElement.textContent = "voc\u00EA \u00E9 casado!";
}
else
    pElement.textContent = "voc\u00EA \u00E9 solteiro!";
