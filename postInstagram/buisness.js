var isLiked = false; // variável dentro do arquivo
//chamada sempre que executa o evento
function like() {
    //   const btnLike = document.getElementById("btn-like");
    /*
    ================= outra forma ===================
    const button = document.getElementById("div-botao"); //div que contém o botão
    const icon = button?.children[0].children[0];
    
    if (isLiked) {
      icon.classList.remove("far");
      icon.classList.add("fas");
      icon.style.color = "red";
      } else {
        icon.classList.remove("fas");
      icon.classList.add("far");
      icon.style.color = "black";
      }
      
      */
    isLiked = !isLiked;
    var iconHeart = document.getElementById("heart");
    //   console.log(btnLike);
    if (isLiked) {
        iconHeart === null || iconHeart === void 0 ? void 0 : iconHeart.classList.remove("far");
        iconHeart === null || iconHeart === void 0 ? void 0 : iconHeart.classList.add("liked");
        iconHeart === null || iconHeart === void 0 ? void 0 : iconHeart.classList.add("fas");
        iconHeart.style.color = "red";
    }
    else {
        iconHeart === null || iconHeart === void 0 ? void 0 : iconHeart.classList.remove("fas");
        iconHeart === null || iconHeart === void 0 ? void 0 : iconHeart.classList.remove("liked");
        iconHeart === null || iconHeart === void 0 ? void 0 : iconHeart.classList.add("far");
        iconHeart.style.color = "black";
    }
}
//criar novo elemento já existente
