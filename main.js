// ===== Day Zero — Main JS =====

document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu ---
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when a nav link is clicked
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // --- Header scroll effect ---
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 20);
        });
    }

    // --- Scroll-reveal animations ---
    const fadeTargets = document.querySelectorAll(
        '.product-card, .soon-card, .about-content, .contact-grid, .stat'
    );

    fadeTargets.forEach(el => el.classList.add('fade-up'));

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    fadeTargets.forEach(el => revealObserver.observe(el));

    // --- Contact form handler ---
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const data = new FormData(form);
            const name = data.get('name');

            // Replace button text with confirmation
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = `Thanks, ${name}! We'll be in touch.`;
            btn.disabled = true;
            btn.style.background = '#10B981';

            // Reset after 4 seconds
            setTimeout(() => {
                form.reset();
                btn.textContent = originalText;
                btn.disabled = false;
                btn.style.background = '';
            }, 4000);
        });
    }
});
