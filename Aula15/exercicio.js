let numero = Number(prompt('digite um numero'))
const numeroTitulo = document.getElementById('numero-titulo')
const texto = document.getElementById('texto')

numeroTitulo.innerHTML = numero
texto.innerHTML = `<p>A raiz quadrada do seu numero é ${Math.sqrt(numero)}<br></p>`
texto.innerHTML += `<p>É NaN: ${isNaN(numero)}<br></p>`
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}<br></p>`
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}<br></p>`
texto.innerHTML += `<p>Com duas casas decimais ${numero.toFixed(2)}</p>`