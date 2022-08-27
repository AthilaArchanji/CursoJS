function TrocaCor() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.cliqueBotao()
    }

    this.cliqueBotao = () => {
        document.addEventListener('click', function (e) {
            const el = e.target

            if (el.classList.contains('trocaCor'))
                this.mudaCorDeFundo()

        }.bind(this))
    }

    this.mudaCorDeFundo = () => {
        console.log("estou clicando no botao")
        let corDeFundo = document.getElementById("corpo")
        corDeFundo.style.backgroundColor = this.geraCorHex()

    }

    this.geraCorHex = () => {
        return '#' + parseInt((Math.random() * 0XFFFFFF)).toString(16).padStart(6, '0')
    }
}

const troca = new TrocaCor()
troca.inicia()


/* function TrocaCor(){

    this.inicia = () =>{
        this.cliqueBotao();
    }

    this.cliqueBotao = () => {
        document.addEventListener('clicl', (e) => {
            const el = e.target

            if(el.classList.contains === 'trocaCor'){
                this.mudaCorDeFundo()
            }
        })
    }

    this.mudaCorDeFundo = () =>{
        let cor = document.getElementById('corpo')
        cor.style.backgroundColor = this.novaCor()
    }

    this.novaCor = () =>{
        return parseInt((Math.random * 0xFFFFFF)).toString(16).padStart(6, '0')
    }
}

const troca = new TrocaCor()
troca.inicia() */
