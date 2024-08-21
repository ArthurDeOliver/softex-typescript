class Post {

    //atributos
    private _userName: string;
    private _titulo : string;
    private _dataPostagem: Date;
    private _numeroCurtidas: number;

    //construtor
    constructor(userName: string, título : string){
        this._userName = userName;
        this._titulo = título;
        this._dataPostagem = new Date();
        this._numeroCurtidas = 0;
    }

    //get e set
    get userName(){
        return this._userName;
    }

    set userName(nome:string){
        this._userName = nome;
    }

    //métodos
    incrementarCurtida(){
        this._numeroCurtidas += 1;
    }
}

const postagemArthur = new Post("Arthur", "foto");
console.log(postagemArthur.userName);

postagemArthur.userName = "angelo";
console.log(postagemArthur.userName);