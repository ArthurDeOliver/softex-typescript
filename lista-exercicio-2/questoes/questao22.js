var alturaTriangulo = parseInt(prompt("coloque uma medida de uma altura de um triângulo"));
var baseTriangulo = parseInt(prompt("coloque uma medida de uma base de um triângulo"));
var areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
var pElement = document.getElementById("questao22");
pElement.textContent = "a \u00E1rea do triangulo \u00E9: ".concat(areaTriangulo, "m\u00B2");
