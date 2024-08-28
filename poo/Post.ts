import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';

class Post {

    //atributos
    // public .userName
    // protected #userName
    private _userName: string;
    private _txtPostagem : string;
    private _dataPostagem: Date;
    private _numeroCurtidas: number;
    private _id: string;

    //construtor
    constructor(userName: string, título : string){
        this._userName = userName;
        this._txtPostagem = título;
        this._dataPostagem = new Date();
        this._numeroCurtidas = 0;
        this._id = uuidv4();
    }

    //get e set
    get userName(){
        return this._userName;
    }

    set userName(nome:string){
        this._userName = nome;
    }

    get txtPostagem(){
        return this._txtPostagem;
    }

    set txtPostagem(txtPostagem:string){
        this._txtPostagem = txtPostagem;
    }

    get id(){
        return this._id;
    }

    //métodos
    incrementarCurtida(){
        this._numeroCurtidas += 1;
    }
}

const postArray : object[] = [];
var postagem : object = {};

for(let i = 0; i<= 15; i++){
    
    const userName = faker.person.fullName();
    const txtPostagem = faker.lorem.word();

    postagem = new Post(userName,txtPostagem);
    postArray.push(postagem);
}

console.log(postArray);


