function criaCalculadora(){
    return{
        display: document.querySelector('.display'),
        clear: document.querySelector('.btn-cle'),

        inicia(){
            this.cliqueBotoes()
            this.pressionaEnter()
        },

        cliqueBotoes(){
            document.addEventListener('click', function(e){
                const el = e.target
                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText)
                }
                if(el.classList.contains('btn-cle')){
                    this.clearDisplay()
                }
                if(el.classList.contains('btn-de1')){
                    this.deleteOne(el.innerText)
                }
                if(el.classList.contains('btn-eq')){
                    this.realizaConta()
                }
            }.bind(this))
        },

        btnParaDisplay(valor){
            this.display.value += valor
        },

        clearDisplay(){
            this.display.value = ''
        },

        deleteOne(){
            this.display.value = this.display.value.slice(0, -1)
        },

        pressionaEnter(){
            this.display.addEventListener('keypress', e =>{
                if(e.keyCode === 13){
                    this.realizaConta()
                }
            })
        },

        realizaConta(){
            let conta =  this.display.value

            try{
                conta = eval(conta)

                if(isNaN(conta)){
                    alert('Conta inválida')
                    return
                }

                this.display.value = conta
            }catch(e){
                alert('Conta inválida')
            }
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia()