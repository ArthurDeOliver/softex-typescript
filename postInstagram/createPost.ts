const newPost = document.createElement("main"); //criação da tag main
const body = document.getElementById("b"); //trazendo o body para o código
const teste = "teste";

//innerHTML permite escrever scripts HTML dentro do código, assim, dentro do main consigo criar um novo post
newPost.innerHTML = `

<div class="caixa">
        <div class="header">
          <div class="user-info">
            <div class="img-user">
              <img src="sombra-de-usuario-masculino.png" />
            </div>
            <span class="name-user">user_name</span>
          </div>

          <div class="follow-ret">
            <span class="follow">follow</span>
            <span class="ret">...</span>
          </div>
        </div>

        <div class="picture">
          <img src="IMG-20240719-WA0044.jpg" alt="" />
        </div>

        <div class="footer">
          <div class="icon">
            <div class="icon-wrapper">
              <div id="div-botao">
                <button onclick="like()" id="btn-like">
                  <i class="far fa-heart" id="heart"></i>
                </button>
              </div>
              <div>
                <i class="far fa-comment"></i>
              </div>
              <div>
                <i class="far fa-paper-plane"></i>
              </div>
            </div>

            <i class="far fa-bookmark"></i>
          </div>

          <div class="txt-footer">
            <div class="like">
              <i class="fas fa-heart"></i>
              <span id="qnt-like">0</span>
              <span class="txt">likes</span>
            </div>

            <div class="txt">
              <span id="txt"
                >${teste}</span
              >
            </div>
          </div>
        </div>
      </div>
      <script src="buisness.ts"></script>

`;

body?.appendChild(newPost);
