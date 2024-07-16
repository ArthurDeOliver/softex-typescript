var stringUsuario = prompt("digite uma frase e darei o tamanho dela");

var pElement = document.getElementById("questao15");

pElement.textContent = `o tamanho da sua frase: ${stringUsuario.length}`;