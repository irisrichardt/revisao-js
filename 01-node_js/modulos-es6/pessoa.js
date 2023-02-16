// criando um objeto e setando os atributos
var pessoa = {
    nome: 'Iris',
    idade: 23,
    andar(){
        console.log('Esta andando...');
    }
}

var a = 10;
var b = 5;

function soma() {
    return a + b;
}

export { pessoa, soma, a, b };