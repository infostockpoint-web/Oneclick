/* include.js - Dynamically injects header and footer and normalizes links */
(function () {
  const rootPath = (function() {
    // Determine if current page is under /pages/ or /tools/ or project root
    const path = window.location.pathname.replace(/\\/g, '/').toLowerCase();
    if (path.includes('/pages/') || path.includes('/tools/')) return '../';
    return './';
  })();

  // Visitor Counters using CountAPI (https://countapi.xyz)
  const COUNTER_NAMESPACE = 'oneclicktools';

  function ymd() {
    const d = new Date();
    const mm = String(d.getMonth()+1).padStart(2,'0');
    const dd = String(d.getDate()).padStart(2,'0');
    return `${d.getFullYear()}${mm}${dd}`;
  }

  function getPageKey() {
    const path = window.location.pathname.replace(/\\/g,'/');
    const file = (path.split('/').pop() || 'index.html');
    return file.replace(/\.html$/i,'') || 'index';
  }

  function countapiHit(key) {
    const url = `https://api.countapi.xyz/hit/${encodeURIComponent(COUNTER_NAMESPACE)}/${encodeURIComponent(key)}`;
    return fetch(url, { mode: 'cors' }).then(r => r.json()).catch(() => null);
  }

  function ensureVisitBar() {
    let bar = document.getElementById('visit-bar');
    if (bar) return bar;
    bar = document.createElement('div');
    bar.id = 'visit-bar';
    bar.style.cssText = 'background:#f3f6ff;border-bottom:1px solid #e6ecff;color:#34495e;font-size:14px;';
    bar.innerHTML = '<div class="container" style="padding:6px 0; display:flex; gap:16px; flex-wrap:wrap; align-items:center;">\
      <span id="vb-daily"><i class="fas fa-users"></i> Today: —</span>\
      <span id="vb-page"><i class="fas fa-eye"></i> This page: —</span>\
    </div>';
    const header = document.getElementById('site-header');
    if (header && header.parentNode) {
      header.parentNode.insertBefore(bar, header.nextSibling);
    } else {
      document.body.insertBefore(bar, document.body.firstChild);
    }
    return bar;
  }

  function setupVisitorCounters() {
    const bar = ensureVisitBar();
    const dailyKey = `daily:${ymd()}`;
    const pageKey = `page:${getPageKey()}`;

    // Increment and render daily visitors
    countapiHit(dailyKey).then(res => {
      const el = document.getElementById('vb-daily');
      if (el && res && typeof res.value === 'number') {
        el.innerHTML = `<i class="fas fa-users"></i> Today: ${res.value}`;
      }
    });

    // Increment and render per-page visits
    countapiHit(pageKey).then(res => {
      const el = document.getElementById('vb-page');
      if (el && res && typeof res.value === 'number') {
        el.innerHTML = `<i class="fas fa-eye"></i> This page: ${res.value}`;
      }
      // Also, if a tool header exists, add a small badge
      try {
        const h = document.querySelector('.tool-name');
        if (h && res && typeof res.value === 'number') {
          let badge = h.querySelector('.visit-badge');
          if (!badge) {
            badge = document.createElement('span');
            badge.className = 'visit-badge';
            badge.style.cssText = 'margin-left:8px; background:#eef3ff; color:#2c3e50; border:1px solid #dfe7ff; border-radius:12px; padding:2px 8px; font-size:12px;';
            h.parentNode.insertBefore(badge, h.nextSibling);
          }
          badge.innerHTML = `<i class="fas fa-eye"></i> ${res.value}`;
        }
      } catch(_) {}
    });
  }

  function removeAdPlaceholders() {
    try {
      // Common placeholder containers
      document.querySelectorAll('.banner-ad, .ad-placeholder').forEach(el => el.remove());

      // Elements that only contain the placeholder text (case-insensitive)
      document.querySelectorAll('body *').forEach(el => {
        if (el.children.length === 0) {
          const txt = (el.textContent || '').trim();
          if (/^ad placeholder(\s*\([^)]*\))?$/i.test(txt)) {
            el.remove();
          }
        }
      });
    } catch (_) {}
  }

  function normalizeLinks(container) {
    container.querySelectorAll('a[data-path]').forEach(a => {
      const p = a.getAttribute('data-path');
      a.setAttribute('href', rootPath + p);
    });
  }

  function inject(id, file) {
    const el = document.getElementById(id);
    if (!el) return Promise.resolve();
    const fallbackHeader = `
<header>
  <div class="container">
    <div class="header-content">
      <a href="#" data-path="index.html" class="logo" title="One Click Tools">
        One &nbsp; <i class="fas fa-tools"></i> &nbsp; Click
      </a>

      <button class="menu-toggle" id="menuToggle" aria-label="Toggle menu">
        <i class="fas fa-bars"></i>
      </button>

      <nav id="mainNav" aria-label="Primary navigation">
        <ul>
          <li><a href="#" data-path="index.html">Home</a></li>
          <li><a href="#" data-path="pages/about.html">About us</a></li>
          <li><a href="#" data-path="pages/contact.html">Contact</a></li>
          <li><a href="#" data-path="pages/tools.html">Tools</a></li>
          <li><a href="#" data-path="pages/privacy-policy.html">Privacy Policy</a></li>
        </ul>
        <div class="mobile-contact"></div>
      </nav>

      <div class="contact-info"></div>
    </div>
  </div>
</header>`;
    const fallbackFooter = `
<footer>
  <div class="container">
    <div class="footer-content">
      <div>
        <a href="#" data-path="index.html" class="footer-logo">
          One &nbsp; <i class="fas fa-tools"></i>&nbsp; Click
        </a>
        <p class="footer-tagline">Simplifying your digital life.</p>
        <div class="footer-contact">
          <i class="fas fa-envelope"></i>
          <span>oneclicktools6@gmail.com</span>
        </div>
      </div>
      <div>
        <h3 class="footer-heading">Quick Links</h3>
        <ul class="footer-links">
          <li><a href="#" data-path="index.html">Home</a></li>
          <li><a href="#" data-path="pages/about.html">About us</a></li>
          <li><a href="#" data-path="pages/contact.html">Contact</a></li>
          <li><a href="#" data-path="pages/tools.html">Tools</a></li>
        </ul>
      </div>
      <div>
        <h3 class="footer-heading">Legal</h3>
        <ul class="footer-links">
          <li><a href="#" data-path="pages/privacy-policy.html">Privacy Policy</a></li>
          <li><a href="#" data-path="pages/terms.html">Terms of Use</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; <span id="year"></span> One Click Tool. All rights reserved.</p>
    </div>
  </div>
</footer>`;

    function apply(html){
      el.innerHTML = html;
      normalizeLinks(el);
    }

    return fetch(file)
      .then(r => {
        if (!r.ok) throw new Error('fetch failed');
        return r.text();
      })
      .then(apply)
      .catch(() => {
        // Fallback if fetch blocked (e.g., file:// origin)
        if (id === 'site-header') apply(fallbackHeader);
        if (id === 'site-footer') apply(fallbackFooter);
      });
  }

  function ready(fn) { document.readyState !== 'loading' ? fn() : document.addEventListener('DOMContentLoaded', fn); }

  ready(function () {
    removeAdPlaceholders();
    // Ensure Font Awesome is present for header logo/icon rendering on all pages
    (function ensureFontAwesome(){
      if (!document.querySelector('link[href*="font-awesome"], link[href*="fontawesome"], link[href*="/fa"]')) {
        var fa = document.createElement('link');
        fa.rel = 'stylesheet';
        fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        document.head.appendChild(fa);
      }
    })();

    // Ensure favicon is present on all pages
    (function ensureFavicon(){
      if (!document.querySelector('link[rel="icon"], link[rel="shortcut icon"]')) {
        var fav = document.createElement('link');
        fav.rel = 'icon';
        fav.type = 'image/svg+xml';
        fav.href = rootPath + 'favicon.svg';
        document.head.appendChild(fav);
      }
    })();

    // load header and footer placeholders if present
    const headerPromise = inject('site-header', rootPath + 'components/header.html').then(() => {
      // Menu toggle
      const toggle = document.getElementById('menuToggle');
      const nav = document.getElementById('mainNav');
      if (toggle && nav) {
        toggle.addEventListener('click', () => nav.classList.toggle('active'));
        nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('active')));
      }
    });

    const footerPromise = inject('site-footer', rootPath + 'components/footer.html').then(() => {
      const y = document.getElementById('year');
      if (y) y.textContent = new Date().getFullYear();
    });

    // Optional: tool search wiring on pages that include it
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    if (searchInput && searchButton) {
      searchButton.addEventListener('click', () => {
        const q = searchInput.value.trim();
        const dest = rootPath + 'index.html' + (q ? ('?q=' + encodeURIComponent(q)) : '');
        window.location.href = dest;
      });
      searchInput.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          e.preventDefault();
          searchButton.click();
        }
      });
    }

    Promise.all([headerPromise, footerPromise]).then(() => {
      // After header/footer are in place, set up visitor counters
      setupVisitorCounters();
    });
  });
})();
