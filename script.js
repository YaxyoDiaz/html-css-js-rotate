const btn = document.querySelector('#btn')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')
const btn5 = document.querySelector('#btn5')
const btn6 = document.querySelector('#btn6')
const body = document.querySelector('body')
const box = document.querySelector('.box')


btn.onclick = () => {
    body.classList.add('red')
    body.classList.remove('blue')
}

btn2.onclick = () => {
    body.classList.add('blue')
    body.classList.remove('red')
}

btn3.onclick = () => {
    box.classList.add('open')
    box.classList.remove('close')
}

btn4.onclick = () => {
    body.classList.add('close')
    body.classList.remove('open')
}
