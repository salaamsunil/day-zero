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
    renderTeacherVideos();
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
    let confirmedSerial = 0, thinkingSerial = 0, teacherSerial = 0;
    sorted.forEach(person => {
        let serial = 0;
        if (person.isTeacher)                serial = ++teacherSerial;
        else if (person.status === 'confirmed') serial = ++confirmedSerial;
        else if (person.status === 'thinking')  serial = ++thinkingSerial;
        grid.appendChild(buildAttendeeCard(person, serial));
    });
}

function buildAttendeeCard(person, serial) {
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

    const serialHtml = serial ? `<span class="attendee-serial">#${serial}</span>` : '';

    // Profile expand panel (only for confirmed with profile data)
    const hasProfile = person.status === 'confirmed' && (person.org || person.role || person.linkedin || person.achievement || person.education);
    let profileHtml = '';
    if (hasProfile) {
        const roleLabel = { Business: 'Business Owner', Government: 'Government', 'Home Maker': 'Home Maker' }[person.role] || null;
        const jobTitle = person.jobTitle || roleLabel;
        const orgLine = person.org
            ? `<div class="ap-org"><i class="fas fa-briefcase"></i> ${jobTitle ? `<span class="ap-jobtitle">${jobTitle}</span> at ` : ''}${person.org}</div>`
            : (jobTitle ? `<div class="ap-org"><i class="fas fa-briefcase"></i> ${jobTitle}</div>` : '');
        const eduLine = person.education
            ? `<span class="ap-tag">${person.education}</span>`
            : '';
        const liLine = person.linkedin
            ? `<a href="${person.linkedin}" target="_blank" rel="noopener" class="ap-linkedin"><i class="fab fa-linkedin"></i> LinkedIn</a>`
            : '';
        const achLine = person.achievement
            ? `<div class="ap-achievement"><i class="fas fa-star"></i> ${person.achievement}</div>`
            : '';
        profileHtml = `
        <div class="attendee-profile">
            ${orgLine}
            <div class="ap-tags-row">${eduLine}${liLine}</div>
            ${achLine}
        </div>`;
        card.dataset.expandable = 'true';
    }

    card.innerHTML = `
        <div class="${avatarClass}">${avatarInner}</div>
        <div class="attendee-info">
            <div class="attendee-name-row">
                <div class="attendee-name">${person.name}</div>
                <div class="attendee-name-right">
                    ${serialHtml}
                    ${hasProfile ? '<i class="fas fa-chevron-down ap-chevron"></i>' : ''}
                </div>
            </div>
            <div class="attendee-meta">
                <span class="${pillClass}">${pillText}</span>
                <span class="attendee-location">${person.flag || ''} ${person.location}</span>
            </div>
            ${profileHtml}
        </div>
    `;

    if (hasProfile) {
        card.classList.add('expanded');
        card.addEventListener('click', () => card.classList.toggle('expanded'));
    }
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
    REUNION_DATA.teachers
        .filter(t => t.photo)
        .forEach(t => grid.appendChild(buildTeacherCard(t)));
}

