document.addEventListener("DOMContentLoaded",()=>{
    const menuToggle = document.querySelector('.toggle');
    const showcase = document.querySelector('.showcase');


let logo = document.querySelectorAll('.logo');
let text =document.querySelectorAll('.texts');
let cv= document.querySelectorAll('.cv');
anime({
        
        targets: logo,
        translateY: [-50,0],
        delay: (el,i) => 300+70*i,
        easing: 'easeOutExpo',
        opacity:[0,1],
        delay:1500,
        
    })
    anime({
        
        targets: text,
        translateY: [-50,0],
        delay: (el,i) => 300+70*i,
        easing: 'easeOutExpo',
        opacity:[0,1],
        
        
    })
    anime({
        
        targets: cv,
        translateY: [-50,0],
        delay: (el,i) => 300+70*i,
        easing: 'easeOutExpo',
        opacity:[0,1],
        delay: 1500,
        
    })
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        showcase.classList.toggle('active');
    
    let link1  = document.querySelector('.link1');
    link1.addEventListener('mouseover',()=>{
        let home = document.querySelectorAll('.home');
        anime.remove(home);
        anime.timeline({
        targets: home,
    })
    .add({
        translateX: [0, -30],
        opacity: [1, 0],
        easing: 'easeInExpo',
        duration: 500,
        delay: (el, i) => 30 * i,
    })
    .add({
        translateX: [40, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1100,
        delay: (el, i) => 30 * i,
    })


    })
    let link2  = document.querySelector('.link2');
    link2.addEventListener('mouseover',()=>{
        let about = document.querySelectorAll('.about');
        anime.remove(about);
        anime.timeline({
        targets: about,
    })
    .add({
        translateX: [0, -30],
        opacity: [1, 0],
        easing: 'easeInExpo',
        duration: 500,
        delay: (el, i) => 30 * i,
    })
    .add({
        translateX: [40, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1100,
        delay: (el, i) => 30 * i,
    })


    })
    let link3=document.querySelector('.link3');
    link3.addEventListener('mouseover',()=>{
        let contact = document.querySelectorAll('.contact');
        anime.remove(contact);
        anime.timeline({
        targets: contact,
    })
    .add({
        translateX: [0, -30],
        opacity: [1, 0],
        easing: 'easeInExpo',
        duration: 500,
        delay: (el, i) => 30 * i,
    })
    .add({
        translateX: [40, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1100,
        delay: (el, i) => 30 * i,
    })


    })
})
})