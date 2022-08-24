function Calculadora() {

    this.display = document.querySelector('.display');
    this.clear = document.querySelector('.btn-cle');

    this.inicia = () => {
        this.cliqueBotoes()
        this.pressionaEnter()
    };

    this.cliqueBotoes = () => {
        document.addEventListener('click', function (e) {
            const el = e.target

            if (el.classList.contains('btn-num'))
                this.btnParaDisplay(el.innerText)
            if (el.classList.contains('btn-cle'))
                this.clearDisplay()
            if (el.classList.contains('btn-de1'))
                this.deleteOne(el.innerText)
            if (el.classList.contains('btn-eq'))
                this.realizaConta()

        }.bind(this))
    };

    this.btnParaDisplay = (valor) =>{
        this.display.value += valor
        this.display.focus()
    }

    this.clearDisplay = () => this.display.value = ''

    this.deleteOne = () => this.display.value = this.display.value.slice(0, -1)

    this.pressionaEnter = () => {
        this.display.addEventListener('keypress', e => {
            if (e.keyCode === 13) {
                this.realizaConta()
            }
        })
    };

    this.realizaConta = () => {
        let conta = this.display.value

        try {
            conta = eval(conta)

            if (isNaN(conta)) {
                alert('Conta inválida')
                return
            }

            this.display.value = conta
        } catch (e) {
            alert('Conta inválida')
        }
    };
}

const c1 = new Calculadora()
c1.inicia();