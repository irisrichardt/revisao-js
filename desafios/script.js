function escreverHtml(mensagem) {
    const paragrafo = document.createElement("p");
    const texto = document.createTextNode(mensagem);
    
    paragrafo.appendChild(texto);

    const body = document.body;
    body.appendChild(paragrafo);
}

function parOuImpar(numero) {
    if(numero % 2 == 0) {
        console.log('é par');
    } else {
        console.log('é ímpar');
    }
}

parOuImpar(5);
parOuImpar(4);

function vogalOuConsoante(letra) {
    let tipo;

    switch (letra) {
        case 'a': tipo = 'vogal'; break;
        case 'e': tipo = 'vogal'; break;
        case 'i': tipo = 'vogal'; break;
        case 'o': tipo = 'vogal'; break;
        case 'u': tipo = 'vogal'; break;    
        default: tipo = 'consoante';
    }

    escreverHtml(tipo);
}

vogalOuConsoante('a');
vogalOuConsoante('b');

//  Neste desafio você vai receber um número. Dependendo do número, imprima o dia da semana correspondente (sendo 1 = Domingo e 7 = Sábado). Caso seja recebido qualquer valor diferente, você deve imprimir "Dia Inválido".
function diaDaSemana(numero) {

    switch (numero) {
        case 1: console.log('Domingo');   break;
        case 2: console.log('Segunda');   break;
        case 3: console.log('Terça');     break;
        case 4: console.log('Quarta');    break;
        case 5: console.log('Quinta');    break;
        case 6: console.log('Sexta');     break;
        case 7: console.log('Sábado');    break;
        default: console.log("Dia Inválido");
    }
}

diaDaSemana(1);
diaDaSemana(2);
diaDaSemana(3);
diaDaSemana(7);
diaDaSemana(9);
diaDaSemana(10);

/*
    Você vai receber três números, referenciando o tamanho dos lados de um triângulo. Mas note o seguinte:
    Só temos um triângulo formado quando a soma de dois lados é maior do que a terceira;
    Se todos os lados forem iguais, teremos um triângulo "Equilátero"
    Se todos os lados forem diferentes, teremos um triângulo "Escaleno";
    Se apenas dois lados forem iguais, teremos um triângulo "Isósceles".
    Dependendo dos valores passados, seu programa deve imprimir "Equilátero", "Escaleno", "Isósceles" ou "Não é um triângulo".
*/
function triangulo(a, b, c) {
    let ab = a + b,
        ac = a + c,
        bc = b + c,
        eh_triangulo = (ab > c) && (ac > b) && (bc > a);

    if(eh_triangulo) {
        if(a === b && a === c) {
            console.log('Equilátero');
        } else if (a !== b && a !== c && b !== c) {
            console.log('Escaleno');
        } else {
            console.log('Isósceles');
        }
    } else {
        console.log('Não é um triângulo');
    }
}

triangulo(3, 3, 3);
triangulo(2, 3, 4);
triangulo(4, 4, 6);
triangulo(1, 2, 5);

/*
    Imagine que o preço de um determinado produto é de R$ 5.50. Porém, se forem compradas pelo menos 25 unidades, o preço baixa para R$ 4.85.
    Você vai receber a quantidade de produtos comprados e deve imprimir o total da compra.
*/
function calculaValorCompra(quantidade) {
    if(quantidade >= 25) {
        console.log(quantidade * 4.85); 
    } else {
        console.log(quantidade * 5.50) 
    }
}

calculaValorCompra(2);
calculaValorCompra(24);
calculaValorCompra(25);
calculaValorCompra(35);

function calculaMedia(a, b, c, d) {
    let conceito;
    let media = (a + b + c + d) / 4;

    if(media >= 9) {
        conceito = 'A';
    } else if (media >= 7.5) {
        conceito = 'B';
    } else if (media >= 6) {
        conceito = 'C';
    } else if (media >= 4) {
        conceito = 'D';
    } else {
        conceito = 'F';
    } 

    console.log(conceito);
}

calculaMedia(5, 7, 6, 8);