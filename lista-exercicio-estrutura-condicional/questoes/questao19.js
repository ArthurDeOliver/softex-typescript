var numero1 = Number(prompt("Digite o primeiro número inteiro:") || "0");
var numero2 = Number(prompt("Digite o segundo número inteiro:") || "0");
var operacao = Number(prompt("Escolha a operação desejada:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão") || "0");
var resultado;
var mensagem;
switch (operacao) {
    case 1:
        resultado = numero1 + numero2;
        mensagem = "O resultado da soma \u00E9: ".concat(resultado);
        break;
    case 2:
        resultado = numero1 - numero2;
        mensagem = "O resultado da subtra\u00E7\u00E3o \u00E9: ".concat(resultado);
        break;
    case 3:
        resultado = numero1 * numero2;
        mensagem = "O resultado da multiplica\u00E7\u00E3o \u00E9: ".concat(resultado);
        break;
    case 4:
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
            mensagem = "O resultado da divis\u00E3o \u00E9: ".concat(resultado);
        }
        else {
            mensagem = 'Erro: Divisão por zero não é permitida.';
        }
        break;
    default:
        mensagem = 'Operação inválida. Por favor, escolha um número de 1 a 4.';
}
alert(mensagem);
