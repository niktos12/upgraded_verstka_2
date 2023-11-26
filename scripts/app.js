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
const swiperBtns = new Swiper('.swiperBtns', {
    loop:true,
    slidesPerView: 5,
    mousewheel: true,
    spaceBetween:12,
    slidesPerGroup: 1,
    width:650,
    grabCursor:true,
    speed:1000,
    freeMode: true,
    slidesCentered: true,
    breakpoints:{
        841:{
        slidesPerView: 6,
        width:10,
        freeMode:false,
        loop:false,

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