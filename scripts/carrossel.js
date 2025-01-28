let currentIndex = 0;
let interval;

document.addEventListener('DOMContentLoaded', () => {
    startAutoSlide();
})

function startAutoSlide() {
    clearInterval(interval);
    interval = setInterval(() => { 
        nextSlide();
        resetProgressBar();
    }, 5000);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide');


    if(index >= totalSlides.length) {
        currentIndex = 0;
    } else if(index < 0) {
        currentIndex = totalSlides.length - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 33.34;
    slides.style.transform = `translateX(${offset}%)`;
}

function resetProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    progressBar.style.animation = 'none';
    progressBar.offsetHeight;
    progressBar.style.animation = null;
}