function buildTeacherCard(t) {
    const card = document.createElement('div');
    card.className = 'teacher-card';

    const photoSrc = t.photo.replace(/ /g, '%20');
    const nameHtml  = t.name    ? `<div class="teacher-name">${t.name}</div>` : '';
    const subjectHtml = t.subject ? `<div class="teacher-subject">${t.subject}</div>` : '';
    const messageHtml = t.message ? `<div class="teacher-message">${t.message}</div>` : '';

    card.innerHTML = `
        <div class="teacher-photo" data-src="${photoSrc}" role="button" tabindex="0" aria-label="View photo of ${t.name || 'Teacher'}">
            <img src="${photoSrc}" alt="${t.name || 'Teacher'}" loading="lazy">
        </div>
        <div class="teacher-body">
            ${nameHtml}
            ${subjectHtml}
            ${messageHtml}
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

    // UPI payment block — only rendered when upiId or upiQrImage is set
    let upiHtml = '';
    if (ev.upiId || ev.upiQrImage) {
        const qrHtml = ev.upiQrImage
            ? `<div class="event-upi-qr"><img src="${ev.upiQrImage}" alt="UPI QR code"></div>`
            : '';
        const deepLinkHtml = ev.upiDeepLink
            ? `<a href="${ev.upiDeepLink}" class="event-upi-btn"><i class="fas fa-mobile-screen"></i> Pay via UPI app</a>`
            : '';
        const upiIdHtml = ev.upiId
            ? `<div class="event-upi-id">${ev.upiId}</div><div class="event-upi-id-label">UPI ID: copy and pay in any UPI app</div>`
            : '';
        upiHtml = `
        <div class="event-upi-block">
            <div class="event-upi-title">Pay via UPI</div>
            <div class="event-upi-inner">
                ${qrHtml}
                <div class="event-upi-details">
                    ${upiIdHtml}                    ${deepLinkHtml}
                </div>
            </div>
        </div>`;
    }

    // Google Forms sign-up CTA - only rendered when signupFormUrl is set
    const formBtnHtml = ev.signupFormUrl
        ? `<a href="${ev.signupFormUrl}" target="_blank" rel="noopener" class="event-form-btn">
               <i class="fas fa-clipboard-list"></i> Register &amp; Sign Up
           </a>`
        : '';

    // Talent / performance registration block
    let talentHtml = '';
    if (ev.talentFormUrl) {
        const talentDeadline = ev.talentDeadline ? formatDate(ev.talentDeadline) : '';
        const deadlineNote = talentDeadline ? `<div class="event-talent-deadline"><i class="fas fa-clock"></i> Entries close ${talentDeadline}</div>` : '';
        talentHtml = `
        <div class="event-talent-block">
            <div class="event-talent-icon"><i class="fas fa-microphone-lines"></i></div>
            <div class="event-talent-body">
                <div class="event-talent-title">Got a hidden talent?</div>
                <div class="event-talent-sub">Perform at the reunion. Singers, dancers, comedians, storytellers welcome.</div>
                ${deadlineNote}
                <a href="${ev.talentFormUrl}" target="_blank" rel="noopener" class="event-talent-btn">
                    <i class="fas fa-star"></i> Register to Perform
                </a>
            </div>
        </div>`;
    }

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
        ${formBtnHtml}
        ${upiHtml}
        ${talentHtml}
        <a href="${ev.whatsappLink}" class="event-wa-btn">
            <i class="fab fa-whatsapp"></i> Check WhatsApp for Updates
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
    const vid      = document.getElementById('lightboxVideo');
    const img      = document.getElementById('lightboxImage');
    const closeBtn = document.getElementById('lightboxClose');
    const backdrop = document.getElementById('lightboxBackdrop');

    function resetMedia() {
        frame.style.display = 'none'; frame.src = '';
        vid.style.display   = 'none'; vid.pause(); vid.src = '';
        img.style.display   = 'none'; img.src = '';
    }

    window.openLightbox = function(url, type) {
        resetMedia();
        if (type === 'image') {
            img.src = url;
            img.style.display = 'block';
            box.classList.add('lightbox-image-mode');
        } else if (url.includes('.mp4') || url.includes('cloudinary.com/video')) {
            vid.src = url;
            vid.style.display = 'block';
            vid.play();
            box.classList.remove('lightbox-image-mode');
        } else {
            let embedUrl = url;
            if (url.includes('youtube.com/watch') || url.includes('youtu.be/')) {
                embedUrl = url
                    .replace('watch?v=', 'embed/')
                    .replace('youtu.be/', 'www.youtube.com/embed/');
                embedUrl += (embedUrl.includes('?') ? '&' : '?') + 'autoplay=1';
            } else if (url.includes('drive.google.com')) {
                const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
                if (match) embedUrl = 'https://drive.google.com/file/d/' + match[1] + '/preview';
            }
            frame.src = embedUrl;
            frame.style.display = 'block';
            box.classList.remove('lightbox-image-mode');
        }
        box.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };

    function closeLightbox() {
        box.classList.add('hidden');
        box.classList.remove('lightbox-image-mode');
        resetMedia();
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeLightbox);
    backdrop.addEventListener('click', closeLightbox);
    // Also close when clicking the outer overlay directly (catches video mode)
    box.addEventListener('click', e => { if (!e.target.closest('.lightbox-box')) closeLightbox(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

    // Delegate: video play buttons
    document.addEventListener('click', e => {
        const btn = e.target.closest('.teacher-video-btn');
        if (btn) openLightbox(btn.dataset.url);
    });

    // Delegate: teacher photo expand
    document.addEventListener('click', e => {
        const photo = e.target.closest('.teacher-photo[data-src]');
        if (photo) openLightbox(photo.dataset.src, 'image');
    });
}

// ── Teacher Videos ─────────────────────────────────────────────

function cloudinaryThumb(videoUrl) {
    // Generate a thumbnail image URL from a Cloudinary video URL
    return videoUrl
        .replace('/video/upload/q_auto/f_auto/', '/video/upload/so_0,w_600/')
        .replace('.mp4', '.jpg');
}

function renderTeacherVideos() {
    const section = document.getElementById('teacherVideosSection');
    const grid    = document.getElementById('teacherVideosGrid');
    if (!section || !grid) return;

    const videos = REUNION_DATA.teachers.filter(t => t.videoUrl);
    if (!videos.length) return;

    grid.innerHTML = '';
    videos.forEach(t => {
        const thumb = cloudinaryThumb(t.videoUrl);
        const label = t.name || 'Teacher';
        const card  = document.createElement('div');
        card.className = 'tvc-card';
        card.innerHTML = `
            <div class="tvc-thumb">
                <img src="${thumb}" alt="${label}" loading="lazy">
                <button class="tvc-play teacher-video-btn" data-url="${t.videoUrl}" aria-label="Play video from ${label}">
                    <i class="fas fa-play"></i>
                </button>
            </div>
            <div class="tvc-label">${label}</div>
        `;
        grid.appendChild(card);
    });

    section.style.display = '';
}

// ── Boot ──────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    addParticles('lockParticles', 18);
    setupLock();
});
