const express = require('express')
const route = express.Router()
const homeController = require('./controllers/homeController.js')
const contatoController = require('./controllers/contatoController.js')


//Rotas da home
route.get('/', homeController.paginaInicial)
route.post('/', homeController.trataPost)

//Rotas de contato
route.get('/contato', contatoController.teste)

module.exports = route