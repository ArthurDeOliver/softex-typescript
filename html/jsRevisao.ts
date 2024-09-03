console.log("JavaScript carregado!");

const slide = document.getElementById("slide");

function slider() {


    if (slide) {
        const isVisible = slide.style.transform === "translateX(-13%)"; //verifica se está nesse mesmo valor

        if (isVisible) { //visível
            slide.style.transform = "translateX(-200%)";
        } else {//não visível
            slide.style.transform = "translateX(-13%)"; //retorna para a sair da tela
        }
    } else {
        console.error("Elemento #slide não encontrado!");
    }
}
