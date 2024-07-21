const peso: number = Number(prompt("Digite seu peso em kg:") || "0");
const altura: number = Number(prompt("Digite sua altura em metros:") || "0");

const imc: number = peso / (altura * altura);

let classificacao: string;

if (imc < 18.5) {
    classificacao = 'Abaixo do peso';
} else if (imc >= 18.5 && imc < 24.9) {
    classificacao = 'Peso normal';
} else if (imc >= 25 && imc < 29.9) {
    classificacao = 'Sobrepeso';
} else if (imc >= 30 && imc < 34.9) {
    classificacao = 'Obesidade';
} else {
    classificacao = 'Obesidade grave';
}

alert(`IMC: ${imc.toFixed(2)}\nClassificação: ${classificacao}`);