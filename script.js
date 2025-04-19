let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function moveSlide(step) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active'); // Adiciona ou remove a classe "active"
});
