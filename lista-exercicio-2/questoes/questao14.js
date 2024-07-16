var nomeCompleto = prompt("digite teu nome");
var nomeSeparado = nomeCompleto.split(" ");
var pElement = document.getElementById("questao14");
pElement.textContent = "seu nome invertido ".concat(nomeSeparado[1], " ").concat(nomeSeparado[0]);
