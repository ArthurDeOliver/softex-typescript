const numero1: number = Number(prompt("Digite o primeiro número inteiro:") || "0");
const numero2: number = Number(prompt("Digite o segundo número inteiro:") || "0");

const operacao: number = Number(prompt("Escolha a operação desejada:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão") || "0");

let resultado: number;
let mensagem: string;

switch (operacao) {
    case 1:
        resultado = numero1 + numero2;
        mensagem = `O resultado da soma é: ${resultado}`;
        break;
    case 2:
        resultado = numero1 - numero2;
        mensagem = `O resultado da subtração é: ${resultado}`;
        break;
    case 3:
        resultado = numero1 * numero2;
        mensagem = `O resultado da multiplicação é: ${resultado}`;
        break;
    case 4:
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
            mensagem = `O resultado da divisão é: ${resultado}`;
        } else {
            mensagem = 'Erro: Divisão por zero não é permitida.';
        }
        break;
    default:
        mensagem = 'Operação inválida. Por favor, escolha um número de 1 a 4.';
}

alert(mensagem);