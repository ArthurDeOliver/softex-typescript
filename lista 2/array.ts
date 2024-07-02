//questao 1
var numeros = [1];

//questao 2
numeros.splice(0,0,1,2,3,4);

//questao 3
console.log(numeros[3]);

//questao 4
numeros[4] = 10;

//questao 5
numeros.pop();

//questao 6
console.log(numeros.length);

//questao 7
var frutas = ['maça', 'banana','laranja'];

//questao 8
console.log(frutas[0]);

//questao 9
frutas.push('uva');

//questao 10
class aluno {
    nome: string;
    idade: number

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }
}

const aluno1 = new aluno("arthur",24);

var alunos = [aluno1];

//questao 11
console.log(alunos[0].nome);

//questao 12
const aluno2 = new aluno("angelo",23);
const aluno3 = new aluno("gomes",25);

alunos.push(aluno2,aluno3);
console.log(alunos);

//questao 13
const produtos = ['chocolate','refri','suco','queijo','presunto','tomate','alface','pao','geleia','agua'];

for(let n = 0; n < produtos.length; n++){
    if(n%2 == 0){
        console.log(produtos[n]);
    }
}