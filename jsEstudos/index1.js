//extraindo elemento html para dentro do código
var slider = document.getElementById("slider");
var link = document.getElementById("link");
// link?.addEventListener("onmouseover", slideIn);
// link?.addEventListener("onmouseover", slideOut());
function slideIn() {
    slider.style.opacity = "100%"; // Coloca o slider na posição visível (abaixo do header)
    slider === null || slider === void 0 ? void 0 : slider.style.display = "inline";
}
// Função para ocultar o slider (envia para cima)
function slideOut() {
    slider.style.opacity = "0%"; // Recolhe o slider para fora da tela
    slider === null || slider === void 0 ? void 0 : slider.style.display = "none";
}
