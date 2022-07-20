let resultado = document.querySelector('.resultado')

const data =  new Date("Octuber 7, 2019 22:52:00")

let diaSemana = data.getDay()
let mes = data.getMonth()
let diaSemanaTexto
let mesTexto

switch(diaSemana){
    case 0:
        diaSemanaTexto = 'Domingo'
        break
    case 1:
        diaSemanaTexto = 'Segunda-feira'
        break
    case 2:
        diaSemanaTexto = 'Terça'
        break
    case 3:
        diaSemanaTexto = 'Quarta'
        break
    case 4:
        diaSemanaTexto = 'Quinta'
        break
    case 5:
        diaSemanaTexto = 'Sexta'
        break
    case 6:
        diaSemanaTexto = 'Sabado'
        break
    default:
        diaSemanaTexto = ''
        break
}

switch(mes){
    case 0:
        diaSemanaTexto = 'janeiro'
        break
    case 1:
        diaSemanaTexto = 'fevereiro'
        break
    case 2:
        diaSemanaTexto = 'abril'
        break
    case 3:
        diaSemanaTexto = 'maio'
        break
    case 4:
        diaSemanaTexto = 'junho'
        break
    case 5:
        diaSemanaTexto = 'julho'
        break
    case 7:
        diaSemanaTexto = 'agosto'
        break
    case 8:
        diaSemanaTexto = 'setembro'
        break
    case 9:
        mesTexto = 'Outubro'
        break
}

switch(mes){
}

resultado.innerHTML = `<p><b>${diaSemanaTexto}, ${data.getDate()} de ${mesTexto}</b></p>`