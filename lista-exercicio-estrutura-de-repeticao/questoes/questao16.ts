var media;
var notas = [1,2,3,4,5];

for(let i = 0; i < notas.length; i++){
    notas[i] = Number(prompt("Digite a nota do aluno"));
}

var soma = 0;

for(let n = 0; n <= notas.length; n++){
    soma += notas[n];
}

media = soma/notas.length;

console.log(media)