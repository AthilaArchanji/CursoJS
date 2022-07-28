const pessoa = {
    nome: 'Athila',
    sobrenome: 'Archanji',
    idade: 20,
    endereco: {
        rua: 'Sla aonde',
        numero: '17'
    }
};

const {nome: teste = 'Não existe', sobrenome, idade } = pessoa
console.log(teste, sobrenome, idade)