function main(){
    const form = document.querySelector('.form')

    const pesoEaltura = []

    function recebeEventoForm(evento){
        evento.preventDefault()
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        let IMC = peso.value/(Math.pow(altura.value,2))

        if(IMC < 18.5){
        }
        else if(IMC >= 18.5 && IMC <= 24.9){
            resultado.innerHTML = `<p> Seu IMC é ${IMC.toFixed(2)}(você está no peso ideal)<br></p>`
        }
        else if(IMC >= 25 && IMC <= 29.9){
            resultado.innerHTML = `<p> Seu IMC é ${IMC.toFixed(2)}(Sobrepeso)<br></p>`
        }
        else if(IMC >= 30 && IMC <= 34.9){
            resultado.innerHTML = `<p> Seu IMC é ${IMC.toFixed(2)}(Obesidade grau 1)<br></p>`
        }
        else if(IMC >= 35 && IMC <= 39.9){
            resultado.innerHTML = `<p> Seu IMC é ${IMC.toFixed(2)}(Obesidade grau 2)<br></p>`
        }
        else if(IMC >= 40){
            resultado.innerHTML = `<p> Seu IMC é ${IMC.toFixed(2)}(Obesidade grau 3)<br></p>`
        }
        else if(isNaN(peso.value)){
            resultado.innerHTML = `<p> Não é um peso valido<br></p>`
        }
        else if(isNaN(altura.value)){
            resultado.innerHTML = `<p> Não é uma altura valido<br></p>`
        }
        
    }

    form.addEventListener('submit', recebeEventoForm)
}
main();