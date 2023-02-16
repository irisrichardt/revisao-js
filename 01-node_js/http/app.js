import * as http from  'http';

const server = http.createServer((req, res) => {
    res.writeHead('200', {'Content-Type': 'text/html'});
    var url = req.url;

    if(url == '/sobre') {
        res.write('<h1>NodeJs Sobre</h1>');
        res.end();
    }else if(url === '/contato'){
        res.write('<h1>NodeJs Contato</h1>');
        res.end();
    }else {
        res.write('<h1>NodeJs</h1><ul><li><a href="/sobre">Sobre</a></li><li><a href="/contato">contato</a></li></ul>');
        res.end();
    }
});

server.listen('3001', () => {
    console.log('Servidor iniciado na porta 3001!');
});