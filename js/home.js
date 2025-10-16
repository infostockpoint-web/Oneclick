// home.js - populate homepage tool grids from manifest
(function(){
  function ready(fn){ document.readyState !== 'loading' ? fn() : document.addEventListener('DOMContentLoaded', fn); }
  ready(function(){
    // Map manifest categories to homepage section IDs
    const mapToSection = {
      'Image Tools': 'imageTools',
      'Document Tools': 'documentTools',
      'Video Tools': 'videoTools',
      'Math & Calculators': 'calculatorTools',
      'Unit Converters': 'calculatorTools',
      'Text Tools': 'textTools',
      'Developer Tools': 'webTools',
      'Security Tools': 'utilityTools',
      'SEO Tools': 'seoTools',
      'SEO & Marketing Tools': 'seoTools',
      // Dedicated section for social media tools
      'Social Media Tools': 'videoTools',
      'Misc Tools': 'utilityTools',
      'Color Tools': 'colorTools',
      'Games': 'gameTools',
      'Indian Tools': 'indianTools',
      'AI & ML Tools': 'aiMlTools',
      'Education Tools': 'educationTools',
      'Finance Tools': 'financeTools',
      'Design Tools': 'designTools',
      'Health & Fitness': 'healthFitnessTools',
      'Travel Tools': 'travelTools',
      'Business Tools': 'businessTools'
    };

    function renderGrid(id, list){
      const grid = document.getElementById(id);
      if (!grid) return;
      // Hide the whole section when the list is empty (always)
      const section = grid.closest('.tools-section');
      if (section) {
        section.style.display = list && list.length ? '' : 'none';
      }
      grid.innerHTML='';
      list.forEach(t => {
        const card = document.createElement('div');
        card.className = 'tool-card';
        card.innerHTML = `
          <i class="${t.icon} tool-icon-small"></i>
          <div class="tool-name">${t.name}</div>
          <div class="tool-desc">${t.desc}</div>
          <a class="tool-button" href="${t.url}">Open Tool</a>
        `;
        grid.appendChild(card);
      });
    }

    // Immediately show a minimal default set so names appear even without fetch
    const defaults = {
      imageTools: [ { name: 'Image to PNG', desc: 'Convert images to PNG format', icon: 'fas fa-image', url: 'tools/image-to-png.html' } ],
      documentTools: [ { name: 'PDF to CSV', desc: 'Convert PDF to CSV', icon: 'fas fa-file-csv', url: 'tools/pdf-to-csv.html' } ],
      videoTools: [ { name: 'Thumbnail Downloader', desc: 'Download video thumbnails', icon: 'fab fa-youtube', url: 'tools/thumbnail-downloader.html' } ],
      calculatorTools: [ { name: 'BMI Calculator', desc: 'Calculate your Body Mass Index', icon: 'fas fa-weight', url: 'tools/bmi-calculator.html' } ],
      textTools: [ { name: 'Word Counter', desc: 'Count words and characters in your text', icon: 'fas fa-sort-amount-down', url: 'tools/word-counter.html' } ],
      webTools: [ { name: 'JSON Formatter', desc: 'Format and validate JSON data', icon: 'fas fa-brackets-curly', url: 'tools/json-formatter.html' } ],
      utilityTools: [ { name: 'QR Code Generator', desc: 'Create QR codes from text/URL', icon: 'fas fa-qrcode', url: 'tools/qr-code-generator.html' } ],
      gameTools: [ { name: 'Tic Tac Toe', desc: 'Play tic-tac-toe', icon: 'fas fa-gamepad', url: 'tools/tic-tac-toe.html' } ]
    };
    Object.entries(defaults).forEach(([id, list]) => renderGrid(id, list));

    function renderFromData(manifestArray){
      if (!Array.isArray(manifestArray)) return;
      let data = manifestArray;
      // Apply query filter if present
      const urlQ = new URLSearchParams(window.location.search).get('q') || '';
      if (urlQ) {
        const s = urlQ.toLowerCase();
        data = data.filter(t => (t.name||'').toLowerCase().includes(s) || (t.desc||'').toLowerCase().includes(s) || (t.category||'').toLowerCase().includes(s));
      }

      const groups = {};
      data.forEach(item => {
        const section = mapToSection[item.category] || 'utilityTools';
        if (!groups[section]) groups[section] = [];
        groups[section].push(item);
      });
      Object.keys(mapToSection).forEach(cat => {
        const id = mapToSection[cat];
        if (groups[id]) renderGrid(id, groups[id]);
      });
      Object.entries(groups).forEach(([id, list]) => renderGrid(id, list));
    }

    // Curated fallback manifest with only existing, working tools for all major sections
    const CURATED_FALLBACK = [
      { name:'Word Counter', desc:'Count words and characters', icon:'fas fa-sort-amount-down', url:'tools/word-counter.html', category:'Text Tools' },
      { name:'Character Counter', desc:'Count characters', icon:'fas fa-font', url:'tools/character-counter.html', category:'Text Tools' },
      { name:'Case Converter', desc:'UPPER/lower/Title', icon:'fas fa-text-height', url:'tools/case-converter.html', category:'Text Tools' },
      { name:'Text-to-Speech', desc:'Convert text to speech', icon:'fas fa-volume-up', url:'tools/text-to-speech.html', category:'Text Tools' },
      { name:'Speech-to-Text', desc:'Transcribe speech', icon:'fas fa-microphone', url:'tools/speech-to-text.html', category:'Text Tools' },

      { name:'Meta Tag Generator', desc:'SEO meta tags', icon:'fas fa-tags', url:'tools/meta-tag-generator.html', category:'SEO Tools' },
      { name:'Keyword Density Checker', desc:'Analyze keyword density', icon:'fas fa-percentage', url:'tools/keyword-density-checker.html', category:'SEO Tools' },
      { name:'Sitemap Generator', desc:'Create XML sitemap', icon:'fas fa-sitemap', url:'tools/sitemap-generator.html', category:'SEO Tools' },
      { name:'Robots.txt Generator', desc:'Generate robots.txt', icon:'fas fa-robot', url:'tools/robots-txt-generator.html', category:'SEO Tools' },
      { name:'Page Speed Checker', desc:'Test performance', icon:'fas fa-tachometer-alt', url:'tools/page-speed-checker.html', category:'SEO Tools' },

      { name:'Invoice Generator', desc:'Create invoices', icon:'fas fa-file-invoice-dollar', url:'tools/invoice-generator.html', category:'Business Tools' },

      { name:'Currency Converter', desc:'Convert currencies', icon:'fas fa-exchange-alt', url:'tools/currency-converter.html', category:'Finance Tools' },

      { name:'Color Code Picker', desc:'Pick/convert colors', icon:'fas fa-eyedropper', url:'tools/color-code-picker.html', category:'Design Tools' },

      { name:'BMI Calculator', desc:'Body Mass Index', icon:'fas fa-weight', url:'tools/bmi-calculator.html', category:'Health & Fitness' },

      { name:'Time Zone Converter', desc:'Convert time zones', icon:'fas fa-clock', url:'tools/time-zone-converter.html', category:'Travel Tools' },

      { name:'QR Code Generator', desc:'Create QR codes', icon:'fas fa-qrcode', url:'tools/qr-code-generator.html', category:'Utility Tools' },
      { name:'Free Note App', desc:'Take quick notes', icon:'fas fa-sticky-note', url:'tools/free-note-app.html', category:'Utility Tools' },

      { name:'Tic Tac Toe', desc:'Play tic-tac-toe', icon:'fas fa-gamepad', url:'tools/tic-tac-toe.html', category:'Games' },
      { name:'Dice Roller', desc:'Roll virtual dice', icon:'fas fa-dice', url:'tools/dice-roller.html', category:'Games' },

      { name:'YouTube Thumbnail Downloader', desc:'Download thumbnails', icon:'fab fa-youtube', url:'tools/thumbnail-downloader.html', category:'Social Media Tools' },
      { name:'Instagram Photo Downloader', desc:'Download Instagram photos', icon:'fab fa-instagram', url:'tools/instagram-photo-downloader.html', category:'Social Media Tools' }
    ];

    // Helper: timed fetch with retry/backoff
    async function fetchWithRetry(url, opts = {}, retries = 2, backoffMs = 400) {
      for (let i = 0; i <= retries; i++) {
        try {
          const ctrl = new AbortController();
          const t = setTimeout(() => ctrl.abort(), opts.timeoutMs || 5000);
          const res = await fetch(url, { ...opts, signal: ctrl.signal });
          clearTimeout(t);
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          return await res.json();
        } catch (e) {
          if (i === retries) throw e;
          await new Promise(r => setTimeout(r, backoffMs * (i + 1)));
        }
      }
    }

    // Render from cached data immediately if present
    try {
      const cached = localStorage.getItem('tools_manifest_cache');
      if (cached) {
        renderFromData(JSON.parse(cached));
      }
    } catch(_) {}

    // Prefer JSON manifest; fall back to inlined window.TOOLS_MANIFEST; else curated list; else keep defaults
    (async () => {
      try {
        const data = await fetchWithRetry('data/tools-manifest.json', { timeoutMs: 6000 }, 2, 500);
        renderFromData(data);
        try { localStorage.setItem('tools_manifest_cache', JSON.stringify(data)); } catch(_) {}
      } catch (_) {
        if (Array.isArray(window.TOOLS_MANIFEST) && window.TOOLS_MANIFEST.length) {
          renderFromData(window.TOOLS_MANIFEST);
        } else {
          renderFromData(CURATED_FALLBACK);
        }
      }
    })();
  });
})();
