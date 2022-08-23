function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        fala: function(assunto){
            return `${nome} esta ${assunto}.`
        }
    }
}

const p1 = criaPessoa('Athila', 'Archanji')

console.log(p1.fala('falando sobre RPG'))