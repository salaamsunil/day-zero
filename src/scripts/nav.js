// Shared nav + header behaviour (runs on every page)

function initNav() {
    // --- Mobile Menu ---
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        navMenu.querySelectorAll('.nav-link:not(.nav-has-dropdown)').forEach((link) => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // --- Resources dropdown: mobile tap toggle ---
    const resourcesDropdown = document.getElementById('navResourcesDropdown');
    if (resourcesDropdown) {
        const dropdownToggle = resourcesDropdown.querySelector('.nav-has-dropdown');
        if (dropdownToggle) {
            dropdownToggle.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    resourcesDropdown.classList.toggle('mob-open');
                }
            });
        }

        resourcesDropdown.querySelectorAll('.nav-dropdown-item').forEach((item) => {
            item.addEventListener('click', () => {
                resourcesDropdown.classList.remove('mob-open');
                if (hamburger) hamburger.classList.remove('active');
                if (navMenu) navMenu.classList.remove('active');
            });
        });

        document.addEventListener('click', (e) => {
            if (!resourcesDropdown.contains(e.target)) {
                resourcesDropdown.classList.remove('mob-open');
            }
        });
    }

    // --- Logo: scroll to the very top (the #top anchor sits on the fixed
    //     header, so a plain anchor jump does nothing). ---
    const navLogo = document.querySelector('.nav-logo');
    if (navLogo && (navLogo.getAttribute('href') || '').endsWith('#top')) {
        navLogo.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- Header scroll effect + scroll progress bar ---
    const header = document.querySelector('.header');
    const scrollProgress = document.getElementById('scrollProgress');
    window.addEventListener('scroll', () => {
        if (header) header.classList.toggle('scrolled', window.scrollY > 20);
        if (scrollProgress) {
            const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
            scrollProgress.style.width = pct + '%';
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNav);
} else {
    initNav();
}
