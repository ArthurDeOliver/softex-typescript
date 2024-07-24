var nota1 = Number(prompt("digite a nota 1"));
var nota2 = Number(prompt("digite a nota 2"));
var nota3 = Number(prompt("digite a nota 3"));

const media = (nota1 + nota2 + nota3) / 3;

if (media > 7) {
    alert(`Aluno APROVADO! sua média é ${media} parabéns!!!`);
} else alert("Aluno REPROVADO, estudo mais!");

