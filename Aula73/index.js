//metodos uteis para objetos
//para copiar podemos usar ...
//tambem podemos usar .assign
//Object.keys (retorna as chaves do objeto)
//Object.freeze(congela o objeto)
//Object.defineProperties (define varias propriedades do objeto)
//Object.defineProperty (define uma propriedade)

const produto = {nome: 'caneca', preco: 1.8}
const outraCoisa = Object.assign({}, produto, {material: 'porcelana'})

outraCoisa.nome = 'outro nome'
outraCoisa.preco = 2.5

console.log(produto)
console.log(outraCoisa)

