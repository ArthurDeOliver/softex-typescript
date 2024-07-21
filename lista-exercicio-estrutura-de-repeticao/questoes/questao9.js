var peso = Number(prompt("Digite seu peso em kg:") || "0");
var altura = Number(prompt("Digite sua altura em metros:") || "0");
var imc = peso / (altura * altura);
var classificacao;
if (imc < 18.5) {
    classificacao = 'Abaixo do peso';
}
else if (imc >= 18.5 && imc < 24.9) {
    classificacao = 'Peso normal';
}
else if (imc >= 25 && imc < 29.9) {
    classificacao = 'Sobrepeso';
}
else if (imc >= 30 && imc < 34.9) {
    classificacao = 'Obesidade';
}
else {
    classificacao = 'Obesidade grave';
}
alert("IMC: ".concat(imc.toFixed(2), "\nClassifica\u00E7\u00E3o: ").concat(classificacao));
