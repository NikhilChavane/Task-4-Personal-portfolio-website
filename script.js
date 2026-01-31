

const burger = document.querySelector('.burger');
const navlinks = document.querySelector('nav ul');
const navItems = document.querySelectorAll('nav ul li a');

/* Burger menu toggle */
burger.addEventListener('click', () => {
    navlinks.classList.toggle('active');
});

/* Smooth scroll navigation */
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = item.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }

        /* Close menu on mobile after click */
        navlinks.classList.remove('active');
    });
});
