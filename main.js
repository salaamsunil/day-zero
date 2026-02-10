// ===== Day Zero Solutions - Main JS =====

document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu ---
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

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
            const payload = {
                name: data.get('name'),
                email: data.get('email'),
                interest: data.get('interest'),
                message: data.get('message'),
                _subject: 'New enquiry from day-zero.com.au',
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

    // --- Chatbot ---
    initChatbot();
});


// ===== CHATBOT =====

function initChatbot() {
    const RESPONSES = {
        nutricare: {
            text: 'NutriCare is our dietary management platform built for aged care facilities. It helps manage resident dietary profiles, IDDSI-compliant meal plans, multi-period meal ordering, and kitchen production reports. It\'s live and ready to go!',
            cta: { label: 'Request a Demo', action: 'contact' }
        },
        restrostock: {
            text: 'RestroStock is our inventory and procurement system for restaurants. It features real-time stock and expiry tracking, purchase orders with 3-way matching (PO, GRN, Invoice), supplier management, and waste analytics. It\'s live now!',
            cta: { label: 'Request a Demo', action: 'contact' }
        },
        queuezero: {
            text: 'QueueZero is our upcoming mobile ordering and queue management system for food trucks and pop-ups. It\'ll feature mobile-first ordering, live queue visibility, and order-ahead scheduling. Currently in development!',
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
                { label: 'Tell me about RestroStock', action: 'restrostock' },
                { label: 'Tell me about QueueZero', action: 'queuezero' },
                { label: 'Get in touch', action: 'contact' }
            ]
        );
    }

    // Main menu
    function showMenu() {
        addQuickReplies([
            { label: 'About NutriCare', action: 'nutricare' },
            { label: 'About RestroStock', action: 'restrostock' },
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
                { label: 'About RestroStock', action: 'restrostock' },
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
