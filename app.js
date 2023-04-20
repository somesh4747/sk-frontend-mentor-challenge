const toggle = document.querySelector('.menu')
const overlay = document.querySelector('.overlay')
const body = document.body 
const mobile_nav = document.querySelector('.mobile-nav')
console.log(mobile_nav)


toggle.addEventListener('click',() =>{
    // console.log(Array.from(menu.children));
    if(toggle.classList.contains('cross')){
        toggle.classList.remove('cross')
        overlay.classList.remove('opa-show')
        body.classList.remove('overflow-hidden')
        mobile_nav.classList.remove('opa-show')
    }
    else{
        toggle.classList.add('cross')
        overlay.classList.add('opa-show')
        body.classList.add('overflow-hidden')
        mobile_nav.classList.add('opa-show')
        
    }
    
})

overlay.addEventListener('click',() =>{
    toggle.classList.remove('cross')
    overlay.classList.remove('opa-show')
    body.classList.remove('overflow-hidden')
    mobile_nav.classList.remove('opa-show')
})