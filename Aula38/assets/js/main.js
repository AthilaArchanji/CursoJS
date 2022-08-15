const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p')

const estilos = getComputedStyle(document.body)
const corDoCorpo = estilos.backgroundColor;
console.log(corDoCorpo)

for(let i of ps){
    i.style.backgroundColor = corDoCorpo
}