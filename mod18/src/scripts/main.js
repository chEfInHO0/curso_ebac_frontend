const maxArea = document.querySelector('.max-numb')
        const accept = [8, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57]
        const s = document.querySelector('#sort-num')
        const f = document.querySelector('form')
        s.addEventListener('change',function () {
            if (+s.value > 999999){
                s.value = 999999
            }
        })
        function selectRandomNumb(max) {
            let x = Math.round((Math.random() * max))
            if (x == 0) {
                x++
            }
            return x
        }

        function setRandNumb() {
            maxArea.innerHTML = ''
            let num = s.value;
            num = num.split('');
            let c = 1;
            while (num[0] == '0') {
                num.shift()
            }
            num = num.join('')
            let numSorteado = String(selectRandomNumb(+num)).split('')
            numSorteado.forEach(n => {
                maxArea.innerHTML += `<div class="box" id="num${c}">${+n}</div>`;
                c++;
            });
        }

        f.addEventListener('submit', function (e) {
            if (s.value == '' || s.value == '0') {
                e.preventDefault();
                alert('Valor nao pode ser deixado vazio');
            } else {
                e.preventDefault();
                const randomize = setInterval(()=> {setRandNumb()},100)
                setTimeout(()=>{clearInterval(randomize)},3000)


            }
        })