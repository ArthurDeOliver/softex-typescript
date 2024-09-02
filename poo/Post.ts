import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";

class Post {
  //atributos
  // public .userName
  // protected #userName
  private _id: string;
  private _userName: string;
  private _avatarURL: string;
  private _imageURL: string;
  private _isLiked: boolean;
  private _description: string;
  private _createdAt: Date;
  private _numberOfLikes: number;

  //construtor
  constructor(
    userName: string,
    avatarUrl: string,
    imagemUrl: string,
    description: string
  ) {
    this._id = uuidv4();
    this._userName = userName;
    this._avatarURL = avatarUrl;
    this._imageURL = imagemUrl;
    this._isLiked = false;
    this._description = description;
    this._createdAt = new Date();
    this._numberOfLikes = 0;
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
}

console.log(posts);

posts[14].like();
console.log(posts[14].numberOfLikes);
console.log(posts[14]);
// posts[14].like();
// console.log(posts[14].numberOfLikes);
