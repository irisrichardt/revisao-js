function adicao(numero1, numero2) {
    let adicao = numero1 + numero2;

    document.body.innerHTML += "<p>Adição " + numero1 + " + " + numero2 + " = " + adicao + "</p>";
}

function subtracao(numero1, numero2) {
    let op = "Subtração";
    let sinal = '-';
    let resultado = numero1 - numero2;
    
    escreverHtml(op, sinal, numero1, numero2, resultado);
}

function multiplicacao(numero1, numero2) {
    let op = "Multiplicação";
    let sinal = '*';
    let resultado = numero1 * numero2;
    
    escreverHtml(op, sinal, numero1, numero2, resultado);
}

function divisao(numero1, numero2) {
    let op = "Divisão";
    let sinal = '/';
    let resultado = numero1 / numero2;
    
    escreverHtml(op, sinal, numero1, numero2, resultado);
}

function escreverHtml(op, sinal, valor1, valor2, resultado) {
    const paragrafo = document.createElement("p");
    const texto = document.createTextNode(op + " " + valor1 + " " + sinal + " " + valor2 + " = " +resultado);
    
    paragrafo.appendChild(texto);

    const body = document.body;
    body.appendChild(paragrafo);
}
adicao(5, 2);
subtracao(5, 2);
multiplicacao(3, 3);
divisao(10, 2);

function opTernario(valor1, valor2) {
    console.log((valor1 === valor2) ? ('Iguais') : ('Diferentes'));
}

opTernario(7, 7);
opTernario(1, 6);

function exercicioRegraDe3(totalLaranjas, quantidadeComida) {
    resultado = (100 * quantidadeComida) / totalLaranjas;
    resultado = 100 - resultado;
    console.log("Resultado 1: "+resultado);

    // ou

    console.log("Resultado 2: "+(totalLaranjas - quantidadeComida ) / totalLaranjas * 100 );
}

exercicioRegraDe3(4, 1);