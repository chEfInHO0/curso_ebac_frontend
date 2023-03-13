function raiseToast(btn,id){
    btn.click(function (){
        const toast = new bootstrap.Toast(id)
        toast.show()
        dropToast(id)
    })
}

function dropToast(id){
    setTimeout(() => {
        const toast = new bootstrap.Toast(id)
        toast.dispose()
    }, 2000);
}

$(document).ready(() => {
    $('form').on('submit', function (e) {
        e.preventDefault()
        $('form').validate({
            rules: {
                nome: {
                    required: true
                },
                email: {
                    required: true
                },
                fsa: {
                    required: true
                },
                desc: {
                    required: true
                }
            },
            messages: {
                nome: ``,
                email: ``,
                fsa: ``,
                desc: ``

            },
            submitHandler: (function (form) {
                console.log((($('#nome').val()).split(' ')).length < 2)
                if ((($('#nome').val()).split(' ')).length < 2) {
                    const invalidName = 'Use pelo menos 1 sobrenome'
                    $('form button').click(function () {
                        alert('SUBMIT')
                    })
                } else {
                    form.submit()
                }
            }),
            invalidHandler: (function (e, validate) {
                let errorCode = {
                    nome: '#custom-toast-1',
                    email: '#custom-toast-2',
                    fsa: '#custom-toast-3',
                    desc:'#custom-toast-4'
                }
                e.preventDefault()
                console.log(validate.numberOfInvalids())
                console.log(validate)
                console.log(validate.errorList)
                console.log(validate.currentElements)
                for (let c=0;c<validate.errorList.length;c++){
                    let field = validate.errorList[c].element.name
                    console.log(field)
                    raiseToast($('form input[type=submit]'),`${errorCode[field]}`)
                }
            })
        })
    })
})