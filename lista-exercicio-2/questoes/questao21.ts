var estadoCivil = prompt("qual o seu estado civil?");

var pElement = document.getElementById("questao21");


if(estadoCivil == "casado"){
    
    pElement.textContent = `você é casado!`;

}else pElement.textContent = `você é solteiro!`;
