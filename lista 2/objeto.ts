//questao 1
const pessoa: { [key: string]: string | number } = {
    nome:"arthur",
    idade: 24,
    endereço: "recife"
};

//questao 2
console.log(pessoa.nome);

//questao 3
pessoa["profissao"] = "programador";

//questao 4
pessoa.idade = 32;

//questao 5
const animal = {
    nome: "marley",
    especie: "cachorro",
    cor: "branco"
}

//questao 6
interface Livro {
    titulo?: string;
    autor: string;
    ano: number;
}

const livro: Livro = {
    titulo : "divina comedia",
    autor: "Dante",
    ano: 1301

}
//questao 7
console.log(livro.autor);

//questao 8
livro.ano = 1301;

//questao 9
delete livro.titulo;

//questao 10
interface Carro {
    marca?: string;
    modelo: string;
    ano: number;
}

const carro: Carro = {
    marca: "chevrolet",
    modelo: "onix",
    ano: 2023
}

//questao 11
carro.modelo = "undefined";
console.log(carro)