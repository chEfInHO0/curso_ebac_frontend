const btn = document.querySelector('#btn-subtmit')
const form = document.querySelector('#form')


form.addEventListener('submit', (e) => {
    const nome = document.querySelector('#nome-beneficiario')
    let nameIsValid = (nome.value.split(' ').length >= 2) ? true : false
    if (nameIsValid) {
        alert(`Operação concluida com sucesso \n O valor de ${document.querySelector('#valor-deposito').value} reais foi depositado para ${nome.value} na conta ${document.querySelector('#numero-conta').value}`)
    } else {
        e.preventDefault()
        alert('O nome não está completo, por favor preencha os campos da maneira correta')
        console.log('Comportamento padrão evitado')
    }
})