require('dotenv').config();

//Criando meu servidor com express
const express = require('express');
const path = require('path');
const app = express();

//Fazendo a conexão com a base de dados criada
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    app.emit('Pronto')
}).catch(e => console.log(e));

//aprendendo a mexer com rotas
const routes = require('./routes');
const meuMiddleware = require('./src/middlewares/middleware');


app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);
app.use(meuMiddleware);

app.on('Pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('servidor executanto na porta 3000');
    })
})
