//arrays são passados por referencia ou seja, se mudarmos a vamos mudar b tbm
let a = [1,2,3]
let b = a //se qusiermos uma cópia podemos fazer b = [...a]
let c = b

console.log(a,b)

a.push(4)
console.log(a,b)

b.pop()
console.log(a,b)

a.push('luiz')
console.log(c)