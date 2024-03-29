const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes')
const meuMiddleware = require('./src/middlewares/middleware')

app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(routes)
app.use(meuMiddleware)

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('servidor executanto na porta 3000')
})
