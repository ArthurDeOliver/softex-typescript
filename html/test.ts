let isLiked = false; // variável dentro do arquivo

//chamada sempre que executa o evento
function like() {
  isLiked = !isLiked;
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
  const iconHeart = document.getElementById("heart");

  //   console.log(btnLike);

  if (isLiked) {
    iconHeart?.classList.remove("far");
    iconHeart?.classList.add("liked");
    iconHeart?.classList.add("fas");
    iconHeart.style.color = "red";
  } else {
    iconHeart?.classList.remove("fas");
    iconHeart?.classList.remove("liked");
    iconHeart?.classList.add("far");
    iconHeart.style.color = "black";
  }
}
