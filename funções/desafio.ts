var entrada :number;
var notas:number[] = [];

while(true){

    entrada = Number(prompt("digite as notas"));

    if(entrada == -1){
        break;
    }

    notas.push(entrada);
}


function definirMaiorNota(arrayNotas: number[]){

    var maiorNota = 0;
    var verificaçãoMaior = 0;

    for(let i = 0; i <= arrayNotas.length; i++){

        for(let j = 0; j<= arrayNotas.length -1; j++){

            if(arrayNotas[i] > arrayNotas[j]){

                verificaçãoMaior += 1;

                if(verificaçãoMaior == arrayNotas.length-1){
                    maiorNota = arrayNotas[i];
                }

            }

        }
    }

    return maiorNota;

}

function definirMenorNota(arrayNotas: number[]){

    var menorNota = 0;
    var verificaçãoMenor = 0;

    for(let i = 0; i <= arrayNotas.length; i++){

        for(let j = 0; j <= arrayNotas.length -1; j++){

            if(arrayNotas[i] < arrayNotas[j]){

                verificaçãoMenor += 1;

                if(verificaçãoMenor == arrayNotas.length-1){
                    menorNota = arrayNotas[i];
                }

            }

        }
    }

    return menorNota;

}
    
function calcularMédia(arrayNotas: number[]){

    var media;
    var soma = 0;
    const total = arrayNotas.length;

    for(let n = 0; n <= arrayNotas.length; n++){
        soma += arrayNotas[n];
    }

    media = soma/total;

    return soma;
}

