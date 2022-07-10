let varA = 'A'//recebe b
let varB = 'B'//recebe c
let varC = 'C'//recebe a

let aux = varA

varA = varB
varB = varC
varC = aux

console.log(varA, varB, varC)