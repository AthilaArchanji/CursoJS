const pessoa = {
    nome: 'Athila',
    sobrenome: 'Archanji',
    idade: 20,

    fala(){
        console.log(`A minha idade atual é ${this.idade}`)
    },

    incrementaIdade(){
        ++this.idade
    }
}

pessoa.fala()
pessoa.incrementaIdade()
pessoa.fala()