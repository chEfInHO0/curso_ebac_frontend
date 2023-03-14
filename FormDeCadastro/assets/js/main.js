$(document).ready(() => {
    const zip = $('#zip')
    let valid
    $('#telefone').mask('(00) 00000-0000', { placeholder: 'Digite seu Celular' })
    $('#cpf').mask('000.000.000-00', { placeholder: 'Digite seu CPF' })
    $('#zip').mask('00000-000', { placeholder: 'Digite seu CEP' })

    function isFullName() {
        let name = ($('#nome').val()).split(' ')
        return (name.length >= 2)
    }


    async function readData(data) {
        if (data.erro) {
            return false
        } else {
            return true
        }
    }

    async function isCepValid() {
        let zipCode = zip.val()
        zipCode = zipCode.replace('-', '')
        console.log(zipCode)
        let url = `https://viacep.com.br/ws/${zipCode}/json/`
        await fetch(url).then(async function (res) {
            await res.json().then(async function (data) {
                console.log(data)
                valid = await readData(data)
            }).catch(err => {
                return err
            })
        }
        )
    }

    function isCPFValid() {
        let cpf = (($('#cpf').val()))
        cpf = cpf.replace('.','')
        cpf = cpf.replace('.','')
        cpf = cpf.replace('-','')
        console.log(cpf)
        cpf = cpf.split('')
        const nums = [10, 9, 8, 7, 6, 5, 4, 3, 2]
        let total = 0
        nums.map(n => {
            total += n * cpf[nums.indexOf(n)]
        })
        let primeiroDigito = (total % 11 < 2) ? 0 : (11 - total % 11)
        nums.unshift(11)
        let soma = 0
        nums.map(n => {
            soma += n * cpf[nums.indexOf(n)]
        })
        let segundoDigito = (soma % 11 < 2) ? 0 : (11 - soma % 11)
        console.log(cpf[cpf.length - 1])
        console.log(cpf[cpf.length - 2])
        console.log(primeiroDigito)
        console.log(segundoDigito)
        if (+cpf[cpf.length - 1] == segundoDigito) {
            if (+cpf[cpf.length - 2] == primeiroDigito) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }

    $('form').on('submit', async (e) => {
        e.preventDefault()
        $('form').validate({
            rules: {
                nome: {
                    required: true
                },
                email: {
                    required: true
                },
                telefone: {
                    required: true
                },
                cpf: {
                    required: true
                },
                endereco: {
                    required: true
                },
                num:{
                    required:true
                },
                cep: {
                    required: true
                }
            },
            messages: {
                nome: 'Por favor, insira seu Nome Completo',
                email: 'Por favor, insira seu E-mail',
                telefone: 'Por favor, insira seu Celular',
                cpf: 'Insira seu CPF',
                endereco: 'Insira seu Endereço',
                num: 'Insira o numero da casa',
                cep: 'Insira seu CEP'
            },
            submitHandler: (async function (form) {
                await isCepValid()
                if (isFullName()) {
                    if (valid) {
                        if (isCPFValid()) {
                            alert('Cadastro concluido com Sucesso')
                            form.submit()
                        } else {
                            alert('CPF INVALIDO')
                            console.log(isCPFValid())
                        }
                    } else {
                        console.log(valid)
                        alert('CEP INVALIDO')
                    }
                } else {
                    alert('Inserir pelo menos um sobrenome')
                }

            }),
            invalidHandler: (function (e, validate) {
                e.preventDefault()
                console.log(validate.numberOfInvalids())
            })
        })
    })
})