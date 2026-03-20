// ===== Day Zero Solutions - Main JS =====

// Video placeholder loader — called from inline onclick on product cards
function loadVideo(containerId, embedUrl) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const iframe = document.createElement('iframe');
    iframe.src = embedUrl;
    iframe.width = '100%';
    iframe.height = '200';
    iframe.frameBorder = '0';
    iframe.allow = 'autoplay; encrypted-media; picture-in-picture';
    iframe.allowFullscreen = true;
    container.innerHTML = '';
    container.appendChild(iframe);
}

document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu ---
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        navMenu.querySelectorAll('.nav-link:not(.nav-has-dropdown)').forEach(link => {
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

        // Close dropdown when a resource item is tapped (also closes nav)
        resourcesDropdown.querySelectorAll('.nav-dropdown-item').forEach(item => {
            item.addEventListener('click', () => {
                resourcesDropdown.classList.remove('mob-open');
                hamburger && hamburger.classList.remove('active');
                navMenu && navMenu.classList.remove('active');
            });
        });

        // Close dropdown when tapping outside
        document.addEventListener('click', (e) => {
            if (!resourcesDropdown.contains(e.target)) {
                resourcesDropdown.classList.remove('mob-open');
            }
        });
    }

    // --- Header scroll effect + Scroll progress bar ---
    const header = document.querySelector('.header');
    const scrollProgress = document.getElementById('scrollProgress');
    window.addEventListener('scroll', () => {
        if (header) header.classList.toggle('scrolled', window.scrollY > 20);
        if (scrollProgress) {
            const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
            scrollProgress.style.width = pct + '%';
        }
    });

    // --- Typewriter effect ---
    const typewriterEl = document.getElementById('typewriter');
    if (typewriterEl) {
        const words = ['hospitality', 'aged care', 'restaurants', 'food trucks'];
        let wordIdx = 0, charIdx = 0, deleting = false;
        function typeStep() {
            const word = words[wordIdx];
            if (!deleting) {
                typewriterEl.textContent = word.slice(0, ++charIdx);
                if (charIdx === word.length) { deleting = true; setTimeout(typeStep, 1800); return; }
            } else {
                typewriterEl.textContent = word.slice(0, --charIdx);
                if (charIdx === 0) { deleting = false; wordIdx = (wordIdx + 1) % words.length; }
            }
            setTimeout(typeStep, deleting ? 60 : 90);
        }
        setTimeout(typeStep, 1000);
    }

    // --- Scroll-reveal animations ---
    const fadeTargets = document.querySelectorAll(
        '.product-card, .testimonial-card, .soon-card, .about-content, .contact-grid, .stat'
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

    // --- Staggered feature list animation ---
    document.querySelectorAll('.product-features li').forEach((li, i) => {
        li.style.transitionDelay = (i % 4 * 100) + 'ms';
    });
    const featObserver = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.querySelectorAll('li').forEach(li => li.classList.add('visible'));
                featObserver.unobserve(e.target);
            }
        });
    }, { threshold: 0.3 });
    document.querySelectorAll('.product-features').forEach(ul => featObserver.observe(ul));

    // --- Animated stat counters ---
    function animateCounter(el) {
        const target = parseInt(el.dataset.target, 10);
        const suffix = el.dataset.suffix || '';
        const duration = 1200;
        const start = performance.now();
        function step(now) {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            el.textContent = Math.round(eased * target) + suffix;
            if (t < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                animateCounter(e.target);
                statObserver.unobserve(e.target);
            }
        });
    }, { threshold: 0.5 });
    document.querySelectorAll('.stat-number[data-target]').forEach(el => statObserver.observe(el));

    // --- Contact form handler (Formsubmit.co) ---
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = 'Sending...';
            btn.disabled = true;

            const data = new FormData(form);
            const interest = data.get('interest');
            const interestLabels = {
                nutricare: 'NutriCare',
                restroai: 'RestroAI',
                queuezero: 'QueueZero',
                general: 'General'
            };
            const interestLabel = interestLabels[interest] || 'General';

            const payload = {
                name: data.get('name'),
                email: data.get('email'),
                interest: interest,
                message: data.get('message'),
                _subject: 'New enquiry about ' + interestLabel + ' from day-zero.com.au',
                _template: 'table'
            };

            try {
                const res = await fetch('https://formsubmit.co/ajax/hello@day-zero.com.au', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (res.ok) {
                    btn.textContent = 'Thanks, ' + payload.name + '! We\'ll be in touch.';
                    btn.style.background = '#10B981';
                    form.reset();
                    setTimeout(() => {
                        btn.textContent = originalText;
                        btn.disabled = false;
                        btn.style.background = '';
                    }, 4000);
                } else {
                    throw new Error('Submission failed');
                }
            } catch {
                btn.textContent = 'Something went wrong. Try again.';
                btn.style.background = '#EF4444';
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.disabled = false;
                    btn.style.background = '';
                }, 3000);
            }
        });
    }

    // --- QueueZero Waitlist Form (Formsubmit.co) ---
    const waitlistForm = document.getElementById('waitlistForm');
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = waitlistForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = 'Joining...';
            btn.disabled = true;

            const email = new FormData(waitlistForm).get('email');

            try {
                const res = await fetch('https://formsubmit.co/ajax/hello@day-zero.com.au', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                    body: JSON.stringify({
                        email: email,
                        _subject: 'QueueZero Waitlist Signup',
                        _template: 'table'
                    })
                });

                if (res.ok) {
                    btn.textContent = "You're on the list!";
                    btn.style.background = '#10B981';
                    waitlistForm.reset();
                    setTimeout(() => {
                        btn.textContent = originalText;
                        btn.disabled = false;
                        btn.style.background = '';
                    }, 4000);
                } else {
                    throw new Error('Submission failed');
                }
            } catch {
                btn.textContent = 'Something went wrong.';
                btn.style.background = '#EF4444';
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.disabled = false;
                    btn.style.background = '';
                }, 3000);
            }
        });
    }

    // --- Demo Booking Form ---
    const demoForm = document.getElementById('demoBookingForm');
    if (demoForm) {
        demoForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = demoForm.querySelector('button[type="submit"]');
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> &nbsp;Sending...';
            btn.disabled = true;

            const data = new FormData(demoForm);
            const productLabels = {
                nutricare: 'NutriCare',
                restroai: 'RestroAI',
                both: 'Both products'
            };
            const productLabel = productLabels[data.get('product')] || data.get('product');

            try {
                const res = await fetch('https://formsubmit.co/ajax/hello@day-zero.com.au', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                    body: JSON.stringify({
                        name: data.get('name'),
                        email: data.get('email'),
                        organisation: data.get('organisation'),
                        product: productLabel,
                        preferred_day: data.get('preferred_day'),
                        preferred_time: data.get('preferred_time'),
                        message: data.get('message'),
                        _subject: 'Demo booking request: ' + productLabel + ' — ' + data.get('name'),
                        _template: 'table'
                    })
                });

                if (res.ok) {
                    btn.innerHTML = '<i class="fas fa-check"></i> &nbsp;Request received — we\'ll be in touch!';
                    btn.style.background = '#10B981';
                    demoForm.reset();
                    setTimeout(() => {
                        btn.innerHTML = originalHTML;
                        btn.disabled = false;
                        btn.style.background = '';
                    }, 5000);
                } else {
                    throw new Error('Submission failed');
                }
            } catch {
                btn.innerHTML = '<i class="fas fa-exclamation-circle"></i> &nbsp;Something went wrong. Try emailing us.';
                btn.style.background = '#EF4444';
                setTimeout(() => {
                    btn.innerHTML = originalHTML;
                    btn.disabled = false;
                    btn.style.background = '';
                }, 4000);
            }
        });
    }

    // --- Chatbot ---
    initChatbot();
});


