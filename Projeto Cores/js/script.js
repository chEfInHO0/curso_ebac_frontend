let red = document.querySelector('#r')
let green = document.querySelector('#g')
let blue = document.querySelector('#b')
let redValue;
let greenValue;
let blueValue;
function getValues(){
    redValue = red.value;
    greenValue = green.value;
    blueValue = blue.value;
    
}
function changeColor(){
    getValues()
    document.querySelector('.color').style.background = `rgb(${redValue}, ${greenValue}, ${blueValue})`
}
function changeBody(){
    getValues()
    let t = document.querySelector('body').style.background = `rgb(${redValue}, ${greenValue}, ${blueValue})`
    console.log(t)
    if (redValue <= 50 && blueValue <= 50 && greenValue <= 50 ){
        document.querySelector('body').style.color = `#fff`
        document.querySelector('.color').style.border = `1px solid #fff`
    }else if (redValue >= 200 && blueValue >= 200 && greenValue >= 200 ){
        document.querySelector('body').style.color = `#000`
        document.querySelector('.color').style.border = `1px solid #000`
    }
}