var numero1 = Number(prompt("digite um número1"));
var numero2 = Number(prompt("digite um número2"));
var numero3 = Number(prompt("digite um número3"));

var stringNumero = " ";

if ((numero1 > numero2 && numero1 > numero3) && (numero2 > numero3)) {

    stringNumero = stringNumero + " " + numero1;
    stringNumero = stringNumero + " " + numero2;
    stringNumero = stringNumero + " " + numero3;

} else if ((numero1 > numero2 && numero1 > numero3) && (numero3 > numero2)) {

    stringNumero = stringNumero + " " + numero1;
    stringNumero = stringNumero + " " + numero3;
    stringNumero = stringNumero + " " + numero2;

} else if ((numero2 > numero1 && numero2 > numero3) && (numero1 > numero3)) {

    stringNumero = stringNumero + " " + numero2;
    stringNumero = stringNumero + " " + numero1;
    stringNumero = stringNumero + " " + numero3;

} else if ((numero2 > numero1 && numero2 > numero3) && (numero3 > numero1)) {

    stringNumero = stringNumero + " " + numero2;
    stringNumero = stringNumero + " " + numero3;
    stringNumero = stringNumero + " " + numero1;

} else if ((numero3 > numero1 && numero3 > numero2) && (numero1 > numero2)) {

    stringNumero = stringNumero + " " + numero3;
    stringNumero = stringNumero + " " + numero1;
    stringNumero = stringNumero + " " + numero2;

} else if ((numero3 > numero1 && numero3 > numero2) && (numero2 > numero1)) {

    stringNumero = stringNumero + " " + numero3;
    stringNumero = stringNumero + " " + numero2;
    stringNumero = stringNumero + " " + numero1;

}

alert(`ordem dos números ${stringNumero}`)