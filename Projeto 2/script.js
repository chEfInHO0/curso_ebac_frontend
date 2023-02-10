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
    './High_Elf_Female.jpg',
    './Argonian_Male.jpg',
    './Wood_Elf_Male.jpg',
    './Breton_Male.jpg',
    './Dark_Elf_Female.jpg',
    './Imperial_Female.jpg',
    './Concept_Khajiit_Male.jpg',
    './Nord_Male_3.jpg',
    './Orc_Male.jpg',
    './Redguard_Female.jpg'

]

const img = document.querySelector(`#race-img`)
const imgDesc = document.querySelector(`#race-desc`)
const card = document.querySelector('.card')
const ArrayMaxItens = raceArray.length - 1
img.setAttribute('src', imgRaceArray[0])
imgDesc.innerHTML = raceArray[0]

function cycleImg(){
    let imgName = img.getAttribute('src')
    console.log(imgName)
    if(imgRaceArray.indexOf(String(imgName)) < 9){
        console.log(imgRaceArray.indexOf(imgName))
        let next = imgRaceArray.indexOf(imgName) + 1
        console.log(next)
        img.setAttribute('src', imgRaceArray[next])
        imgDesc.innerHTML = raceArray[next]
    }else{
        img.setAttribute('src', imgRaceArray[0])
        imgDesc.innerHTML = raceArray[0]
    }

}

setInterval(() => {
    card.classList.remove('animate')
    void card.offsetWidth;
    card.classList.add('animate')
    cycleImg()
},6000)
