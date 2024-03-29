function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.aumento = function (quantia) {
    this.preco += quantia
}

Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

const produto = new Produto('gen', 111)
const camiseta = new Camiseta('regata', 7.5, 'preta')

console.log(camiseta)
console.log(produto)