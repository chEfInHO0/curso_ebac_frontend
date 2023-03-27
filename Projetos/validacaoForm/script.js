const inputA = document.querySelector('#fieldA')
const inputB = document.querySelector('#fieldB')
const statusArea = document.querySelector('#status-message')
const submit = document.querySelector('input[type="submit"]')

function isFieldAFill() {
    return inputA.value.length != 0 ? true : false
}

function isFieldBFill() {
    return inputB.value.length != 0 ? true : false
}

function isNumAHigherThanB() {
    let numA = +inputA.value
    let numB = +inputB.value
    console.log(numA, numB)
        return numB > numA ? true : false
}


inputA.addEventListener('input', (e) => {
    if (isFieldAFill() && isFieldBFill()) {
        statusArea.style.display = 'none'
        statusArea.classList.remove('alert')
    } else {
        statusArea.innerHTML = 'Preencha todos os campos'
        statusArea.style.display = 'block'
        statusArea.classList.add('alert')
    }
})

inputB.addEventListener('input', (e) => {
    if (isFieldAFill() && isFieldBFill()) {
        statusArea.style.display = 'none'
        statusArea.classList.remove('alert')
    } else {
        statusArea.innerHTML = 'Preencha todos os campos'
        statusArea.style.display = 'block'
        statusArea.classList.add('alert')
    }
})

submit.addEventListener('click', (e) => {

    if (isFieldAFill() && isFieldBFill()) {
        if (isNumAHigherThanB()) {
            statusArea.innerHTML = 'Validacao feita com sucesso'
            statusArea.style.display = 'block'
            inputA.style.border = "1px solid #000"
            statusArea.classList.remove('alert')
            statusArea.classList.remove('error')
            statusArea.classList.add('success')
        } else {
            statusArea.innerHTML = 'O Valor do Campo B deve ser maior que o do A'
            inputA.style.border = "3px solid red"
            statusArea.style.display = 'block'
            statusArea.classList.remove('alert')
            statusArea.classList.remove('success')
            statusArea.classList.add('error')
        }
    } else {
        statusArea.innerHTML = 'Preencha todos os campos'
        statusArea.style.display = 'block'
        statusArea.classList.add('alert')
    }
    e.preventDefault()
})