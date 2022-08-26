/* const pessoa = {
    nome: 'athila',
    sobrenome: 'archanji'
};

const chave = 'nome'
//console.log(pessoa[chave]);

const pessoa1 = new Object()
const pessoa2 = new Object()

pessoa1.nome = 'luis'
pessoa1.sobrenome = 'sla'

console.log(pessoa1)

delete pessoa1.nome
console.log(pessoa1) */

function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
}

const p1 = new Pessoa('Athila', 'Archanji')
const p2 = new Pessoa('Maria', 'Santos');

console.log(p1)