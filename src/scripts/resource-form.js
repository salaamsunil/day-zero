// Shared handler for the resource-page lead-magnet forms.
// Reads `data-subject` and `data-gtag` off each [data-resource-form].

function initResourceForms() {
    document.querySelectorAll('[data-resource-form]').forEach((form) => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]') || form.querySelector('button');
            const original = btn.textContent;
            btn.textContent = 'Sending...';
            btn.disabled = true;
            const data = new FormData(form);
            try {
                const res = await fetch('https://formsubmit.co/ajax/hello@day-zero.com.au', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                    body: JSON.stringify({
                        name: data.get('name'),
                        email: data.get('email'),
                        facility: data.get('facility'),
                        _subject: form.dataset.subject || 'Demo request via resource page',
                        _template: 'table',
                    }),
                });
                if (!res.ok) throw new Error('failed');
                btn.textContent = "Thanks! We'll be in touch shortly.";
                btn.style.background = '#10B981';
                form.reset();
                if (window.gtag) {
                    window.gtag('event', 'demo_request', { event_category: 'lead', event_label: form.dataset.gtag || 'resource' });
                }
            } catch {
                btn.textContent = 'Something went wrong. Email us directly.';
                btn.style.background = '#EF4444';
                setTimeout(() => {
                    btn.textContent = original;
                    btn.disabled = false;
                    btn.style.background = '';
                }, 4000);
            }
        });
    });
}

// Tab switcher for the inventory-template spreadsheet preview.
// Markup: a [data-tabs] container holding [data-tab="x"] tabs and [data-tab-panel="x"] panels.
function initSheetTabs() {
    document.querySelectorAll('[data-tabs]').forEach((group) => {
        const tabs = group.querySelectorAll('[data-tab]');
        const panels = group.querySelectorAll('[data-tab-panel]');
        tabs.forEach((tab) => {
            tab.addEventListener('click', () => {
                tabs.forEach((t) => t.classList.remove('active'));
                panels.forEach((p) => p.classList.remove('active'));
                tab.classList.add('active');
                const target = group.querySelector(`[data-tab-panel="${tab.dataset.tab}"]`);
                if (target) target.classList.add('active');
            });
        });
    });
}

// Gated download (inventory template): capture email, then reveal the link.
function initTemplateGate() {
    document.querySelectorAll('[data-template-gate]').forEach((form) => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> One sec...';
            btn.disabled = true;
            const data = new FormData(form);
            try {
                await fetch('https://formsubmit.co/ajax/hello@day-zero.com.au', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                    body: JSON.stringify({
                        email: data.get('email'),
                        _subject: form.dataset.subject || 'Resource download request',
                        _template: 'table',
                    }),
                });
            } catch {
                /* reveal the link regardless of network result */
            }
            form.style.display = 'none';
            const link = document.querySelector('[data-template-link]');
            if (link) link.style.display = 'block';
            if (window.gtag) {
                window.gtag('event', 'template_request', { event_category: 'lead', event_label: form.dataset.gtag || 'template_download' });
            }
        });
    });
}

function initResourcePages() {
    initResourceForms();
    initSheetTabs();
    initTemplateGate();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initResourcePages);
} else {
    initResourcePages();
}
