var diaDaSemana = ["segunda", "terça", "quarta", "quinta", "sexta", "sábado", "domingo"];
var dia = Number(prompt("digite um dia (números de 1 a 7)"));
alert("".concat(dia, " - ").concat(diaDaSemana[dia - 1]));
