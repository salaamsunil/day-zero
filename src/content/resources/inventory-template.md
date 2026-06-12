---
title: "Free Restaurant Inventory Template (Google Sheets) | Day Zero Solutions"
description: "Free restaurant inventory spreadsheet template. Covers stock tracking, par levels, purchase orders, and supplier contacts. Download free Google Sheet."
ogTitle: "Free Restaurant Inventory Template for Google Sheets"
ogDescription: "Free inventory spreadsheet covering stock tracking, par levels, purchase orders, and supplier contacts. Built for independent Australian restaurants."
product: "RestroAI"
badge: "Free Resource"
badgeIcon: "fa-table"
heroTitle: "Free Restaurant Inventory<br>Spreadsheet Template"
heroSubtitle: "A ready-to-use Google Sheets template covering stock tracking, par levels, purchase orders, and supplier contacts. Built for independent Australian restaurants."
lead:
  heading: "Get the RestroAI Demo"
  sub: "See how RestroAI does all of this automatically, in real time, with no spreadsheets."
  subject: "RestroAI Demo Request via Inventory Template page"
  gtagLabel: "inventory_template"
sidebar:
  ctaTitle: "Ready to upgrade?"
  ctaText: "RestroAI does everything in this template automatically and goes further: recipe costing, AI ordering, HACCP logs, and real-time access on any device."
  features:
    - "Real-time stock and expiry tracking"
    - "Purchase orders and 3-way matching"
    - "Recipe costing and menu margin analysis"
    - "AI-powered predictive ordering"
    - "HACCP compliance and temperature logs"
    - "14-day free trial"
  demoLabel: "Request a Free Demo"
  demoHref: "/#contact"
  siteHref: "/#products"
  siteLabel: "Learn More"
  siteExternal: false
  tip: "<strong>Most restaurants</strong> outgrow a spreadsheet between 8 and 15 staff or when managing 2 or more suppliers becomes painful. RestroAI is built for that moment."
  showPrint: false
  related:
    - title: "Also free: HACCP Checklist"
      text: "Keep the kitchen audit-ready. Our HACCP compliance checklist covers temperature logs, cleaning schedules, and corrective actions."
      links:
        - href: "/resources/restaurant-haccp-checklist"
          label: "Get the Checklist"
---

<div class="content-section" style="background: linear-gradient(135deg, #F0FDF4, #E8F5E9); border: 1px solid rgba(16,185,129,0.2)">
<h2><i class="fas fa-download"></i> Get the Template</h2>
<p class="section-intro">Enter your email and get instant access. Free, no strings attached.</p>
<form data-template-gate data-subject="Inventory Template Request - Day Zero" data-gtag="inventory_template_download" style="display:flex;gap:0.75rem;max-width:440px;flex-wrap:wrap;margin-top:0.5rem">
<input type="email" name="email" placeholder="Your email address" required style="flex:1;min-width:200px;padding:0.85rem 1rem;border:1.5px solid #C6F6D5;border-radius:10px;font-size:0.9rem;font-family:inherit;outline:none;background:white">
<button type="submit" class="download-btn" style="width:auto;padding:0.85rem 1.25rem;font-size:0.9rem;gap:0.5rem;margin-top:0;flex-shrink:0"><i class="fas fa-paper-plane"></i> Get Instant Access</button>
</form>
<div data-template-link style="display:none;margin-top:1.25rem;padding:1.25rem 1.5rem;background:white;border-radius:12px;border:1.5px solid #10B981">
<p style="margin:0 0 0.75rem;font-weight:700;color:#065F46;font-size:1rem"><i class="fas fa-check-circle" style="color:#10B981"></i> Here's your template link</p>
<a href="https://docs.google.com/spreadsheets/d/1rHv0uQYHzfi7SVzbgR9mfomUJ0e7pI2bKoiC4tZJDmw/copy" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:0.5rem;background:#10B981;color:white;padding:0.75rem 1.25rem;border-radius:9px;font-weight:600;font-size:0.95rem;text-decoration:none"><i class="fas fa-table"></i> Open in Google Sheets</a>
<p style="margin:0.75rem 0 0;font-size:0.82rem;color:#555">Click to make your own copy. No sign-in required.</p>
</div>
<p style="font-size:0.82rem;color:#555;margin-top:0.75rem"><i class="fas fa-lock" style="color:#10B981"></i> No spam. Your email is only used to send you this link.</p>
</div>

