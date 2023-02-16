import EventEmitter from 'events';

var emitter = new EventEmitter();

emitter.on('meu_evento', (numero) => {
    console.log('Evento foi acionado!', numero)
});

emitter.on('soma', (numero1, numero2) => {
    console.log(numero1 + numero2)
});

emitter.emit('meu_evento', 123);
emitter.emit('soma', 5, 5);