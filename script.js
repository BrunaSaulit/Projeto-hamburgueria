//INICIO CÓDIGO INDEX
const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click',()=>{
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})
//FIM CÓDIGO INDEX

//INICIO CÓDIGO SEÇÃO OFERTA

let list = document.querySelectorAll('.item')
let next = document.getElementById('next')
let prev = document.getElementById('prev')

let count = list.length
let active = 0

next.onclick = () => {
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')

    active = active >= count -1 ? 0 : active + 1
    list[active].classList.add('active')
}

prev.onclick = () => {
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')

    active = active <= 0 ? count -1 : active - 1
    list[active].classList.add('active')
}

console.log(count)
//FIM CÓDIGO SEÇÃO OFERTA

//INICIO CÓDIGO SEÇÃO HAMBURGUER

//FIM CÓDIGO SEÇÃO HAMBURGUER