<div class="content-section">
<h2><i class="fas fa-table-cells"></i> What's Inside the Template</h2>
<p class="section-intro">Five tabs covering the full inventory cycle for a small to medium restaurant.</p>
<div class="sheet-preview" data-tabs>
<div class="sheet-tab-bar">
<div class="sheet-tab active" data-tab="stock">📦 Stock</div>
<div class="sheet-tab" data-tab="orders">🛒 Orders</div>
<div class="sheet-tab" data-tab="suppliers">🤝 Suppliers</div>
<div class="sheet-tab" data-tab="waste">🗑️ Waste</div>
<div class="sheet-tab" data-tab="dashboard">📊 Dashboard</div>
</div>
<div class="tab-section active" data-tab-panel="stock">
<table class="sheet-table">
<thead>
<tr><th>Item</th><th>Category</th><th>Unit</th><th>Current Stock</th><th>Par Level</th><th>Status</th><th>Supplier</th><th>Unit Cost</th><th>Total Value</th></tr>
</thead>
<tbody>
<tr><td>Beef Tenderloin</td><td>Meat</td><td>kg</td><td>2.4</td><td>5</td><td class="col-warn">⚠ LOW</td><td>Vic Meats</td><td>$45.00</td><td class="col-formula">$108.00</td></tr>
<tr><td>Roma Tomatoes</td><td>Produce</td><td>kg</td><td>8.0</td><td>6</td><td class="col-ok">✓ OK</td><td>Fresh Direct</td><td>$3.50</td><td class="col-formula">$28.00</td></tr>
<tr><td>Olive Oil EV</td><td>Dry Goods</td><td>L</td><td>0.5</td><td>3</td><td class="col-warn">⚠ LOW</td><td>Costco</td><td>$12.00</td><td class="col-formula">$6.00</td></tr>
<tr><td>Pasta (dry)</td><td>Dry Goods</td><td>kg</td><td>12</td><td>8</td><td class="col-ok">✓ OK</td><td>Costco</td><td>$2.80</td><td class="col-formula">$33.60</td></tr>
</tbody>
</table>
</div>
<div class="tab-section" data-tab-panel="orders">
<table class="sheet-table">
<thead>
<tr><th>PO #</th><th>Date</th><th>Supplier</th><th>Item</th><th>Qty</th><th>Unit</th><th>Unit Price</th><th>Total</th><th>Status</th><th>Invoice #</th></tr>
</thead>
<tbody>
<tr><td>PO-0042</td><td>24/02/2026</td><td>Vic Meats</td><td>Beef Tenderloin</td><td>10</td><td>kg</td><td>$45.00</td><td>$450.00</td><td class="col-ok">Received</td><td>INV-8821</td></tr>
<tr><td>PO-0043</td><td>25/02/2026</td><td>Fresh Direct</td><td>Tomatoes</td><td>15</td><td>kg</td><td>$3.50</td><td>$52.50</td><td class="col-warn">Pending</td><td>n/a</td></tr>
</tbody>
</table>
</div>
<div class="tab-section" data-tab-panel="suppliers">
<table class="sheet-table">
<thead>
<tr><th>Supplier</th><th>Contact</th><th>Phone</th><th>Email</th><th>Categories</th><th>Payment Terms</th><th>Notes</th></tr>
</thead>
<tbody>
<tr><td>Vic Meats</td><td>Tony</td><td>03 9xxx xxxx</td><td>tony@vicmeats.com.au</td><td>Meat, Poultry</td><td>Net 14</td><td>Order by Wed for Fri delivery</td></tr>
<tr><td>Fresh Direct</td><td>Maria</td><td>1300 xxx xxx</td><td>orders@freshdirect.com.au</td><td>Produce</td><td>Net 7</td><td>Same-day delivery if before 7am</td></tr>
</tbody>
</table>
</div>
<div class="tab-section" data-tab-panel="waste">
<table class="sheet-table">
<thead>
<tr><th>Date</th><th>Item</th><th>Reason</th><th>Qty</th><th>Unit</th><th>Unit Cost</th><th>Waste Value</th><th>Logged by</th></tr>
</thead>
<tbody>
<tr><td>24/02/2026</td><td>Salmon Fillet</td><td>Expired</td><td>1.2</td><td>kg</td><td>$28.00</td><td class="col-warn">$33.60</td><td>Head Chef</td></tr>
<tr><td>24/02/2026</td><td>Mixed Salad</td><td>Over-prep</td><td>0.5</td><td>kg</td><td>$6.00</td><td>$3.00</td><td>Kitchen Hand</td></tr>
</tbody>
</table>
</div>
<div class="tab-section" data-tab-panel="dashboard">
<table class="sheet-table">
<thead>
<tr><th>Metric</th><th>This Week</th><th>Last Week</th><th>Change</th></tr>
</thead>
<tbody>
<tr><td>Total Stock Value</td><td class="col-formula">$4,280</td><td>$3,960</td><td style="color:#059669">▲ 8.1%</td></tr>
<tr><td>Items Below Par</td><td class="col-warn">6</td><td>3</td><td style="color:#DC2626">▲ 3</td></tr>
<tr><td>Waste This Week</td><td>$142</td><td>$89</td><td style="color:#DC2626">▲ $53</td></tr>
<tr><td>Open Purchase Orders</td><td>3</td><td>5</td><td style="color:#059669">▼ 2</td></tr>
</tbody>
</table>
</div>
</div>
</div>

