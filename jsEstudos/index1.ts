//extraindo elemento html para dentro do código
const slider = document.getElementById("slider");
const link = document.getElementById("link");

// link?.addEventListener("onmouseover", slideIn);
// link?.addEventListener("onmouseover", slideOut());

function slideIn() {
  slider.style.opacity = "100%"; // Coloca o slider na posição visível (abaixo do header)
  slider?.style.display = "inline";
}

// Função para ocultar o slider (envia para cima)
function slideOut() {
  slider.style.opacity = "0%"; // Recolhe o slider para fora da tela
  slider?.style.display = "none";
}
