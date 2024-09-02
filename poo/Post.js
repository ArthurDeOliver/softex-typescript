"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var faker_1 = require("@faker-js/faker");
var Post = /** @class */ (function () {
    //construtor
    function Post(userName, avatarUrl, imagemUrl, description) {
        this._id = (0, uuid_1.v4)();
        this._userName = userName;
        this._avatarURL = avatarUrl;
        this._imageURL = imagemUrl;
        this._isLiked = false;
        this._description = description;
        this._createdAt = new Date();
        this._numberOfLikes = 0;
    }
    return Post;
}());
var posts = []; //array do tipo Post (classe criada)
for (var i = 0; i <= 15; i++) {
    // userName: string, avatarUrl : string, imagemUrl : string, description : string
    var userName = faker_1.faker.person.fullName();
    var avatarUrl = faker_1.faker.image.avatarGitHub();
    var imagemUrl = faker_1.faker.image.urlLoremFlickr();
    var description = faker_1.faker.lorem.paragraph();
    var postagem = new Post(userName, avatarUrl, imagemUrl, description);
    posts.push(postagem);
}
console.log(posts);
