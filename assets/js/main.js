
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}


const navLinks = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');

    const header = document.getElementById('header');
    window.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
};

navLinks.forEach((n) => n.addEventListener('click', linkAction));


const scrollHeader = () => {
    const header = document.getElementById('header');
    window.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
};

window.addEventListener('scroll', scrollHeader);

gsap.from('.home__img-2', 1.2, { opacity: 0, y: 200, delay: 0.1 });
gsap.from('.home__img-3', 1.2, { opacity: 0, y: 200, delay: 0.5 });
gsap.from('.home__data', 1.2, { opacity: 0, y: -60, delay: 0.1 });
gsap.from('.home__bird-1', 1.2, { opacity: 0, x: -80, delay: 1.1 });
gsap.from('.home__bird-2', 1.2, { opacity: 0, x: 80, delay: 1.2 });
gsap.from('.home__img-1', 1.2, { opacity: 0, y: 200, delay: 1.2 });
gsap.from('.home__img-4', 1.2, { opacity: 0, x: 200, delay: 1.3 });
