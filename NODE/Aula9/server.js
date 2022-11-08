const express = require('express');
const app = express();
const routes = require('/routes.js')

app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('servidor executanto na porta 3000')
})

app.get('/', (req, res) => {

});

app.get('/contato', (req, res) => {
    res.send(req.params.idUsuario)
})

app.get('/testes/:idUsuario?', (req, res) => {
    console.log(req.query)
    res.send('sla')
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`${req.body.nome}`)
})