const inputTarefa = document.querySelector('.input-nova-tarefa')
const btnTarefa = document.querySelector('.btn-add-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaLi(){
    const li = document.createElement('li')
    return li
}

function criaTarefa(texto){
    const li = criaLi()
    li.innerHTML = texto
    tarefas.appendChild(li)
    limpaInputut()
    criaBotaoApagar(li)
    salvarTarefas()
}

function limpaInputut(){
    inputTarefa.value = ''
    inputTarefa.focus()
}

function criaBotaoApagar(li){
    li.innerHTML += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerHTML = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar)
}

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTarefa.value) return
        criaTarefa(inputTarefa.value)
    }
})
btnTarefa.addEventListener('click', function(e){
    if(!inputTarefa.value) return
    criaTarefa(inputTarefa.value);
})

document.addEventListener('click', function(e){
    const el = e.target
    if(el.classList.contains('apagar')){
        el.parentElement.remove()
        salvarTarefas()
    }
})

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = []

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        listaDeTarefas.push(tarefaTexto)
    }

    const tarefasJASON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJASON) 
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)

    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa)
    }
}

adicionaTarefasSalvas()