// ===== CHATBOT =====

function initChatbot() {
    const RESPONSES = {
        nutricare: {
            text: 'NutriCare is our AI-powered dietary management platform for aged care facilities. It includes real-time allergen and IDDSI texture conflict detection, NutriAssist AI for clinical Q&A, MUST malnutrition screening, weight tracking, incident logs, a Kitchen Display System, nutritional compliance reports, a family portal, and full multi-site RBAC. It\'s live at nutri-care.app.',
            cta: { label: 'Book a Demo', action: 'contact' }
        },
        restroai: {
            text: 'RestroAI is our AI-native restaurant operating system, live at restroai.app. It covers AI insights and predictive ordering, online ordering with QR menus, kitchen display, staff rostering, a clock-in kiosk, HACCP compliance, waste tracking, carbon tracking, and a full inventory and procurement module with 3-way matching.',
            cta: { label: 'Explore RestroAI', action: 'contact' }
        },
        queuezero: {
            text: 'QueueZero is our upcoming mobile ordering and queue management system built for food trucks and pop-ups. Customers order ahead, you cook ahead. Features will include mobile-first ordering, live queue visibility, and order-ahead scheduling. Currently in development.',
            cta: { label: 'Join the Waitlist', action: 'contact' }
        }
    };

    let isOpen = false;
    let contactStep = null; // null, 'name', 'email', 'message'
    let contactData = {};

    // Create DOM
    const chatbot = document.createElement('div');
    chatbot.id = 'chatbot';
    chatbot.innerHTML = `
        <div class="cb-window" id="cbWindow">
            <div class="cb-header">
                <div class="cb-header-info">
                    <div class="cb-avatar"><i class="fas fa-robot"></i></div>
                    <div>
                        <strong>Day Zero Assistant</strong>
                        <span class="cb-status">Online</span>
                    </div>
                </div>
                <button class="cb-close" id="cbClose" aria-label="Close chat"><i class="fas fa-times"></i></button>
            </div>
            <div class="cb-messages" id="cbMessages"></div>
            <div class="cb-input-area" id="cbInputArea" style="display:none;">
                <input type="text" id="cbInput" placeholder="Type here..." autocomplete="off">
                <button id="cbSend" aria-label="Send"><i class="fas fa-paper-plane"></i></button>
            </div>
        </div>
        <button class="cb-toggle" id="cbToggle" aria-label="Open chat">
            <i class="fas fa-comment-dots cb-icon-open"></i>
            <i class="fas fa-times cb-icon-close"></i>
            <span class="cb-badge">1</span>
        </button>
    `;
    document.body.appendChild(chatbot);

    const win = document.getElementById('cbWindow');
    const messages = document.getElementById('cbMessages');
    const toggle = document.getElementById('cbToggle');
    const closeBtn = document.getElementById('cbClose');
    const inputArea = document.getElementById('cbInputArea');
    const input = document.getElementById('cbInput');
    const sendBtn = document.getElementById('cbSend');

    // Toggle open/close
    function toggleChat() {
        isOpen = !isOpen;
        chatbot.classList.toggle('open', isOpen);
        if (isOpen) {
            chatbot.querySelector('.cb-badge').style.display = 'none';
            if (messages.children.length === 0) showGreeting();
            if (contactStep) input.focus();
        }
    }

    toggle.addEventListener('click', toggleChat);
    closeBtn.addEventListener('click', toggleChat);

    // Add message to chat
    function addMessage(text, sender, extraHTML) {
        const msg = document.createElement('div');
        msg.className = 'cb-msg cb-msg-' + sender;
        const bubble = document.createElement('div');
        bubble.className = 'cb-bubble';
        bubble.textContent = text;
        msg.appendChild(bubble);
        if (extraHTML) {
            const extra = document.createElement('div');
            extra.className = 'cb-extra';
            extra.innerHTML = extraHTML;
            msg.appendChild(extra);
        }
        messages.appendChild(msg);
        messages.scrollTop = messages.scrollHeight;
        return msg;
    }

    // Add quick replies
    function addQuickReplies(replies) {
        const container = document.createElement('div');
        container.className = 'cb-quick-replies';
        replies.forEach(r => {
            const btn = document.createElement('button');
            btn.className = 'cb-qr';
            btn.textContent = r.label;
            btn.addEventListener('click', () => {
                container.remove();
                addMessage(r.label, 'user');
                handleAction(r.action);
            });
            container.appendChild(btn);
        });
        messages.appendChild(container);
        messages.scrollTop = messages.scrollHeight;
    }

    // Typing indicator
    function showTyping() {
        const msg = document.createElement('div');
        msg.className = 'cb-msg cb-msg-bot cb-typing';
        msg.innerHTML = '<div class="cb-bubble"><span class="cb-dot"></span><span class="cb-dot"></span><span class="cb-dot"></span></div>';
        messages.appendChild(msg);
        messages.scrollTop = messages.scrollHeight;
        return msg;
    }

    function botReply(text, quickReplies, extraHTML) {
        const typing = showTyping();
        setTimeout(() => {
            typing.remove();
            addMessage(text, 'bot', extraHTML);
            if (quickReplies) addQuickReplies(quickReplies);
        }, 600);
    }

    // Greeting
    function showGreeting() {
        botReply(
            'Hi there! I\'m the Day Zero assistant. How can I help you today?',
            [
                { label: 'Tell me about NutriCare', action: 'nutricare' },
                { label: 'Tell me about RestroAI', action: 'restroai' },
                { label: 'Tell me about QueueZero', action: 'queuezero' },
                { label: 'Get in touch', action: 'contact' }
            ]
        );
    }

    // Main menu
    function showMenu() {
        addQuickReplies([
            { label: 'About NutriCare', action: 'nutricare' },
            { label: 'About RestroAI', action: 'restroai' },
            { label: 'About QueueZero', action: 'queuezero' },
            { label: 'Get in touch', action: 'contact' }
        ]);
    }

    // Handle actions
    function handleAction(action) {
        if (RESPONSES[action]) {
            const r = RESPONSES[action];
            botReply(r.text, [
                { label: r.cta.label, action: r.cta.action },
                { label: 'Back to menu', action: 'menu' }
            ]);
        } else if (action === 'contact') {
            startContactFlow();
        } else if (action === 'menu') {
            botReply('What else can I help with?', [
                { label: 'About NutriCare', action: 'nutricare' },
                { label: 'About RestroAI', action: 'restroai' },
                { label: 'About QueueZero', action: 'queuezero' },
                { label: 'Get in touch', action: 'contact' }
            ]);
        }
    }

    // Contact capture flow
    function startContactFlow() {
        contactData = {};
        contactStep = 'name';
        inputArea.style.display = 'flex';
        input.placeholder = 'Your name';
        botReply('I\'d love to connect you with our team! What\'s your name?');
        setTimeout(() => input.focus(), 700);
    }

    function handleContactInput(value) {
        if (!value.trim()) return;
        addMessage(value, 'user');
        input.value = '';

        if (contactStep === 'name') {
            contactData.name = value.trim();
            contactStep = 'email';
            input.placeholder = 'Your email address';
            input.type = 'email';
            botReply('Thanks, ' + contactData.name + '! What\'s your email address?');
            setTimeout(() => input.focus(), 700);
        } else if (contactStep === 'email') {
            if (!value.includes('@')) {
                botReply('That doesn\'t look like a valid email. Could you try again?');
                setTimeout(() => input.focus(), 700);
                return;
            }
            contactData.email = value.trim();
            contactStep = 'message';
            input.placeholder = 'Your message';
            input.type = 'text';
            botReply('What would you like to chat about?');
            setTimeout(() => input.focus(), 700);
        } else if (contactStep === 'message') {
            contactData.message = value.trim();
            contactStep = null;
            inputArea.style.display = 'none';
            input.type = 'text';
            submitChatContact();
        }
    }

    async function submitChatContact() {
        const typing = showTyping();
        try {
            const res = await fetch('https://formsubmit.co/ajax/hello@day-zero.com.au', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({
                    name: contactData.name,
                    email: contactData.email,
                    message: contactData.message,
                    _subject: 'Chat enquiry from ' + contactData.name,
                    _template: 'table'
                })
            });
            typing.remove();
            if (res.ok) {
                botReply(
                    'Your message has been sent! Our team will get back to you at ' + contactData.email + ' shortly.',
                    [{ label: 'Back to menu', action: 'menu' }]
                );
            } else {
                throw new Error('failed');
            }
        } catch {
            typing.remove();
            botReply(
                'Sorry, I couldn\'t send that right now. You can email us directly at hello@day-zero.com.au.',
                [{ label: 'Back to menu', action: 'menu' }]
            );
        }
    }

    // Input handlers
    sendBtn.addEventListener('click', () => handleContactInput(input.value));
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleContactInput(input.value);
    });
}
