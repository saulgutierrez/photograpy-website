/* Configuracion Swiper.js */
const swiper = new Swiper('.swiper', {
    direction: "horizontal",
    spaceBetween: 0,
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});

/* Activar sticky menu */
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('active', window.scrollY > 0);
});

/* Funcion para activar el menu responsive */
function toggleMenu() {
    var menuToggle = document.querySelector('.menuToggle');
    var menu1 = document.querySelector('.menu1');
    var menu2 = document.querySelector('.menu2');
    menuToggle.classList.toggle('active');
    menu1.classList.toggle('active');
    menu2.classList.toggle('active');
}