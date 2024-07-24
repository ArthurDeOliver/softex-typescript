var avaliação = Number(prompt("digite sua avaliação"));
switch (avaliação) {
    case 1:
        alert("muito insuficiente");
        break;
    case 2:
        alert("insuficiente");
        break;
    case 3:
        alert("regular");
        break;
    case 4:
        alert("bom");
        break;
    case 5:
        alert("muito bom");
        break;
    default:
        alert("digite valores de 1 a 5");
        break;
}
