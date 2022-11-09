function escreverHtml(mensagem) {
    const paragrafo = document.createElement("p");
    const texto = document.createTextNode(mensagem);
    
    paragrafo.appendChild(texto);

    const body = document.body;
    body.appendChild(paragrafo);
}

// IF E ELSE
function saudacao(hora) {
    let mensagem;

    if (hora < 12) {
        mensagem = 'Bom dia!';
    } else if (hora >= 12 && hora < 18) {
        mensagem = 'Boa tarde!';
    } else if (hora > 24) {
        mensagem = 'Hora inválida..';
    } else {
        mensagem = 'Boa noite!';
    }

    escreverHtml(mensagem);
}

saudacao(5);
saudacao(13);
saudacao(23);
saudacao(24);
saudacao(25);

// SWITCH
function mes(mes) {
    let nomeMes;

    switch (mes) {
        case 1: nomeMes = 'Janeiro'; break;
        case 2: nomeMes = 'Fevereiro'; break;
        case 3: nomeMes = 'Março'; break;
        case 4: nomeMes = 'Abril'; break;
        case 5: nomeMes = 'Maio'; break;
        case 6: nomeMes = 'Junho'; break;
        case 7: nomeMes = 'Julho'; break;
        case 8: nomeMes = 'Agosto'; break;
        case 9: nomeMes = 'Setembro'; break;
        case 10: nomeMes = 'Outubro'; break;
        case 1: nomeMes = 'Novembro'; break;
        case 12: nomeMes = 'Dezembro'; break;        
        default: nomeMes = 'Mês inválido';
    }

    escreverHtml(nomeMes);
}

mes(1);
mes(6);
mes(8);
mes(10);
mes(125);