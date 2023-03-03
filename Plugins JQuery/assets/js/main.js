$(document).ready(() => {
    console.log('JQuery Ready')
    $('#carrosel-imagens').slick({
        autoplay: true
    })
    $('.menu-hamburger').on('click', () => {
        $('.menu').slideToggle()
    })
    $('#campo-telefone').mask('(00) 00000-0000')
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            carro: {
                required: false
            },
            mensagem: {
                required: true
            }
        }, messages: {
            nome: 'Por favor, preencha o campo com seu nome'
            ,
            email: 'Por favor, preencha o campo com seu e-mail'
            ,
            telefone: 'Por favor, preencha o campo com seu telefone'
            ,
            mensagem: 'Por favor informe o motivo do seu contato'
        },
        submitHandler: form => { console.log(form) },
        invalidHandler: (event, validation) => {
            let invalidFields = validation.numberOfInvalids()
            if (invalidFields) {
                alert(`Existem ${invalidFields} campos incorretos`)
            }
        }
    })
    $('.lista-veiculos button').on('click', ($this) => {
        const destino = document.querySelector('#contact')
        destino.scrollIntoView({ behavior: 'smooth' })
        let selectedCar = $($this.target).parent().find('h3').text()
        $('#contact #modelo').val(selectedCar)
    })
})