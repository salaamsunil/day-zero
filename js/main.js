/*// Initialize Swiper (if you're using it)
const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
    },
});*/
// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Toggle mobile menu visibility
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active'); // Toggle hamburger animation
    navLinks.classList.toggle('active'); // Toggle menu visibility
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active'); // Hide menu
        menuToggle.classList.remove('active'); // Reset hamburger icon
    });
});
