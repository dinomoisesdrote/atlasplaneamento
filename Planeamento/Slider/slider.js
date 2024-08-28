

const images = document.querySelectorAll('#slider img');
let currentSlide = 0;

function showSlide() {
    images.forEach(img => img.style.display = 'none');
    images[currentSlide].style.display = 'block';
    currentSlide = (currentSlide + 1) % images.length;
    setTimeout(showSlide, 3000); // Altere o tempo de transição aqui (em milissegundos)
}

showSlide();