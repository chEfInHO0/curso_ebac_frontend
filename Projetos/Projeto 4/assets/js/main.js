const toaster = document.querySelector('#toaster')

function raiseToast(id) {
    const toast = new bootstrap.Toast(id)
    toast.show()
}

function resetToasts() {
    setTimeout(() => {
        $(toaster).html('')
    }, 5000);
}

function setErrorMessage(msg) {
    return `
            <div class="toast" id="failed-toast">
                <div class="toast-header justify-content-between">Ocorreu um erro<span class="btn-close"
                        data-bs-dismiss="toast"></span></div>
                <div class="toast-body">
                    ${msg}
                </div>
            </div>
    `
}

function setSuccessMessage(msg) {
    return `
            <div class="toast" id="success-toast">
                <div class="toast-header justify-content-between">Obrigado por entrar em contato<span class="btn-close"
                        data-bs-dismiss="toast"></span></div>
                <div class="toast-body">
                    ${msg}
                </div>
            </div>
    `
}

function setToast(boolean, msg) {
    if (!boolean) {
        let t = setErrorMessage(msg)
        $(t).appendTo(toaster)
        raiseToast(`#failed-toast`)
        resetToasts()
    } else {
        let t = setSuccessMessage(msg)
        $(t).appendTo(toaster)
        raiseToast(`#success-toast`)
        resetToasts()
    }
}

$(document).ready(() => {
    $('#menu a').click(function () {
        if (screen.width < 1000) {
            setTimeout(() => {
                $('button.navbar-toggler').click()
            }, 700)
        }
    })
    $('#submiter').click(function () {
        $('form').submit()
        $(toaster).html('')
    })
    $('form').on('submit', function (e) {
        e.preventDefault()
        $('form').validate({
            rules: {
                nome: {
                    required: true
                },
                tel: {
                    required: false,
                    minlength: 14,
                    maxlength: 15
                },
                msg: {
                    required: false,
                }
            },
            messages: {
                nome: 'Nome inválido',
                tel: 'Telefone deve seguir o padrão (XX) 9XXXX-XXXX ou (XX) XXXX-XXXX',
                msg: `A mensagem deve conter pelo menos 30 caracteres `
            },
            submitHandler: (function (form) {
                if (($('#nome').val().trim()).split(' ').length < 2) {
                    console.log('a')
                    setToast(false, 'É necessário informar ao menos 1 sobrenome')
                } else if ($('#tel').val() != '' && ($('#tel').val()).split('').length < 10) {
                    setToast(false, 'O telefone deve ter pelo menos 10 Digitos')
                } else if ($('#msg').val() != '' && ($('#msg').val()).split('').length < 30) {
                    setToast(false, 'A mensagem deve ter ao menos 30 caracteres')
                } else {
                    setToast(true, 'Obrigado por entrar em contato, você será redirecionado em breve')
                    setTimeout(() => {
                        form.submit()
                    }, 4000);

                }
            }),
            invalidHandler: (function (e, validate) {
                e.preventDefault()
            })
        })
    })
    setInterval(() => {
        if ($('#tel').val().split('').length == 15) {
            $('#tel').mask('(00) 00000-0000')
        } else {
            $('#tel').mask('(00) 0000-00009')
        }
    }, 400)
})