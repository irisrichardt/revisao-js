import * as http from  'http';

// rotas
const server = http.createServer((req, res) => {
    res.writeHead('200', {'Contente-Type': 'text/html'});
    var url = req.url;
    if(url === '/sobre') {
        res.write('<h1>NodeJs Sobre</h1><p>Saiba mais sobre o NodeJs!</p>');
        res.end();
    } else if(url === '/contato') {
        res.write('<h1>NodeJs Contato</h1><p>Entre em contato!</p>');
        res.end();
    } else {
        res.write('<h1>NodeJs</h1><p>Ola, Web Developer!</p><ul><li><a href="/sobre">Sobre</a></li><li><a href="/contato">Contato</a></li></ul>');
        res.end();
    }
});

server.listen('3001', () => {
    console.log('Servidor iniciado na porta 3001!');
});