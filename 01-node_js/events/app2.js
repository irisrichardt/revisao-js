import EventEmitter from 'events';

class Cao extends EventEmitter {
    latir() {
        console.log('Latindo...');
    }

    pular() {
        console.log('Pulando...');
    }
}

var tom = new Cao();

tom.on('pessoa_na_porta', tom.latir);
tom.emit('pessoa_na_porta');
tom.emit('pessoa_na_porta');
tom.emit('pessoa_na_porta');

// remover o evento, ao remover o evento ele nao sera mais executado quando for chamado
tom.removeListener('pessoa_na_porta', tom.latir);
tom.emit('pessoa_na_porta');

// executar o evento apenas uma vez, por mais q chame outras vezes
tom.once('pulando_de_felicidade', tom.pular);
tom.emit('pulando_de_felicidade');
tom.emit('pulando_de_felicidade');