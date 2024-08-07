//pegar notas
var notaEntrada = parseInt(prompt("Digite suas notas"));
var notasArray = [0];
var notasPedida;

while(notaEntrada =! -1){

    notasArray[0] = notaEntrada;

    notasPedida = Number(prompt("Digite suas notas"));

    if(notasPedida == -1){
        break;
    }else {
        notasArray.push(notasPedida)
    }

}

console.log(notasArray);