const bt = document.querySelector('.bt')

function returnHome(){
    scrollTo({top:0,left:0,behavior:"smooth"})
}

function showBt(){
    bt.classList.replace('hide','show')
}

function hideBt(){
    bt.classList.replace('show','hide')
}

function isVisible(){
    (window.scrollY) > 50? showBt():hideBt()
}

setInterval(()=>{
    isVisible()
    console.log(`loop`)
},100)