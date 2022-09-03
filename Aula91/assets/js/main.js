axios('pessoas.json')
    .then(resposta => carregaElementosNaPagina(resposta.data))

function carregaElementosNaPagina(json){
    const tabela = document.createElement('table') 

    for(let pessoa of json){
        const tr = document.createElement('tr')
        
        let td = document.createElement('td')
        td.innerHTML = pessoa.nome
        tr.appendChild(td)

        let td2 = document.createElement('td')
        td2.innerHTML = pessoa.idade
        tr.appendChild(td2)

        let td3 = document.createElement('td')
        td3.innerHTML = pessoa.salario
        tr.appendChild(td3)

        tabela.appendChild(tr)
    }

    const resultado = document.querySelector('.resultado')
    resultado.appendChild(tabela)
}