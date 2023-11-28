const swiper = new Swiper('.swiper', {
    loop:true,
    slidesPerView: 3,
    mousewheel: true,
    spaceBetween:24,
    slidesPerGroup: 1,
    width:1000,
    grabCursor:true,
    speed:1000,
    freeMode: true,
    navigation:{
        nextEl:'.swiper-navigation-next',
        prevEl:'.swiper-navigation-prev',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints:{
        1300:{
            speed:800,
        },
    }
})


const buttons = document.querySelectorAll('.advantage-btn');
const image = document.getElementById('image');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        buttons.forEach(function(btn) {
            btn.classList.remove('active');
        });
        this.classList.add('active');
        image.style.opacity = '0';
        setTimeout(function(){
            image.src = this.getAttribute('data-image');
            image.style.opacity = 1;
        }.bind(this),300)
        
    });
});
const header = document.getElementById('sticky-header');
const menu = document.getElementById('burger')
const iconMenu = document.getElementById('menu-icon')
const menuNav = document.getElementsByClassName('menu-a');
window.onscroll = function(){
    
    if(window.pageYOffset > 0){
        header.style.backgroundColor = '#0F172A';
        menu.style.backgroundColor = '#0F172A';
        for(let i = 0; i < menuNav.length; i++){
            menuNav[i].style.color = '#fff';
        }
        
    }else{
        header.style.backgroundColor = 'transparent';
        menu.style.backgroundColor = 'transparent';
        for(let i = 0; i < menuNav.length; i++){
            menuNav[i].style.color = '#0F172A';
        }
    }
}

iconMenu.addEventListener('click', function(){
    menu.classList.toggle('active');
})
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
