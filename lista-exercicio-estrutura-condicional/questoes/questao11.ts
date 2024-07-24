var salario = Number(prompt("digite seu salário"));
var resultado: string;

if (salario >= 1500) {
    salario = salario * 1.10;
    resultado = "resultado da promoção: " + salario.toFixed(2);

} else if (salario < 1500) {
    salario = salario * 1.15;
    resultado = "resultado da promoção: " + salario.toFixed(2);
}

alert(`o seu aumento foi calculado ${resultado}`);