<div class="content-section">
<h2><i class="fas fa-star"></i> What the Template Includes</h2>
<div class="feature-grid">
<div class="feature-item"><div class="feature-item-icon"><i class="fas fa-boxes-stacked"></i></div><div class="feature-item-text"><strong>Stock Register</strong><p>Item list with par levels, current quantities, categories, and auto-calculated stock value. Status column flags items below par automatically.</p></div></div>
<div class="feature-item"><div class="feature-item-icon"><i class="fas fa-file-invoice"></i></div><div class="feature-item-text"><strong>Purchase Order Log</strong><p>Track purchase orders from creation through delivery and invoice matching. Status column (Pending/Received/Matched) keeps you organised.</p></div></div>
<div class="feature-item"><div class="feature-item-icon"><i class="fas fa-truck"></i></div><div class="feature-item-text"><strong>Supplier Directory</strong><p>Contact details, categories, payment terms, and delivery notes for each supplier. No more searching for phone numbers mid-service.</p></div></div>
<div class="feature-item"><div class="feature-item-icon"><i class="fas fa-trash-can"></i></div><div class="feature-item-text"><strong>Waste Tracker</strong><p>Log waste by item, reason, quantity, and dollar value. Weekly waste totals feed into the dashboard for trend tracking.</p></div></div>
<div class="feature-item"><div class="feature-item-icon"><i class="fas fa-chart-bar"></i></div><div class="feature-item-text"><strong>Weekly Dashboard</strong><p>Auto-calculated summary of stock value, items below par, waste cost, and open orders, updated each week with formulas.</p></div></div>
<div class="feature-item"><div class="feature-item-icon"><i class="fas fa-triangle-exclamation"></i></div><div class="feature-item-text"><strong>Automatic Alerts</strong><p>Conditional formatting highlights low-stock items in amber and critical items in red, with no manual checking needed.</p></div></div>
</div>
</div>

<div class="content-section">
<h2><i class="fas fa-list-check"></i> How to Get Started in 30 Minutes</h2>
<p class="section-intro">Four steps to have a working inventory system for your restaurant today.</p>
<ol style="padding-left:1.5rem;font-size:0.95rem;color:var(--dark);line-height:2">
<li><strong>Make a copy:</strong> File &gt; Make a Copy in Google Drive</li>
<li><strong>Add your suppliers:</strong> Fill in the Suppliers tab first (name, contact, categories)</li>
<li><strong>Stock your register:</strong> Add all items to the Stock tab with quantities, par levels, and unit costs</li>
<li><strong>Set up weekly review:</strong> Every Friday, update quantities and check the Dashboard tab for the week's summary</li>
</ol>
<div class="tip-box tip-box-mint" style="margin-top:1.5rem"><strong>Pro tip:</strong> Assign one person to own stock entries. Shared sheets work best when one person is responsible for accuracy, or quantities drift. When you're ready to move beyond spreadsheets, RestroAI does this in real time with no manual entry.</div>
</div>

<div class="content-section">
<h2><i class="fas fa-scale-balanced"></i> Spreadsheet vs RestroAI</h2>
<p class="section-intro">The template is great for getting started. Here's when it makes sense to step up to RestroAI.</p>
<div class="comparison-wrap">
<table class="comparison-table">
<thead>
<tr><th></th><th>RestroAI</th><th>This Template</th></tr>
</thead>
<tbody>
<tr><td>Real-time stock levels</td><td><i class="fas fa-check check-green"></i></td><td><i class="fas fa-xmark check-red"></i></td></tr>
<tr><td>Mobile access</td><td><i class="fas fa-check check-green"></i></td><td><span class="check-partial">Partial</span></td></tr>
<tr><td>3-way PO matching</td><td><i class="fas fa-check check-green"></i></td><td><i class="fas fa-xmark check-red"></i></td></tr>
<tr><td>Supplier messaging</td><td><i class="fas fa-check check-green"></i></td><td><i class="fas fa-xmark check-red"></i></td></tr>
<tr><td>Auto low-stock alerts</td><td><i class="fas fa-check check-green"></i></td><td><span class="check-partial">Visual only</span></td></tr>
<tr><td>Recipe costing and menu margins</td><td><i class="fas fa-check check-green"></i></td><td><i class="fas fa-xmark check-red"></i></td></tr>
<tr><td>AI-powered ordering and insights</td><td><i class="fas fa-check check-green"></i></td><td><i class="fas fa-xmark check-red"></i></td></tr>
<tr><td>HACCP compliance logs</td><td><i class="fas fa-check check-green"></i></td><td><i class="fas fa-xmark check-red"></i></td></tr>
<tr><td>Multi-user, real-time</td><td><i class="fas fa-check check-green"></i></td><td><i class="fas fa-xmark check-red"></i></td></tr>
<tr><td>Free to use</td><td><span class="check-partial">14-day trial</span></td><td><i class="fas fa-check check-green"></i></td></tr>
</tbody>
</table>
</div>
</div>
