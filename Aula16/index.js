let alunos = ['Maria', 'João', 'Luiz']

alunos[0] = 'Eduardo'
alunos[3] = 'Luiza'

console.log(alunos[0])
console.log(alunos[1])
console.log(alunos[2])
console.log(alunos[3])

alunos.push('Athila') //Adiciona no fim
alunos.unshift("Ana") //Adiciona no inicio

console.log(alunos)

const removido = alunos.pop()//Remove o ultimo elemento do array(retorna o elemento removido)
const removido2 = alunos.shift()//Remove o primeiro elemento do array(retorna o elemento removido)

console.log(alunos)

delete alunos[1]//deleta um elemento de uma posição do array sem modificar os indices

console.log(alunos.slice(0,3))
console.log(typeof alunos)//array é objeto
console.log(alunos instanceof Array)//retorna verdadeiro se for um array