console.log("JavaScript carregado!");

const slide = document.getElementById("slide");

function slider() {
  if (slide) {
    //se slider existir

    const isVisible = slide.style.transform === "translateX(0%)"; //verifica se está nesse mesmo valor

    if (isVisible) {
      //visível
      slide.style.transform = "translateX(-100%)";
    } else {
      //não visível
      slide.style.transform = "translateX(0%)"; //mostra a tela
    }
  } else {
    console.error("Elemento #slide não encontrado!");
  }
}
