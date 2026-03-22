/* ============================================================
   REUNION — app.js
   Password gate + renders everything from data.js
   ============================================================ */

const PASSWORD = '18042026';
const AUTH_KEY = 'reunion_auth_2026';

// ── Helpers ──────────────────────────────────────────────────

function initials(name) {
    return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
}

function formatDate(iso) {
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });
}

function formatEventDate(iso) {
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}

// ── Particles ─────────────────────────────────────────────────

function addParticles(containerId, count) {
    const el = document.getElementById(containerId);
    if (!el) return;
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        const size = Math.random() * 4 + 2;
        p.className = containerId === 'lockParticles' ? 'lock-particle' : 'hero-particle';
        p.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${Math.random() * 100}%;
            bottom: -10px;
            --dur: ${Math.random() * 8 + 6}s;
            --delay: ${Math.random() * 8}s;
            opacity: ${Math.random() * 0.5 + 0.1};
        `;
        el.appendChild(p);
    }
}

// ── Password Gate ─────────────────────────────────────────────

function setupLock() {
    if (localStorage.getItem(AUTH_KEY) === '1') {
        document.getElementById('lockScreen').style.display = 'none';
        showSite();
        return;
    }

    const input  = document.getElementById('lockPassword');
    const btn    = document.getElementById('lockSubmit');
    const errEl  = document.getElementById('lockError');

    function attempt() {
        const val = input.value.trim();
        if (val === PASSWORD) {
            localStorage.setItem(AUTH_KEY, '1');
            const lock = document.getElementById('lockScreen');
            lock.style.transition = 'opacity 0.6s ease';
            lock.style.opacity = '0';
            setTimeout(() => { lock.style.display = 'none'; showSite(); }, 600);
        } else {
            errEl.textContent = 'Incorrect code. Try again.';
            errEl.classList.remove('shake');
            void errEl.offsetWidth; // reflow to re-trigger animation
            errEl.classList.add('shake');
            const row = document.getElementById('lockInputRow');
            row.classList.add('shake');
            setTimeout(() => row.classList.remove('shake'), 400);
            input.value = '';
            input.focus();
        }
    }

    btn.addEventListener('click', attempt);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') attempt(); });
}

function showSite() {
    const main = document.getElementById('mainContent');
    main.classList.remove('hidden');
    void main.offsetWidth;
    main.classList.add('reveal');
    initAll();
}

// ── Main Init ─────────────────────────────────────────────────

function initAll() {
    renderAttendees();
    renderTeachers();
    renderAnnouncements();
    renderEventDetails();
    startCountdown();
    animateCounters();
    setupFilters();
    setupSearch();
    setupLightbox();
    addParticles('heroParticles', 22);
    // Map needs the container to be visible first
    setTimeout(initMap, 400);
}

// ── Attendees ─────────────────────────────────────────────────

function renderAttendees() {
    const grid = document.getElementById('attendeesGrid');
    if (!grid) return;

    const sorted = [...REUNION_DATA.attendees].sort((a, b) => {
        const order = { confirmed: 0, thinking: 1, notcoming: 2 };
        // Teachers at end within their status group? No — teachers first if confirmed
        return (order[a.status] || 0) - (order[b.status] || 0);
    });

    const confirmedCount = sorted.filter(a => a.status === 'confirmed' && !a.isTeacher).length;
    const thinkingCount  = sorted.filter(a => a.status === 'thinking'  && !a.isTeacher).length;
    const teacherCount   = sorted.filter(a => a.isTeacher).length;

    document.getElementById('tabConfirmed').textContent = confirmedCount;
    document.getElementById('tabThinking').textContent  = thinkingCount;
    document.getElementById('tabTeachers').textContent  = teacherCount;

    grid.innerHTML = '';
    sorted.forEach(person => {
        grid.appendChild(buildAttendeeCard(person));
    });
}

function buildAttendeeCard(person) {
    const card = document.createElement('div');
    card.className = 'attendee-card';
    card.dataset.status  = person.status;
    card.dataset.teacher = person.isTeacher ? 'true' : 'false';
    card.dataset.name    = person.name.toLowerCase();

    const avatarClass = person.isTeacher
        ? 'avatar avatar-teacher'
        : `avatar avatar-${person.status}`;

    const avatarInner = person.photo
        ? `<img src="${person.photo}" alt="${person.name}" loading="lazy">`
        : initials(person.name);

    const pillClass = person.isTeacher
        ? 'status-pill pill-teacher'
        : `status-pill pill-${person.status}`;

    const pillText = person.isTeacher
        ? 'Teacher'
        : person.status === 'confirmed' ? 'Coming ✓'
        : person.status === 'thinking'  ? 'Deciding...'
        : 'Can\'t Make It';

    card.innerHTML = `
        <div class="${avatarClass}">${avatarInner}</div>
        <div class="attendee-info">
            <div class="attendee-name">${person.name}</div>
            <div class="attendee-meta">
                <span class="${pillClass}">${pillText}</span>
                <span class="attendee-location">${person.flag || ''} ${person.location}</span>
            </div>
        </div>
    `;
    return card;
}

// ── Filters + Search ──────────────────────────────────────────

function setupFilters() {
    document.getElementById('filterTabs').addEventListener('click', e => {
        const btn = e.target.closest('.ftab');
        if (!btn) return;

        document.querySelectorAll('.ftab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        applyFilters();
    });
}

function setupSearch() {
    document.getElementById('attendeeSearch').addEventListener('input', applyFilters);
}

function applyFilters() {
    const activeFilter = document.querySelector('.ftab.active').dataset.filter;
    const query = document.getElementById('attendeeSearch').value.toLowerCase().trim();
    const cards = document.querySelectorAll('.attendee-card');
    let visibleCount = 0;

    cards.forEach(card => {
        const status  = card.dataset.status;
        const teacher = card.dataset.teacher === 'true';
        const name    = card.dataset.name;

        let filterMatch = true;
        if (activeFilter === 'confirmed') filterMatch = status === 'confirmed' && !teacher;
        else if (activeFilter === 'thinking') filterMatch = status === 'thinking' && !teacher;
        else if (activeFilter === 'teacher') filterMatch = teacher;

        const searchMatch = !query || name.includes(query);

        if (filterMatch && searchMatch) {
            card.classList.remove('hidden-card');
            visibleCount++;
        } else {
            card.classList.add('hidden-card');
        }
    });

    const noResults = document.getElementById('noResults');
    noResults.style.display = visibleCount === 0 ? 'block' : 'none';
}

// ── Teachers ──────────────────────────────────────────────────

function renderTeachers() {
    const grid = document.getElementById('teachersGrid');
    if (!grid) return;
    grid.innerHTML = '';
    REUNION_DATA.teachers.forEach(t => grid.appendChild(buildTeacherCard(t)));
}

function buildTeacherCard(t) {
    const card = document.createElement('div');
    card.className = 'teacher-card';

    const avatarInner = t.photo
        ? `<img src="${t.photo}" alt="${t.name}" loading="lazy">`
        : initials(t.name);

    const videoBtnHtml = t.videoUrl
        ? `<button class="teacher-video-btn" data-url="${t.videoUrl}">
               <i class="fas fa-play"></i> Watch their message
           </button>`
        : '';

    card.innerHTML = `
        <div class="teacher-avatar">${avatarInner}</div>
        <div class="teacher-body">
            <div class="teacher-name">${t.name}</div>
            <div class="teacher-subject">${t.subject}</div>
            <div class="teacher-message">${t.message}</div>
            ${videoBtnHtml}
        </div>
    `;
    return card;
}

// ── Announcements ─────────────────────────────────────────────

function renderAnnouncements() {
    const list = document.getElementById('announcementsList');
    if (!list) return;
    list.innerHTML = '';
    REUNION_DATA.announcements.forEach(a => {
        const item = document.createElement('div');
        item.className = 'announcement-item';
        item.innerHTML = `
            <div class="ann-dot"><i class="fas fa-bullhorn"></i></div>
            <div class="ann-body">
                <div class="ann-date">${formatDate(a.date)}</div>
                <div class="ann-title">${a.title}</div>
                <div class="ann-text">${a.text}</div>
            </div>
        `;
        list.appendChild(item);
    });
}

// ── Event Details ─────────────────────────────────────────────

function renderEventDetails() {
    const col = document.getElementById('eventInfoCol');
    const mapFrame = document.getElementById('venueMapFrame');
    if (!col || !mapFrame) return;

    const ev = REUNION_DATA.event;
    mapFrame.src = ev.mapsEmbed;

    const datesHtml = ev.dates.map(d => `
        <div class="event-date-chip">
            <i class="fas fa-calendar-check"></i>
            <span>${formatEventDate(d)}</span>
        </div>
    `).join('');

    const includesHtml = ev.includes.map(i => `<li>${i}</li>`).join('');

    const deadline = formatDate(ev.signupDeadline);

    col.innerHTML = `
        <div class="event-dates-badge">${datesHtml}</div>
        <div class="event-includes-title">What's included</div>
        <ul class="event-includes-list">${includesHtml}</ul>
        <div class="event-signup-block">
            <div>
                <div class="event-signup-amount">${ev.signupCurrency} ${ev.signupAmount}</div>
                <div class="event-signup-note">per person, all inclusive</div>
            </div>
            <div class="event-signup-deadline">
                <i class="fas fa-clock"></i> Sign up by ${deadline}
            </div>
        </div>
        <a href="${ev.whatsappLink}" target="_blank" rel="noopener" class="event-wa-btn">
            <i class="fab fa-whatsapp"></i> Join the WhatsApp Group
        </a>
    `;
}

// ── Countdown ─────────────────────────────────────────────────

function startCountdown() {
    // April 18, 2026 00:00 IST (UTC+5:30)
    const target = new Date('2026-04-18T00:00:00+05:30');

    function tick() {
        const now  = new Date();
        const diff = target - now;

        if (diff <= 0) {
            document.getElementById('countDays').textContent  = '00';
            document.getElementById('countHours').textContent = '00';
            document.getElementById('countMins').textContent  = '00';
            document.getElementById('countSecs').textContent  = '00';
            return;
        }

        const days  = Math.floor(diff / 86400000);
        const hours = Math.floor((diff % 86400000) / 3600000);
        const mins  = Math.floor((diff % 3600000)  / 60000);
        const secs  = Math.floor((diff % 60000)    / 1000);

        document.getElementById('countDays').textContent  = String(days).padStart(2, '0');
        document.getElementById('countHours').textContent = String(hours).padStart(2, '0');
        document.getElementById('countMins').textContent  = String(mins).padStart(2, '0');
        document.getElementById('countSecs').textContent  = String(secs).padStart(2, '0');
    }

    tick();
    setInterval(tick, 1000);
}

// ── Animated Counters ─────────────────────────────────────────

function animateCounters() {
    const d = REUNION_DATA;
    const target = new Date('2026-04-18T00:00:00+05:30');
    const daysToGo = Math.max(0, Math.floor((target - new Date()) / 86400000));

    animateCounter('statConfirmed', d.stats.confirmed);
    animateCounter('statThinking',  d.stats.thinking);
    animateCounter('statTeachers',  d.stats.teachers);
    animateCounter('statDays',      daysToGo);
}

function animateCounter(id, target) {
    const el = document.getElementById(id);
    if (!el) return;
    const duration = 1200;
    const step = 16;
    const steps = duration / step;
    let current = 0;
    const inc = target / steps;

    const timer = setInterval(() => {
        current += inc;
        if (current >= target) {
            el.textContent = target;
            clearInterval(timer);
        } else {
            el.textContent = Math.floor(current);
        }
    }, step);
}

// ── Map ───────────────────────────────────────────────────────

function initMap() {
    const mapEl = document.getElementById('reunionMap');
    if (!mapEl || typeof L === 'undefined') return;

    const venue = REUNION_DATA.travelPins.find(p => p.isVenue);
    if (!venue) return;

    const map = L.map('reunionMap', {
        center: [20, 70],
        zoom: 3,
        zoomControl: true,
        scrollWheelZoom: false,
        attributionControl: true
    });

    // Dark tile layer (CartoDB Dark Matter)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    const venuePulseIcon = L.divIcon({
        className: '',
        html: '<div class="venue-pulse-marker"></div>',
        iconSize: [20, 20],
        iconAnchor: [10, 10]
    });

    // Draw arcs and city markers
    REUNION_DATA.travelPins.forEach(pin => {
        if (pin.isVenue) return;

        // Arc line
        const arcPoints = greatCircleArc(pin.lat, pin.lng, venue.lat, venue.lng, 30);
        L.polyline(arcPoints, {
            color: 'rgba(167,139,250,0.4)',
            weight: 1.5,
            dashArray: '5, 5',
            interactive: false
        }).addTo(map);

        // City marker
        const radius = Math.max(6, Math.min(18, pin.count * 2.2));
        L.circleMarker([pin.lat, pin.lng], {
            radius,
            fillColor: '#A78BFA',
            fillOpacity: 0.75,
            color: '#fff',
            weight: 1.5
        })
        .bindPopup(`<div class="map-popup"><strong>${pin.city}</strong><span>${pin.count} ${pin.count === 1 ? 'attendee' : 'attendees'} travelling from here</span></div>`)
        .addTo(map);
    });

    // Venue marker (gold, pulsing)
    L.marker([venue.lat, venue.lng], { icon: venuePulseIcon, zIndexOffset: 1000 })
        .bindPopup(`<div class="map-popup"><strong>Hubballi</strong><span>Dennison Hotel &middot; Event Venue</span></div>`)
        .addTo(map);

    // Fit bounds to include all pins
    const allLatLngs = REUNION_DATA.travelPins.map(p => [p.lat, p.lng]);
    map.fitBounds(allLatLngs, { padding: [30, 30] });
}

// Great circle arc interpolation (slerp)
function greatCircleArc(lat1, lng1, lat2, lng2, n) {
    const toRad = d => d * Math.PI / 180;
    const toDeg = r => r * 180 / Math.PI;

    const f1 = toRad(lat1), l1 = toRad(lng1);
    const f2 = toRad(lat2), l2 = toRad(lng2);

    const df = f2 - f1, dl = l2 - l1;
    const a = Math.sin(df/2)**2 + Math.cos(f1)*Math.cos(f2)*Math.sin(dl/2)**2;
    const d = 2 * Math.asin(Math.sqrt(Math.min(1, a)));

    if (d < 0.001) return [[lat1, lng1], [lat2, lng2]];

    const points = [];
    for (let i = 0; i <= n; i++) {
        const t = i / n;
        const A = Math.sin((1-t)*d) / Math.sin(d);
        const B = Math.sin(t*d) / Math.sin(d);
        const x = A*Math.cos(f1)*Math.cos(l1) + B*Math.cos(f2)*Math.cos(l2);
        const y = A*Math.cos(f1)*Math.sin(l1) + B*Math.cos(f2)*Math.sin(l2);
        const z = A*Math.sin(f1) + B*Math.sin(f2);
        points.push([toDeg(Math.atan2(z, Math.sqrt(x*x+y*y))), toDeg(Math.atan2(y, x))]);
    }
    return points;
}

// ── Video Lightbox ────────────────────────────────────────────

function setupLightbox() {
    const box      = document.getElementById('videoLightbox');
    const frame    = document.getElementById('lightboxFrame');
    const closeBtn = document.getElementById('lightboxClose');
    const backdrop = document.getElementById('lightboxBackdrop');

    function openLightbox(url) {
        let embedUrl = url;
        if (url.includes('youtube.com/watch') || url.includes('youtu.be/')) {
            // YouTube: convert to embed
            embedUrl = url
                .replace('watch?v=', 'embed/')
                .replace('youtu.be/', 'www.youtube.com/embed/');
            embedUrl += (embedUrl.includes('?') ? '&' : '?') + 'autoplay=1';
        } else if (url.includes('drive.google.com')) {
            // Google Drive: extract file ID and use /preview embed
            const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
            if (match) {
                embedUrl = 'https://drive.google.com/file/d/' + match[1] + '/preview';
            }
        }
        frame.src = embedUrl;
        box.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        box.classList.add('hidden');
        frame.src = '';
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeLightbox);
    backdrop.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

    // Delegate from teachers grid
    document.getElementById('teachersGrid').addEventListener('click', e => {
        const btn = e.target.closest('.teacher-video-btn');
        if (btn) openLightbox(btn.dataset.url);
    });
}

// ── Boot ──────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    addParticles('lockParticles', 18);
    setupLock();
});
