let currentIndex = 0;
let interval;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide');


    if (index >= totalSlides.length) {
        console.log('entrei no primeiro')
        currentIndex = 0;
    } else if (index < 0) {
        console.log('entrei no segundo')
        currentIndex = totalSlides.length - 1;
        console.log(totalSlides.length);
    } else {
        console.log('entrei no terceiro')
        currentIndex = index;
    }

    const offset = -currentIndex * 33.34;
    slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    console.log(currentIndex)
    showSlide(currentIndex + 1);
    console.log(currentIndex)

}

function prevSlide() {
    console.log(currentIndex)
    showSlide(currentIndex - 1);
    console.log(currentIndex)
}

function resetProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    progressBar.style.animation = 'none';
    progressBar.offsetHeight;
    progressBar.style.animation = null;
}

function startAutoSlide() {
    clearInterval(interval);
    interval = setInterval(() => { 
        nextSlide();
        resetProgressBar();
    }, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
    // startAutoSlide();
})