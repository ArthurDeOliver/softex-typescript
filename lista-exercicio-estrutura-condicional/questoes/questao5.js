var nota1 = Number(prompt("digite a nota 1"));
var nota2 = Number(prompt("digite a nota 2"));
var nota3 = Number(prompt("digite a nota 3"));
var media = (nota1 + nota2 + nota3) / 3;
if (media > 7) {
    alert("Aluno APROVADO! sua m\u00E9dia \u00E9 ".concat(media, " parab\u00E9ns!!!"));
}
else
    alert("Aluno REPROVADO, estudo mais!");
