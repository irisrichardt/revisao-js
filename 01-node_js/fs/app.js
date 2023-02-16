import * as fs from 'fs';

fs.writeFile('arquivo.txt', 'Hello, World!', (err) => {
    if(err) {
        console.error(err);
    }

    console.log('Arquivo criado com sucesso!');
});

fs.appendFile('arquivo.txt', ' Hello, World 2!', (err) => {
    if(err) {
        console.error(err);
    }

    console.log('Arquivo atualizado com sucesso!');
})

fs.readFile('arquivo.txt', (err, data) => {
    if(err) {
        console.error(err);
    }

    console.log(data.toString());
})

let data2 = fs.readFileSync('arquivo2.txt');
console.log(data2.toString());