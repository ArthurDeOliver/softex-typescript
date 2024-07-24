var primeiroNumero = Number(prompt("digite o primeiro número para fazer uma comparação"));
var segundoNumero = Number(prompt("digite o segundo número para fazer uma comparação"));

if(primeiroNumero > segundoNumero){
    alert("primeiro numero é maior que o segundo número");
}else if(primeiroNumero < segundoNumero){
    alert("segundo numero é maior que o primeiro número");
}else alert("ambos são o mesmo número");