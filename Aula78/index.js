function Conta(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return
    }

    this.saldo -= valor
    this.verSaldo()
}

Conta.prototype.depositar = function (valor) {
    this.saldo += valor
    this.verSaldo()
}

Conta.prototype.verSaldo = function () {
    console.log(`Ag/c: ${this.agencia}/ ${this.conta} | ` + `Saldo: R$${this.saldo.toFixed(2)}`)
}

const c1 = new Conta(11, 22, 10)
c1.depositar(20)
c1.sacar(29)

function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

CC.prototype = Object.create(Conta.prototype)
CC.prototype.constructor = CC

CC.prototype.sacar = function (valor) {
    if (this.saldo < valor + this.limite) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return
    }

    this.saldo -= valor
    this.verSaldo()
}

function CP(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo)
}