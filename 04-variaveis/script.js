var idade = 18, 
    nome = 'Ana';

console.log(nome);

// atribuindo outro valor para a variavel
nome = 'Pedro';
console.log(nome);

// variavel do tipo let não pode ter seu valor alterado dps de ter algum valor atribuido;
let altura = 1.78;
console.log(altura);

// variavel const nunca pode ter seu valor alterado;
const IDADE_DO_CLIENTE = 36;
console.log(IDADE_DO_CLIENTE);

console.log('A ' +nome+ ' possui ' +idade+ ' anos.');
console.log(`A ${nome} possui ${idade + 1} anos.`)

function troca(valor1, valor2) {
    console.log('Valor1 antes de trocar: '+valor1);
    console.log('Valor2 antes de trocar: '+valor2);

    let troca = valor1;

    valor1 = valor2;
    valor2 = troca;

    console.log('Valor1 depois de trocar: '+valor1);
    console.log('Valor2 depois de trocar: '+valor2);
}

troca(5, 1);