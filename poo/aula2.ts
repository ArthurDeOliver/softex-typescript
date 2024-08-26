class Post {

    //atributos
    // public .userName
    // protected #userName
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

    get titulo(){
        return this._titulo;
    }

    set titulo(titulo:string){
        this._titulo = titulo;
    }

    //métodos
    incrementarCurtida(){
        this._numeroCurtidas += 1;
    }
}

//instância do objeto postagemArthur da classe Post
const postagemArthur = new Post("Arthur", "foto");
console.log(postagemArthur.userName);

//metodo set userName para modificar o estado interno do objeto
postagemArthur.userName = "angelo";
console.log(postagemArthur.userName);