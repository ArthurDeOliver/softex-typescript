const idade: number = Number(prompt("Digite a sua idade:"));

let classificacao: string;

if (idade >= 0 && idade <= 1) {
    classificacao = 'Bebê';
} else if (idade > 1 && idade <= 12) {
    classificacao = 'Criança';
} else if (idade >= 13 && idade <= 18) {
    classificacao = 'Adolescente';
} else if (idade > 18) {
    classificacao = 'Adulto';
} else {
    classificacao = 'Idade inválida';
}

alert(`Você é classificado como: ${classificacao}`);