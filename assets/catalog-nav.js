/**
 * catalog-nav.js — Floating navigation dock for catalog pages
 * Depends on: CATALOGOS (data/catalogos.js), SITE (assets/site-config.js)
 */
(function () {
  'use strict';

  var SCROLL_THRESHOLD = 250;
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';

  var ACCENT = {
    'catalogo-impresoras.html': '#0EA5E9',
    'catalogo-toner.html':      '#0EA5E9',
    'catalogo-gaming.html':     '#EA580C',
    'catalogo-marvo.html':      '#7C3AED',
  };

  /* ══════════════════════════════════════════
     CSS
  ══════════════════════════════════════════ */
  var CSS = [
    /* Dock container */
    '.cdock{position:fixed;bottom:28px;right:24px;z-index:490;display:flex;align-items:center;',
    'gap:4px;padding:5px;border-radius:50px;',
    'background:rgba(255,255,255,.96);backdrop-filter:blur(14px) saturate(1.6);',
    '-webkit-backdrop-filter:blur(14px) saturate(1.6);',
    'border:1px solid rgba(0,0,0,.09);',
    'box-shadow:0 8px 32px rgba(0,0,0,.12),0 2px 8px rgba(0,0,0,.06);',
    'transform:translateY(90px);opacity:0;pointer-events:none;',
    'transition:transform .38s cubic-bezier(.4,0,.2,1),opacity .38s cubic-bezier(.4,0,.2,1);}',

    '.cdock.cdock--show{transform:translateY(0);opacity:1;pointer-events:auto;}',

    'html[data-theme="dark"] .cdock{',
    'background:rgba(15,23,42,.97);border-color:rgba(255,255,255,.1);',
    'box-shadow:0 8px 32px rgba(0,0,0,.5),0 2px 8px rgba(0,0,0,.35);}',

    /* Buttons */
    '.cdock-btn{display:inline-flex;align-items:center;gap:7px;',
    'padding:9px 16px;border-radius:50px;',
    'font-family:"Poppins",sans-serif;font-size:.78rem;font-weight:600;letter-spacing:.1px;',
    'cursor:pointer;text-decoration:none;border:none;background:transparent;',
    'color:#1E293B;line-height:1;',
    'transition:background .2s,color .2s,transform .18s,box-shadow .2s;',
    'white-space:nowrap;}',
    '.cdock-btn svg{flex-shrink:0;}',
    'html[data-theme="dark"] .cdock-btn{color:#CBD5E1;}',

    /* Home button */
    '.cdock-home{background:#0EA5E9;color:#fff;',
    'box-shadow:0 2px 10px rgba(14,165,233,.35);}',
    '.cdock-home:hover{background:#0284C7;color:#fff;',
    'transform:scale(1.04);box-shadow:0 4px 18px rgba(14,165,233,.48);}',

    /* Catalogs toggle button */
    '.cdock-cats{color:#475569;}',
    '.cdock-cats:hover{background:rgba(14,165,233,.09);color:#0EA5E9;}',
    'html[data-theme="dark"] .cdock-cats{color:#94A3B8;}',
    'html[data-theme="dark"] .cdock-cats:hover{background:rgba(56,189,248,.1);color:#38BDF8;}',
    '.cdock-cats[aria-expanded="true"]{background:rgba(14,165,233,.12);color:#0EA5E9;}',
    'html[data-theme="dark"] .cdock-cats[aria-expanded="true"]{',
    'background:rgba(56,189,248,.12);color:#38BDF8;}',

    /* Chevron rotation */
    '.cdock-chevron{transition:transform .22s cubic-bezier(.4,0,.2,1);}',
    '.cdock-cats[aria-expanded="true"] .cdock-chevron{transform:rotate(180deg);}',

    /* Separator */
    '.cdock-sep{width:1px;height:22px;',
    'background:rgba(0,0,0,.1);flex-shrink:0;border-radius:1px;}',
    'html[data-theme="dark"] .cdock-sep{background:rgba(255,255,255,.12);}',

    /* Panel */
    '.cdock-panel{position:absolute;bottom:calc(100% + 10px);right:0;',
    'background:rgba(255,255,255,.98);backdrop-filter:blur(14px);',
    '-webkit-backdrop-filter:blur(14px);',
    'border:1px solid rgba(0,0,0,.08);border-radius:18px;',
    'padding:8px;min-width:224px;',
    'box-shadow:0 12px 40px rgba(0,0,0,.12),0 4px 12px rgba(0,0,0,.07);',
    'transform-origin:bottom right;',
    'transform:scale(.92) translateY(8px);opacity:0;pointer-events:none;',
    'transition:transform .22s cubic-bezier(.4,0,.2,1),opacity .22s;}',

    '.cdock-panel.cdock-panel--open{',
    'transform:scale(1) translateY(0);opacity:1;pointer-events:auto;}',

    'html[data-theme="dark"] .cdock-panel{',
    'background:rgba(15,23,42,.98);border-color:rgba(255,255,255,.1);',
    'box-shadow:0 12px 40px rgba(0,0,0,.55),0 4px 12px rgba(0,0,0,.4);}',

    '.cdock-panel-title{',
    'font-family:"Poppins",sans-serif;font-size:.6rem;font-weight:700;',
    'text-transform:uppercase;letter-spacing:1.8px;color:#94A3B8;',
    'padding:4px 10px 10px;display:block;margin:0;}',

    /* Links inside panel */
    '.cdock-cat-link{display:flex;align-items:center;gap:10px;',
    'padding:9px 10px;border-radius:10px;text-decoration:none;',
    'font-family:"Poppins",sans-serif;font-size:.83rem;font-weight:500;',
    'color:#334155;transition:background .18s,color .18s;}',
    '.cdock-cat-link:hover{background:#F0F9FF;color:#0EA5E9;}',
    'html[data-theme="dark"] .cdock-cat-link{color:#CBD5E1;}',
    'html[data-theme="dark"] .cdock-cat-link:hover{',
    'background:rgba(56,189,248,.09);color:#38BDF8;}',

    '.cdock-cat-link--current{background:#EFF8FF;color:#0284C7;',
    'font-weight:600;pointer-events:none;cursor:default;}',
    'html[data-theme="dark"] .cdock-cat-link--current{',
    'background:rgba(56,189,248,.1);color:#38BDF8;}',

    '.cdock-cat-dot{width:9px;height:9px;border-radius:50%;flex-shrink:0;}',

    '.cdock-cat-name{flex:1;}',

    '.cdock-here-badge{font-size:.6rem;font-weight:700;letter-spacing:1px;',
    'text-transform:uppercase;color:#0284C7;opacity:.75;white-space:nowrap;}',
    'html[data-theme="dark"] .cdock-here-badge{color:#38BDF8;}',

    '.cdock-panel-hr{border:none;height:1px;',
    'background:rgba(0,0,0,.07);margin:6px 10px;}',
    'html[data-theme="dark"] .cdock-panel-hr{background:rgba(255,255,255,.08);}',

    /* Mobile */
    '@media(max-width:600px){',
    '.cdock{bottom:16px;right:12px;padding:4px;}',
    '.cdock-btn{padding:8px 12px;font-size:.72rem;}',
    '.cdock-panel{right:0;min-width:200px;}',
    '}',
    '@media(max-width:400px){',
    '.cdock-btn span{display:none;}',
    '.cdock-btn{padding:9px;}',
    '}',
  ].join('');

  /* ══════════════════════════════════════════
     SVG HELPERS
  ══════════════════════════════════════════ */
  function ico(path, w) {
    w = w || 15;
    return '<svg width="' + w + '" height="' + w + '" viewBox="0 0 24 24"' +
      ' fill="none" stroke="currentColor" stroke-width="2.5"' +
      ' stroke-linecap="round" stroke-linejoin="round">' + path + '</svg>';
  }

  var SVG_HOME   = ico('<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>');
  var SVG_GRID   = ico('<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>');
  var SVG_SEARCH = ico('<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>');
  var SVG_CHEV  = '<svg class="cdock-chevron" width="13" height="13" viewBox="0 0 24 24"' +
    ' fill="none" stroke="currentColor" stroke-width="2.5"' +
    ' stroke-linecap="round" stroke-linejoin="round">' +
    '<polyline points="18 15 12 9 6 15"/></svg>';

  /* ══════════════════════════════════════════
     BUILD CATALOG LINKS
  ══════════════════════════════════════════ */
  function buildLinks() {
    var cats = (typeof CATALOGOS !== 'undefined')
      ? CATALOGOS.filter(function (c) { return c.estado === 'activo'; })
      : [];

    if (!cats.length) return '<p class="cdock-panel-title" style="padding:8px 10px">Sin catálogos activos</p>';

    return cats.map(function (c) {
      var color   = ACCENT[c.ruta] || '#0EA5E9';
      var isCurr  = (c.ruta === currentPage);
      var shadow  = isCurr ? ';box-shadow:0 0 0 3px ' + color + '33' : '';
      return '<a href="' + c.ruta + '"' +
        ' class="cdock-cat-link' + (isCurr ? ' cdock-cat-link--current' : '') + '"' +
        (isCurr ? ' tabindex="-1" aria-current="page"' : '') + '>' +
        '<span class="cdock-cat-dot" style="background:' + color + shadow + '"></span>' +
        '<span class="cdock-cat-name">' + c.nombre + '</span>' +
        (isCurr ? '<span class="cdock-here-badge">Aquí</span>' : '') +
        '</a>';
    }).join('');
  }

  /* ══════════════════════════════════════════
     BUILD DOM
  ══════════════════════════════════════════ */
  function build() {
    /* Inject CSS */
    var styleEl = document.createElement('style');
    styleEl.textContent = CSS;
    document.head.appendChild(styleEl);

    /* Create dock */
    var dock = document.createElement('nav');
    dock.id = 'cdock';
    dock.className = 'cdock';
    dock.setAttribute('aria-label', 'Navegación rápida de catálogos');

    dock.innerHTML =
      '<a href="index.html" class="cdock-btn cdock-home" title="Volver al inicio">' +
        SVG_HOME + '<span>Inicio</span>' +
      '</a>' +
      '<span class="cdock-sep" aria-hidden="true"></span>' +
      '<a href="busqueda.html" class="cdock-btn cdock-cats" title="Buscar en todos los catálogos">' +
        SVG_SEARCH + '<span>Buscar</span>' +
      '</a>' +
      '<span class="cdock-sep" aria-hidden="true"></span>' +
      '<button class="cdock-btn cdock-cats" id="cdock-toggle"' +
        ' aria-haspopup="true" aria-expanded="false" title="Navegar entre catálogos">' +
        SVG_GRID + '<span>Catálogos</span>' + SVG_CHEV +
      '</button>' +
      '<div class="cdock-panel" id="cdock-panel" role="menu">' +
        '<p class="cdock-panel-title">Ir a catálogo</p>' +
        buildLinks() +
        '<hr class="cdock-panel-hr">' +
        '<a href="index.html" class="cdock-cat-link" role="menuitem">' +
          '<span class="cdock-cat-dot" style="background:#0EA5E9"></span>' +
          '<span class="cdock-cat-name">Inicio principal</span>' +
        '</a>' +
      '</div>';

    document.body.appendChild(dock);

    /* ── Scroll show/hide ── */
    var visible = false;
    window.addEventListener('scroll', function () {
      var should = window.scrollY > SCROLL_THRESHOLD;
      if (should !== visible) {
        visible = should;
        dock.classList.toggle('cdock--show', should);
      }
    }, { passive: true });

    /* ── Toggle panel ── */
    var toggleBtn = document.getElementById('cdock-toggle');
    var panel     = document.getElementById('cdock-panel');

    toggleBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = panel.classList.toggle('cdock-panel--open');
      toggleBtn.setAttribute('aria-expanded', String(open));
    });

    document.addEventListener('click', function () {
      panel.classList.remove('cdock-panel--open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        panel.classList.remove('cdock-panel--open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.focus();
      }
    });
  }

  /* ── Init ── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();
