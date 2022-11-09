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