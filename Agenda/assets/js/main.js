const name = document.querySelector('#name')
const number = document.querySelector('#number')
const sField = document.querySelector('#searchF')
const cad = document.querySelector('#cadForm')
const tBody = document.querySelector('tbody')
const s = document.querySelector('#searchForm')
let names = []
let numbers = []


function insertRow(){
    return tBody.insertRow()
}

function createElement(x){
    return x.insertCell()
}

function processData(){
    let regex = "[^a-zA-z!@#$%^&*_+=,<.>/?\|]"
    let rExp = new RegExp(regex);
    let newName = name.value
    let newNumber = number.value
    if(names.indexOf(newName) != -1){
        alert('Contato já adicionado!')
    }else if(numbers.indexOf(newNumber) != -1){
        alert('Este número já foi cadastrado para outra pessoa!')
    }else if(!rExp.test(number.value)){
        alert('Um dos caracters asseguir foi encontrado no campo, removao para processeguir')
    }
    else{
        names.push(newName)
        numbers.push(newNumber)
        let newLine = insertRow()
        let cel1 = createElement(newLine)
        let cel2 = createElement(newLine)
        cel1.innerHTML = newName
        cel2.innerHTML = newNumber
    }
}

function queryData(){
    if(names.length == 0 || numbers.length == 0){
        alert('Nenhum cadastro foi efetuado ainda')
    }else{
        newQuery = sField.value
        if(names.indexOf(newQuery) != -1){
            alert(`Cadastro encontrado ${names[names.indexOf(newQuery)]} : ${numbers[names.indexOf(newQuery)]} `)
        }else if (numbers.indexOf(newQuery) != -1){
            alert(`Cadastro encontrado\n ${names[numbers.indexOf(newQuery)]} : ${numbers[numbers.indexOf(newQuery)]} `)
        }else{
            alert('Cadastro não encontrado')
        }
    }
}

function resetInputs(){
    name.value = ''
    number.value = ''
    sField.value = ''
}

cad.addEventListener('submit', (e) => {
    e.preventDefault()
    processData()
    resetInputs()
})

s.addEventListener('submit', (e) => {
    e.preventDefault()
    queryData()
    resetInputs()
})