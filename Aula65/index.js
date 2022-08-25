const numeros = [1, 209, 21, 43, 2, 32, 54, 645, 435, 235, 123]

const numerosFiltrados = numeros.filter(valor => valor > 60);

const pessoas = [
    {nome: 'athila', idade: 20},
    {nome: 'maria', idade: 30},
    {nome: 'isaac', idade: 40},
    {nome: 'ana', idade: 25},
    {nome: 'joziane', idade: 35},
]

const pessoasComNomeGrande = pessoas.filter(obj => obj.idade >= 30)

console.log(pessoasComNomeGrande)