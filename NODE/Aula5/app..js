const path = require('path')
const caminhoDoArquivo = path.resolve(__dirname, 'teste.json')
const escreve = require('./modules/escreve')
const ler = require('./modules/ler')

/* const pessoas = [
    {nome: 'joao'},
    {nome: 'maria'},
    {nome: 'athila'},
    {nome: 'ana'},
]

const json = JSON.stringify(pessoas, '', 2)

escreve(caminhoDoArquivo, json) */
async function lerArquivos(caminho) {
    const dados = await ler(caminho)
    rendederizaDados(dados) 
}

function rendederizaDados(dados){
    dados = JSON.parse(dados)
    dados.forEach(val => console.log(val))
}

lerArquivos(caminhoDoArquivo)