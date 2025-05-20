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

let testimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const testimonialContainer = document.querySelector('.testimonials-carousel');

function updateTestimonialPosition() {
    const testimonialWidth = testimonials[0].clientWidth; // Calcula a largura de cada comentário
    const offset = testimonialIndex * testimonialWidth; // Determina o deslocamento correto
    testimonialContainer.style.transform = `translateX(-${offset}px)`;
}

function rotateTestimonials() {
    testimonialIndex = (testimonialIndex + 1) % testimonials.length; // Garante que o índice volte ao início após o último
    updateTestimonialPosition();
}

// Ajusta o CSS para garantir transições suaves
testimonialContainer.style.transition = "transform 0.5s ease-in-out";

// Configura o intervalo para alternar os depoimentos
setInterval(rotateTestimonials, 3000);

// Ajusta o container ao redimensionar a janela para recalcular posições
window.addEventListener('resize', updateTestimonialPosition);

const backToTopButton = document.getElementById('backToTop');

// Mostra ou esconde o botão com base no scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Exibe o botão após o scroll passar 300px
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Rola suavemente para o topo quando o botão é clicado
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
