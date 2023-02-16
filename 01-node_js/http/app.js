import * as http from  'http';

const server = http.createServer((req, res) => {
    res.writeHead('200', {'Contente-Type': 'text/html'});
    res.write('<h1>Ola, Web developer!</h1>');
    res.end();
});

server.listen('3001', () => {
    console.log('Servidor iniciado na porta 3001!');
});