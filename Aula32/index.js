//podemos armazenar valores de arrays por desestruturação

let numeros = [1000,2000,3000,4000,5000,6000,7000,8000,9000]
let [primeiroNumero, segundoNumero, ...resto] = numeros
console.log(primeiroNumero, segundoNumero)
console.log(resto)