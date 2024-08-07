interface somaParams {
    valor1: number,
    valor2: number
}

function soma({valor1, valor2}:somaParams) {
    const resultado = valor1 + valor2;
    return resultado;

}

soma({
    valor1:10, 
    valor2:15
});

// console.log(typeof(gerarFrase)); retorno -> function

// function mostrarTextoNoConsole(texto: string){
//     console.log(texto.toUpperCase);
// }

// mostrarTextoNoConsole("43");

// prompt();