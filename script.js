let btn = document.querySelector('#btn2')
btn.addEventListener('click', visibility)

function visibility(){
    document.querySelector('nav').classList.toggle('visibility')
}

let btn2 = document.querySelector('#btn2')
btn2.addEventListener('click', rotate)

function rotate(){
    document.querySelector('#btn2').classList.toggle('rotate')
}

let btn3 = document.querySelector('#btn2')
btn3.addEventListener('click', move)
function move(){
    document.querySelector("nav").classList.toggle('animate')
}

// document.querySelector('#btn').addEventListener('click', (e) =>{
//     e.preventDefault()
// })

// document.querySelector('a').addEventListener('click', (e) =>{
//     e.preventDefault()
// })


let op = document.querySelector(".ai")

op.addEventListener('click', ()=>{
    document.querySelector('.ao').classList.toggle('ab')
    document.querySelector('body').classList.toggle('dark-mode')
    document.querySelector('.b').classList.toggle('invert')
    document.querySelector('header a').classList.toggle('color')
    document.querySelector('nav #a1').classList.toggle('color')
    document.querySelector('nav #a2').classList.toggle('color')
    document.querySelector('nav #a3').classList.toggle('color')
    document.querySelector('nav #a4').classList.toggle('color')
    document.querySelector('form').classList.toggle('color2')
    document.querySelector('form h3').classList.toggle('color3')
    document.querySelector('form .input1').classList.toggle('color3')
    document.querySelector('form .input2').classList.toggle('color3')
    
})

let mode = document.querySelector('.ai')
mode.addEventListener('click', (e) =>{
    e.preventDefault()
})

// let mode2 = document.querySelector('#btn')
// mode2.addEventListener('click', (e) =>{
//     e.preventDefault()
// })