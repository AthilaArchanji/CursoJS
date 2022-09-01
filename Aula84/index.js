class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2)
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos)
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1)
        this.novoCpf = cpfSemDigitos + digito1 + digito2
    }

    static geraDigito(cpfSemDigitos) {
        let total = 0
        let reverso = cpfSemDigitos.length + 1

        for (let stringNumerica of cpfSemDigitos) {
            total += reverso * Number(stringNumerica)
            reverso--
        }

        const digito = 11 - (total % 11)
        return digito > 9 ? '0' : String(digito);
    }

    valida() {
        if (typeof this.cpfLimpo === 'undefined') return false
        if (this.eSequencia()) return false
        this.geraNovoCpf()

        return this.novoCpf === this.cpfLimpo
    }

    eSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
    }
}

/* let cpf = new ValidaCPF('190.332.927.26')

if (cpf.valida()) {
    console.log(`cpf válido`)
} else {
    console.log(`cpf inválido`)
} */