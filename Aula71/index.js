function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco
    this.estoque = estoque

    /*     Object.defineProperty(this, 'estoque', {
            enumerable: true, //moostra a chave
            value: estoque, //valor
            writable: true, //pode alterar o valor
            configurable: false //configurável
        }) */

    Object.defineProperties(this, {
        nome: {
            enumerable: true, //moostra a chave
            value: estoque, //valor
            writable: true, //pode alterar o valor
            configurable: false //configurável
        },
        
    })
}

const p1 = new Produto('camiseta', 20, 3)
p1.estoque = 500000
delete p1.estoque
console.log(p1)