const table = document.querySelector('table')
const tableBody = table.querySelector('tbody')
const nome = document.querySelector('#nome')
const nota = document.querySelector('#nota')
const form = document.querySelector('form')
const m = document.querySelector('.media')
const res = document.querySelector('.resultado')
const restart = document.querySelector('#reset')
let minGrade
let grades = []
let activites = []


function media() {
    let media = 0
    grades.forEach(notas => {
        media += notas
    })
    m.innerHTML = +(media / grades.length).toFixed(2)

}



function processData() {
    let nomeVal = nome.value
    if (activites.indexOf(nomeVal) == -1) {
        let notaVal = nota.value
        grades.push(+notaVal)
        activites.push(nomeVal)
        let newLine = tableBody.insertRow()
        let newLineCell1 = newLine.insertCell().innerHTML = `${nomeVal}`
        let newLineCell2 = newLine.insertCell().innerHTML = `${notaVal}`
        if (notaVal >= +minGrade) {
            let newLineCell3 = newLine.insertCell().innerHTML = '<img src="./assets/img/aprovado.png" alt="Emoji Festejando">'
        } else {
            let newLineCell3 = newLine.insertCell().innerHTML = '<img src="./assets/img/reprovado.png" alt="Emoji Festejando">'
        }
    } else {
        alert('Atividade já cadastrada!')
    }
}

function setMinGrade() {
        let grade = prompt('Digite a nota mínima: ')
        if(!/[^a-zA-z]/.test(grade)){
            alert('O valor deve ser numérico')
            setMinGrade()
        }else if(+grade < 0){
            alert('O valor deve ser maior que 0')
            setMinGrade() 
        }else if(+grade > 10){
            alert('O valor deve ser menor que 10')
            setMinGrade() 
        }else{
            minGrade = grade
    }
}

function reset() {
    tableBody.innerHTML = ''
    m.innerHTML = '0'
    grades = []
    activites = []
    isApproved()
}

function isApproved() {
    +m.innerHTML >= +minGrade ? res.innerHTML = 'Aprovado' : res.innerHTML = 'Reprovado'
    changeStyle()
}

function changeStyle() {
    if (res.innerHTML == 'Aprovado') {
        res.classList.add('aprovado')
        res.classList.remove('reprovado')
    } else {
        res.classList.add('reprovado')
        res.classList.remove('aprovado')
    }
}

form.addEventListener('submit', (e) => {
    processData()
    media()
    isApproved()
    nome.value = ''
    nota.value = ''
    e.preventDefault()
})

restart.addEventListener('click', () => {
    reset()
})

setMinGrade()
isApproved()