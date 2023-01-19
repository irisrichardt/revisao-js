function tabuada(a, b) {
    for (let i = 1; i <= a; i++) {
        for (let j = 1; j <= b; j++) {
            console.log(`${i} x ${j} = ${i*j}`);
        }
        console.log('Fim da tabuada do ' + i);
    }
}

tabuada(5, 10);

function helloWorld(texto) {
    document.write(texto);
}

function encontrarLetra(palavra, letra, totalProcurar) {
    let total = 0, 
        indice = 0;

    while (total < totalProcurar && indice < palavra.length) {
        console.log(palavra[indice]);
        if(palavra[indice] === letra) {
            total++;
        }
        
        indice++;
    }

    if (total >= totalProcurar) {
        console.log('Encontrou a quantidade de caracteres q estava buscando');
    } else {
        console.log('Não encontrou a quantidade de caracteres q estava buscando');
    }

    console.log(total);
}