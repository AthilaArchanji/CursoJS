const numeros = [1, 2, 3, 4, 5, 6, 7, 89, 10, 9, 2, 3, 4, 5, 6,]

const total = numeros.reduce((acumulador, valor) => acumulador += valor)

console.log(total)