const btn = document.querySelector('#pressMe')
const img = document.querySelector('#showMe')
const msg = document.querySelector('#msg')
let count = 0
const grow = [
    { width: "0%" },
    { width: "150px" }
]

const fadeIn = [
    { opacity: 0 },
    { opacity: 1 }
]

const fadeOut = [
    { opacity: 1 },
    { opacity: 0 }
]

const shrink = [
    { width: "150px" },
    { width: "0%" }
]

const animationConfig = {
    duration: 1800,
    iterations: 1,
    fill: 'forwards'
}

btn.addEventListener('click', function () {
    count++
    if (count % 2 != 0) {
        img.style.display = 'inline'
        msg.style.display = 'block'
        img.animate(grow, animationConfig)
        msg.animate(fadeIn, animationConfig)
    } else {
        img.animate(shrink, animationConfig)
        msg.animate(fadeOut, animationConfig)

    }
})