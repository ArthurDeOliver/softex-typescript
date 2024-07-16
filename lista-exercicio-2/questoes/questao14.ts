var nomeCompleto = prompt("digite teu nome");

var nomeSeparado = nomeCompleto.split(" ");

var pElement = document.getElementById("questao14");

pElement.textContent = `seu nome invertido ${nomeSeparado[1]} ${nomeSeparado[0]}`;