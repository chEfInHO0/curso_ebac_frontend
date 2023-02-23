const raceArray = ['Altmer',
    'Argonian',
    'Bosmer',
    'Breton',
    'Dunmer',
    'Imperial',
    'Khajiit',
    'Nord',
    'Orsimer',
    'Redguard']

const imgRaceArray = [
    './assets/img/High_Elf_Female.jpg',
    './assets/img/Argonian_Male.jpg',
    './assets/img/Wood_Elf_Male.jpg',
    './assets/img/Breton_Male.jpg',
    './assets/img/Dark_Elf_Female.jpg',
    './assets/img/Imperial_Female.jpg',
    './assets/img/Concept_Khajiit_Male.jpg',
    './assets/img/Nord_Male_3.jpg',
    './assets/img/Orc_Male.jpg',
    './assets/img/Redguard_Female.jpg'

]

const img = document.querySelector(`#race-img`)
const imgDesc = document.querySelector(`#race-desc`)
const card = document.querySelector('.card')
const ArrayMaxItens = raceArray.length - 1
img.setAttribute('src', imgRaceArray[0])
imgDesc.innerHTML = raceArray[0]

function cycleImg(){
    let imgName = img.getAttribute('src')
    if(imgRaceArray.indexOf(String(imgName)) < 9){
        let next = imgRaceArray.indexOf(imgName) + 1
        img.setAttribute('src', imgRaceArray[next])
        imgDesc.innerHTML = raceArray[next]
    }else{
        img.setAttribute('src', imgRaceArray[0])
        imgDesc.innerHTML = raceArray[0]
    }

}

setInterval(() => {
    //card.classList.remove('animate')
    //void card.offsetWidth;
    //card.classList.add('animate')
    cycleImg()
},4000)  
