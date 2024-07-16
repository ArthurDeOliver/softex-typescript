var alturaTriangulo = parseInt(prompt("coloque uma medida de uma altura de um triângulo"));
var baseTriangulo = parseInt(prompt("coloque uma medida de uma base de um triângulo"));

var areaTriangulo = (baseTriangulo*alturaTriangulo)/2;

var pElement = document.getElementById("questao22");

pElement.textContent = `a área do triangulo é: ${areaTriangulo}m²`;