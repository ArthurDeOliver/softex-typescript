var numero = Number(prompt("digite um número para descobri se ele é divisível por 3 e por 5"));
if ((numero % 3 == 0) && (numero % 5 == 0)) {
    alert("O n\u00FAmero ".concat(numero, " \u00E9 divis\u00EDvel por 3 e por 5 ao mesmo tempo"));
}
else
    alert("O n\u00FAmero N\u00C3O \u00E9 divis\u00EDvel por 3 e por 5 ao mesmo tempo");
