// Shared screenshot gallery: two-layer crossfade slideshow with thumbnails
// as indicators and manual controls. Used on the homepage and /products.

function initGalleries() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.querySelectorAll('[data-gallery]').forEach((gal) => {
        const layers = Array.from(gal.querySelectorAll('.shot-layer'));
        const thumbs = Array.from(gal.querySelectorAll('.shot-thumb'));
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
        start();
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGalleries);
} else {
    initGalleries();
}
