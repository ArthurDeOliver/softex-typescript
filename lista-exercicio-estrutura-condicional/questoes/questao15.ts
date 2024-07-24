var diaDaSemana: String[] = ["segunda", "terça", "quarta", "quinta", "sexta", "sábado", "domingo"];

type Dia = 1 | 2 | 3 | 4 | 5 | 6 | 7;

var dia: Dia = Number(prompt("digite um dia (números de 1 a 7)"));

alert(`${dia} - ${diaDaSemana[dia - 1]}`);

