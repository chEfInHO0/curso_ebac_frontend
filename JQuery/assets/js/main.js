$(document).ready(function () {
    $('form').hide()
})

$('.add').click(function () {
    $('form').slideDown()
})

$('#cancelar').click(function () {
    $('form').slideUp()
})

$('form').on('submit', (e) => {
    e.preventDefault()
    if ($('input[type="url"]').val() == '') {
        alert('Campo URL vazio')
    } else {
        const novoItem = $('<li style="display:none;"></li>')
        const novaImagem = $(`<img src="${$('input[type="url"]').val()}" >`)
        const novaDiv = $(`
        <div class="overlay-link">
                <a href="${$('input[type="url"]').val()}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a>
        </div>
        `
        )
        novaImagem.appendTo(novoItem)
        novaDiv.appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn()
        $('input[type="url"]').val('')
    }

})
