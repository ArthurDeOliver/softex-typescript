class Pessoa { //definindo classe
    //atributos
    nome : string; 
    cpf  : string;
    genero : string; // genero : string = "Masculino" | "Feminino" define quais valores vai possuir, apenas esses 2.
    // dataNascimento : Date = new Date();

    //construtor
    constructor(nome:string, cpf:string, genero:string){
        this.nome = nome;
        this.cpf = cpf;
        this.genero = genero;
    }

}
//instanciando os objetos da classe Pessoa
const arthur = new Pessoa("arthur de oliveira","123.123.123-45","masculino");
const angelo = new Pessoa("angelo gomes", "123.412.412-45", "masculino");

console.log(arthur);
console.log(angelo);


//atividade construir os objetos: Carro, Conta Bancária, Celular

//TYPE define o tipo de uma variável
// type PessoaType = {
//     nome : string;
//     cpf  : string;
//     dataNascimento : Date;
//     genero : "Masculino" | "Feminino";
// }

// const arthurType : PessoaType {
//    // setar atributos
// }