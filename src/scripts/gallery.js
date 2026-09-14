// Shared screenshot gallery: two-layer crossfade slideshow with thumbnails as
// indicators and manual controls, plus a tasteful interactive layer, a gentle
// cursor-tilt/parallax on the device and a click-to-zoom lightbox to inspect
// the UI detail. Used on the homepage and /products.

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const canTilt = window.matchMedia('(hover: hover) and (pointer: fine)').matches && !reduceMotion;
const TILT_MAX = 6; // degrees

// ---- Shared lightbox (built once, reused by every gallery) ----
let lightbox = null;
function ensureLightbox() {
    if (lightbox) return lightbox;
    lightbox = document.createElement('div');
    lightbox.className = 'shot-lightbox';
    lightbox.setAttribute('aria-hidden', 'true');
    lightbox.innerHTML = '<button class="shot-lightbox-close" aria-label="Close">&times;</button><img alt="">';
    document.body.appendChild(lightbox);
    const close = () => {
        lightbox.classList.remove('is-open');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('shot-lightbox-close')) close();
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && lightbox.classList.contains('is-open')) close(); });
    return lightbox;
}
function openLightbox(src, alt) {
    const lb = ensureLightbox();
    const img = lb.querySelector('img');
    img.src = src;
    img.alt = alt || '';
    lb.classList.add('is-open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function setupTilt(mockup) {
    if (!canTilt || !mockup) return;
    mockup.classList.add('shot-tiltable');
    let raf = null;
    mockup.addEventListener('pointermove', (e) => {
        const r = mockup.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
            mockup.style.transform =
                `perspective(1100px) rotateX(${(-py * TILT_MAX).toFixed(2)}deg) rotateY(${(px * TILT_MAX).toFixed(2)}deg) scale(1.012)`;
        });
    });
    mockup.addEventListener('pointerleave', () => {
        if (raf) cancelAnimationFrame(raf);
        mockup.style.transform = '';
    });
}

function initGalleries() {
    document.querySelectorAll('[data-gallery]').forEach((gal) => {
        const layers = Array.from(gal.querySelectorAll('.shot-layer'));
        const thumbs = Array.from(gal.querySelectorAll('.shot-thumb'));
        const stage = gal.querySelector('.shot-stage');
        const mockup = gal.querySelector('.app-mockup');
        if (layers.length < 2 || thumbs.length === 0) return;
        let idx = 0;
        let activeLayer = 0;
        let timer = null;
        const INTERVAL = 4500;

        function show(i) {
            if (i === idx) return;
            const src = thumbs[i].getAttribute('data-src');
            if (!src) return;
            const incoming = layers[1 - activeLayer];
            incoming.src = src;
            incoming.classList.add('is-active');
            layers[activeLayer].classList.remove('is-active');
            activeLayer = 1 - activeLayer;
            idx = i;
            thumbs.forEach((t) => t.classList.remove('is-active'));
            thumbs[i].classList.add('is-active');
        }
        function next() { show((idx + 1) % thumbs.length); }
        function start() { if (!reduceMotion && timer === null) timer = setInterval(next, INTERVAL); }
        function stop() { if (timer !== null) { clearInterval(timer); timer = null; } }

        thumbs.forEach((thumb, i) => {
            thumb.addEventListener('click', () => { stop(); show(i); start(); });
        });
        gal.addEventListener('mouseenter', stop);
        gal.addEventListener('mouseleave', start);

        // Click-to-zoom: open the current shot in the lightbox.
        if (stage) {
            stage.classList.add('shot-zoomable');
            stage.addEventListener('click', () => {
                const active = layers[activeLayer];
                openLightbox(active.src, active.alt);
            });
        }
        setupTilt(mockup);

        start();
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGalleries);
} else {
    initGalleries();
}
