var char = prompt("digite um caractere");

if ((char == "a" || char == "e" || char == "i" || char == "o" || char == "u") && (char.length == 1)) {
    alert("o caractere que vc colocou é uma vogal");
} else alert("o caractere é uma consoante");