//capturando evento de submit do formulario
const form = document.querySelector('#form')
//função para ouvir o evento de enviar o formulario
form.addEventListener('submit', function (evento) {
    evento.preventDefault()

    const inputPeso = evento.target.querySelector('.peso')
    const inputAltura = evento.target.querySelector('.altura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if(!peso){
        setResultado('Peso inválido', false)
        return;
    }

    if(!altura){
        setResultado('Altura inválida', false)
        return;
    }
    const imc = getImc(peso,altura)
    const nivel = nivelImc(imc)

    const msg = `Seu imc é ${imc} (${nivel}).`

    setResultado(msg, true)
    console.log(imc,nivel)
});

function nivelImc(imc) {

    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3',]

    if (imc >= 39.9) {
        return nivel[5]
    }

    if (imc >= 34.9){
        return nivel[4]
    }

    if (imc >= 29.9){
        return nivel[3]
    }

    if (imc >= 24.9){
        return nivel[2]
    }

    if (imc >= 18.5){
        return nivel[1]
    }

    if (imc < 18.5){
        return nivel[0]
    }
}
function setResultado(msg, isValid){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = ''

    const p = criaParagrafos()

    if(isValid){
        p.classList.add('paragrafo-resultado')
    }else{
        p.classList.add('bad')
    }

    p.innerHTML = msg
    resultado.appendChild(p)
    
}

function criaParagrafos(){
    const p = document.createElement('p')
    return p
}

function getImc(peso,altura){
    let imc = peso/(Math.pow(altura,2))
    return imc.toFixed(2)
}
