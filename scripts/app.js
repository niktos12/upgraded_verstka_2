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
window.onscroll = function(){
    const header = document.getElementById('sticky-header');
    if(window.pageYOffset > 0){
        header.style.backgroundColor = '#0F172A';
    }else{
        header.style.backgroundColor = 'transparent';
    }
}
