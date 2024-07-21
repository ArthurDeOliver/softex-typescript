const mes: number = Number(prompt("Digite um número de mês (1 a 12):"));

const nomesDosMeses: string[] = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

if (mes >= 1 && mes <= 12) {
    const nomeDoMes: string = nomesDosMeses[mes - 1];
    alert(`O mês correspondente é: ${nomeDoMes}`);
} else {
    alert("Número do mês inválido. Por favor, insira um número de 1 a 12.");
}