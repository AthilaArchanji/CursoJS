const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send('Olá mundo!!!');
});

app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000')
    console.log('servidor executanto na porta 3000')
})

app.get('/contato', (req, res) =>{
    res.send('Teste realizado')
})