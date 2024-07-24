var numero: Number = Number(prompt("digite um número para descobri se ele é divisível por 3 e por 5"));

if ((numero % 3 == 0) && (numero % 5 == 0)) {
    alert(`O número ${numero} é divisível por 3 e por 5 ao mesmo tempo`);
} else alert(`O número NÃO é divisível por 3 e por 5 ao mesmo tempo`);