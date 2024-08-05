//pegar notas
var notaEntrada;
var notasArray = [];
var notasPedida;

while(true){

    notaEntrada = parseInt(prompt("Digite suas notas"));

    if(notaEntrada == -1){
        break;
    }

    notasArray.push(notaEntrada);
}

var notaMaior = 0;
var notaMenor = 0;

//maior número
for(let i = 0; i <= notasArray.length; i++){

    var contadorMaior = notasArray.length - 1;

    for (let j = 0; j <= notasArray.length; j++) {
        
        if(notasArray[i] > notasArray[j]){
            contadorMaior -= 1;
        }

        if(contadorMaior == 0){
            notaMaior = notasArray[i];
        }
        
    }

}

//menor nota
for(let i = 0; i <= notasArray.length; i++){

    var contadorMenor = notasArray.length - 1;

    for (let j = 0; j <= notasArray.length; j++) {
        
        if(notasArray[i] > notasArray[j]){
            contadorMaior -= 1;
        }

        if(contadorMaior == 0){
            notaMaior = notasArray[i];
        }
        
    }

}

console.log(notaMaior);
