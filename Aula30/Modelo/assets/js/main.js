/* 
let resultado = document.querySelector('.resultado')

const data =  new Date("Octuber 7, 2019 22:52:00")

let diaSemana = data.getDay()
let mes = data.getMonth()
let diaSemanaTexto
let mesTexto

resultado.innerHTML = `<p><b>${retornaDiaSemana(diaSemana)}, ${data.getDate()} de ${retornaMes(mes)} ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}</b></p>`

function retornaDiaSemana(diaSemana){
    switch(diaSemana){
        case 0:
            return diaSemanaTexto = 'Domingo'
        case 1:
            return diaSemanaTexto = 'Segunda-feira'
        case 2:
            return diaSemanaTexto = 'Terça'
        case 3:
            return diaSemanaTexto = 'Quarta'
        case 4:
            return diaSemanaTexto = 'Quinta'
        case 5:
            return diaSemanaTexto = 'Sexta'
        case 6:
            return diaSemanaTexto = 'Sabado'
        default:
            return diaSemanaTexto = ''
    }
}

function retornaMes(mes){
    switch(mes){
        case 0:
            return mesTexto = 'janeiro'
        case 1:
            return mesTexto = 'fevereiro'
        case 2:
            return mesTexto = 'abril'
        case 3:
            return mesTexto = 'maio'
        case 4:
            return mesTexto = 'junho'
        case 5:
            return mesTexto = 'julho'
        case 7:
            return mesTexto = 'agosto'
        case 8:
            return mesTexto = 'setembro'
        case 9:
            return mesTexto = 'Outubro'
    }
}
esse foi o jeito burro de fazer isso
 */

let resultado = document.querySelector('.resultado')
const data = new Date()

resultado.innerHTML = data.toLocaleString('pt-br', {dateStyle: 'full', timeStyle: 'short'})
