let prebutton = document.getElementById('prev')
let nextbutton = document.getElementById('next')
let container = document.querySelector('.container')
let itens = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')
let list = container.querySelector('.list')

let active = 0
let firsPosition = 0
let lastPosition = itens. length - 1

function setSlider() {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicator.querySelector('.number').innerHTML = '0'+ (active + 1)
}


nextbutton.onclick = () => {
    list.style.setProperty('--calculation', 1)
    
    active = active + 1 > lastPosition ? 0 : active + 1
    setSlider()
     itens[active].classList.add('active')

    
}



prebutton.onclick = () => {
    list.style.setProperty('--calculation', -1)
   
    active = active - 1 < firsPosition ? lastPosition : active - 1
    setSlider()
    itens[active].classList.add('active')
}

