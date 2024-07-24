var mes = Number(prompt("Digite um número de mês (1 a 12):"));
var nomesDosMeses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];
if (mes >= 1 && mes <= 12) {
    var nomeDoMes = nomesDosMeses[mes - 1];
    alert("O m\u00EAs correspondente \u00E9: ".concat(nomeDoMes));
}
else {
    alert("Número do mês inválido. Por favor, insira um número de 1 a 12.");
}
