class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario')
        this.eventos()
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmite(e)
        })
    }

    handleSubmite(e) {
        e.preventDefault()
        const camposValidos = this.camposSaoValidos()
    }

    camposSaoValidos() {
        let valid = true

        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove()
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText
            if (!campo.value) {
                this.createError(campo, `Campo ${label} não pode estar em branco`)
                valid = false
            }

            if (campo.classList.contains('cpf')) {
                if (!this.validaCPF(campo)) valid = false
            }
        }
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value)

        if (!cpf.valida()) {
            this.createError(campo, 'CPF inválido.')
            return false
        }
        return true
    }

    createError(campo, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend', div)
    }
}

const valida = new ValidaFormulario()