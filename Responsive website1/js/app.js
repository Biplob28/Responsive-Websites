burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
links=document.querySelector('.links')
rightdiv=document.querySelector('.right-div')

burger.addEventListener('click',()=>{
    rightdiv.classList.toggle('v-class')
    links.classList.toggle('v-class')
    navbar.classList.toggle('h-nav')
})