console.log("código Post está funcionando!");
import { v4 as randomUUID } from "uuid";
import { faker } from "@faker-js/faker";

class Post {
  //atributos
  // public .userName
  // protected #userName
  private _id: string = randomUUID();
  private _userName: string;
  private _avatarURL: string;
  private _imageURL: string;
  private _isLiked: boolean = false;
  private _description: string;
  private _createdAt: Date = new Date();
  private _numberOfLikes: number = 0;

  //construtor
  constructor(
    userName: string,
    avatarUrl: string,
    imagemUrl: string,
    description: string
  ) {
    this._userName = userName;
    this._avatarURL = avatarUrl;
    this._imageURL = imagemUrl;
    this._description = description;
  }

  //get e set
  get numberOfLikes() {
    return this._numberOfLikes;
  }
  //métodos
  like() {
    this._isLiked = !this._isLiked;

    if (this._isLiked) {
      this._numberOfLikes += 1;
    } else {
      this._numberOfLikes -= 1;
    }
  }

  toHTML() {
    const newPost = document.createElement("main"); //criação da tag main
    const body = document.getElementById("b"); //trazendo o body para o código
    const teste = "teste";

    //innerHTML permite escrever scripts HTML dentro do código, assim, dentro do main consigo criar um novo post
    newPost.innerHTML = `

    <div class="caixa">
        <div class="header">
          <div class="user-info">
            <div class="img-user">
              <img src="${this._avatarURL}" />
            </div>
            <span class="name-user">${this._userName}</span>
          </div>

                 <!-- 
        <div class="follow-ret">
          <span class="follow">follow</span>
          <span class="ret">...</span>
        </div> -->
        </div>

        <div class="picture">
          <img src="${this._imageURL}" alt="" />
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
              <span id="qnt-like">${this._numberOfLikes}</span>
              <span class="txt">likes</span>
            </div>

            <div class="txt">
              <span id="txt"
                >${this._description}</span
              >
            </div>
          </div>
        </div>
      </div>
      <script src="buisness.ts"></script>

`;

    body?.appendChild(newPost);
  }
}

const posts: Post[] = []; //array do tipo Post (classe criada)

for (let i = 0; i <= 15; i++) {
  // userName: string, avatarUrl : string, imagemUrl : string, description : string

  const userName = faker.person.fullName();
  const avatarUrl = faker.image.avatarGitHub();
  const imagemUrl = faker.image.urlLoremFlickr();
  const description = faker.lorem.paragraph();

  const postagem = new Post(userName, avatarUrl, imagemUrl, description);
  posts.push(postagem);
  postagem.toHTML();
}

console.log(posts);
