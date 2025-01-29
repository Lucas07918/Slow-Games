const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');
const logo = document.getElementById('logo');
const navbarSearch = document.querySelector('.navbar-search');
const searchIcon = document.querySelector('.bi-search');


hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    navbar.classList.toggle('mask');
    if (navbar.classList.contains('mask')) {
        logo.src = './images/slow_games_brand_red.png'
    }
    else {
        logo.src = './images/slow_games_brand_white.png'
    }
});

searchIcon.addEventListener('click', () => {
    navbarSearch.classList.toggle('act');
});

window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
        navbar.classList.add('scrolled');
        logo.src = './images/slow_games_brand_red.png'
    } else {
        navbar.classList.remove('scrolled');
        logo.src = './images/slow_games_brand_white.png'
    }
});