var estadoCivil = prompt("Digite o seu estado civil (solteiro, casado, divorciado, viúvo):");
var mensagem;
switch (estadoCivil) {
    case 'solteiro':
        mensagem = 'Você é solteiro.';
        break;
    case 'casado':
        mensagem = 'Você é casado.';
        break;
    case 'divorciado':
        mensagem = 'Você é divorciado.';
        break;
    case 'viúvo':
        mensagem = 'Você é viúvo.';
        break;
    default:
        mensagem = 'Estado civil inválido.';
}
alert(mensagem);
