class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome, ' ja ligado')
            return
        } 
        this.ligado = true
    }

    desliga(){
        if(!this.ligado){
            console.log(this.nome, ' ja desligado')
            return
        } 
        this.ligado = false
    }
}

class Smartphone extends DispositivoEletronico{
    constructor(nome, cor){
        super(nome)
        this.cor = cor
    }
}