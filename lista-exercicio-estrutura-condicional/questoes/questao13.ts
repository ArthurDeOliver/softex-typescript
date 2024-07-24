var diaDaSemana: string[] = ["segunda", "terça", "quarta", "quinta", "sexta", "sábado", "domingo"];

var dia = prompt("digite um dia da semana");

if (dia == diaDaSemana[5] || dia == diaDaSemana[6]) {
    alert("o dia que você digitou é um FIM DE SEMANA");
} else alert("o dia que você digitou é um DIA ÚTIL");