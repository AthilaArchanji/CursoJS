//Em js temos 3 jeitos de fazer uma função, observe

//metodo 1
function soma(x,y){
    return x + y
}

console.log(soma(2,1))

//metodo 2
const soma1 = function(a,b){
    return a+b
}

console.log(soma1(4,2))

//metodo 3 (serve par quando a função tem apenas um parametro e apenas uma instrução)

const raiz = n => n ** 0.5

console.log(raiz(16))