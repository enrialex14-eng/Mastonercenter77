/**
 * catalog-engine.js — Motor universal de catálogos
 * Requiere: window.CATALOG_DATA, window.SITE, window.CATALOGOS
 * Requiere cargar: catalog-engine.css antes que este script
 */
(function () {
  'use strict';

  /* ══════════════════════════════════════════
     COLORES POR MARCA (placeholders)
  ══════════════════════════════════════════ */
  var BRAND_COLORS = {
    'Trust':       '#E06C00',
    'Marvo':       '#7C3AED',
    'Moonki':      '#0EA5E9',
    'HP':          '#0096D6',
    'Canon':       '#CC0000',
    'Epson':       '#003087',
    'Dahua':       '#003082',
    'IMOU':        '#EF4444',
    'Unno':        '#6366F1',
    'Argom':       '#FF6600',
    'TP-Link':     '#3DDC84',
    'Mercusys':    '#00B0D7',
    'Xiaomi':      '#FF6900',
    'Olax':        '#10B981',
    'Samsung':     '#1428A0',
    'MSI':         '#CC0000',
    'Asus':        '#00539C',
    'LG':          '#A50034',
    'Hikvision':   '#E31E26',
    'Hisense':     '#D32F2F',
    'Checkpoint':  '#F59E0B',
    'Conastron':   '#6366F1',
    'Lenovo':      '#E2231A',
    'Kingston':    '#CC0000',
    'Sandisk':     '#E91E8C',
    'Maxell':      '#1565C0',
    'Hiksemi':     '#E31E26',
    'Maxiprint':   '#2563EB',
    'PrintLine':   '#7C3AED',
    'Venspeed':    '#0D9488',
    'AC Ink':      '#EA580C',
    'Asta':        '#15803D',
    'EOC':         '#9333EA',
    'Stamprint':   '#0891B2',
    'Baofeng':     '#374151',
    'Redragon':    '#B91C1C',
    'Logitech':    '#00B2FF',
    'Genius':      '#0066CC',
    'Acer':        '#83B81A',
    'default':     '#64748B'
  };

  function brandColor(marca) {
    if (!marca) return BRAND_COLORS.default;
    for (var key in BRAND_COLORS) {
      if (marca.toLowerCase().indexOf(key.toLowerCase()) !== -1) return BRAND_COLORS[key];
    }
    return BRAND_COLORS.default;
  }

  function abbr(marca) {
    if (!marca) return '?';
    var words = marca.trim().split(/\s+/);
    if (words.length === 1) return words[0].substring(0, 3).toUpperCase();
    return (words[0][0] + words[1][0]).toUpperCase();
  }

  /* ══════════════════════════════════════════
     ESTADO GLOBAL
  ══════════════════════════════════════════ */
  var _state = {
    activeSection: 'todos',
    query: ''
  };
  var _allProducts = [];   // flat array { ...product, _section_id }
  var _currentProduct = null;

  /* ══════════════════════════════════════════
     SET CSS VARS
  ══════════════════════════════════════════ */
  function setCSSVars(D) {
    var r = document.documentElement;
    r.style.setProperty('--cat-accent',    D.accentColor  || '#0EA5E9');
    r.style.setProperty('--cat-light',     D.accentLight  || '#E0F2FE');
    r.style.setProperty('--cat-from',      D.gradientFrom || '#0C2A4A');
    r.style.setProperty('--cat-mid-color', D.gradientMid  || '#0369A1');
    r.style.setProperty('--cat-to',        D.gradientTo   || '#0EA5E9');
  }

  /* ══════════════════════════════════════════
     BUILD HERO
  ══════════════════════════════════════════ */
  function buildHero(D) {
    var stats = (D.stats || []).map(function(s) {
      return '<div class="ce-stat"><span class="ce-stat-num">' + s.n + '</span><span class="ce-stat-label">' + s.l + '</span></div>';
    }).join('');

    var statsHtml = stats ? '<div class="ce-hero-stats">' + stats + '</div>' : '';

    var hero = document.createElement('header');
    hero.className = 'ce-hero';
    hero.innerHTML = [
      '<button id="theme-toggle" class="ce-theme-btn" onclick="toggleTheme()" aria-label="Cambiar modo"></button>',
      '<a href="index.html" class="ce-back">',
        '<svg viewBox="0 0 24 24" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',
        'Volver al inicio',
      '</a>',
      '<div class="ce-hero-inner">',
        '<a href="index.html" class="ce-hero-logo-link">',
          '<div class="ce-hero-logo">',
            '<img src="assets/LOGO MASTONER.jpeg" alt="MasToner Center 77" onerror="this.style.display=\'none\'">',
          '</div>',
        '</a>',
        '<div class="ce-hero-copy">',
          '<div class="ce-eyebrow"><span></span>' + (D.eyebrow || 'Catálogo 2025') + '</div>',
          '<h1 class="ce-hero-title">' + D.nombre + '</h1>',
          '<p class="ce-hero-sub">' + (D.descripcion || '') + '</p>',
        '</div>',
        statsHtml,
      '</div>',
    ].join('');

    document.body.insertBefore(hero, document.getElementById('catalog-root'));
  }

  /* ══════════════════════════════════════════
     BUILD SEARCH BAR
  ══════════════════════════════════════════ */
  var SVG_SEARCH = '<svg class="ce-search-icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';
  var SVG_CLEAR  = '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
  var SVG_EMPTY  = '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>';

  function buildSearch() {
    var outer = document.createElement('div');
    outer.className = 'ce-search-outer';
    outer.setAttribute('role', 'search');
    outer.innerHTML = [
      '<div class="ce-search-inner">',
        '<label class="ce-search-box" for="ce-input">' + SVG_SEARCH,
          '<input type="search" id="ce-input" class="ce-search-input"',
            ' placeholder="Buscar producto, marca, código…"',
            ' autocomplete="off" autocorrect="off" spellcheck="false"',
            ' aria-label="Buscar en el catálogo">',
          '<button class="ce-search-clear" id="ce-clear" aria-label="Limpiar" style="display:none">' + SVG_CLEAR + '</button>',
        '</label>',
        '<div class="ce-search-badge" id="ce-badge" aria-live="polite"></div>',
      '</div>',
    ].join('');
    return outer;
  }

  /* ══════════════════════════════════════════
     BUILD FILTER CHIPS
  ══════════════════════════════════════════ */
  function buildFilters(D) {
    var wrap = document.createElement('div');
    wrap.className = 'ce-filters-wrap';

    var total = _allProducts.length;
    var chipsHtml = '<button class="ce-chip active" data-section="todos"><span class="ce-chip-count">' + total + '</span> Todos</button>';

    (D.sections || []).forEach(function(sec) {
      chipsHtml += '<button class="ce-chip" data-section="' + sec.id + '">' +
        (sec.nombre) + '<span class="ce-chip-count">' + sec.productos.length + '</span></button>';
    });

    wrap.innerHTML = '<div class="ce-filters" id="ce-filters">' + chipsHtml + '</div>';
    return wrap;
  }

  /* ══════════════════════════════════════════
     BUILD SECTIONS + CARDS
  ══════════════════════════════════════════ */
  function buildSections(D) {
    var frag = document.createDocumentFragment();

    (D.sections || []).forEach(function(sec, si) {
      var secEl = document.createElement('div');
      secEl.className = 'ce-section';
      secEl.id = 'ce-sec-' + sec.id;

      var iconText = abbr(sec.nombre);
      var header = '<div class="ce-section-header">' +
        '<div class="ce-section-badge">' +
          '<span class="ce-section-icon">' + iconText + '</span>' +
          sec.nombre +
        '</div>' +
        '<div class="ce-section-line"></div>' +
        '<span class="ce-section-count">' + sec.productos.length + ' productos</span>' +
      '</div>';

      var cards = sec.productos.map(function(p, i) {
        var color  = brandColor(p.marca);
        var ab     = p.marca ? abbr(p.marca) : '?';
        var searchText = [p.marca || '', p.nombre || '', p.descripcion || '', p.codigo || '', sec.nombre].join(' ').toLowerCase();

        var mediaHtml;
        if (p.img) {
          mediaHtml = '<img class="ce-card-img" src="' + p.img + '" alt="' + (p.nombre || '') + '" loading="lazy"' +
            ' onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">' +
            '<div class="ce-card-placeholder" style="display:none">' +
              '<div class="ce-card-placeholder-icon" style="background:' + color + '">' + ab + '</div>' +
              '<span>' + (p.nombre || '') + '</span>' +
            '</div>';
        } else {
          mediaHtml = '<div class="ce-card-placeholder">' +
            '<div class="ce-card-placeholder-icon" style="background:' + color + '">' + ab + '</div>' +
            '<span>' + (p.nombre || '') + '</span>' +
          '</div>';
        }

        return '<div class="ce-card" data-id="' + (p.codigo || i) + '"' +
          ' data-section="' + sec.id + '"' +
          ' data-search="' + searchText.replace(/"/g, '') + '"' +
          ' style="transition-delay:' + ((i % 4) * 55) + 'ms">' +
          '<div class="ce-card-media">' + mediaHtml + '<span class="ce-zoom-chip">Ver detalles</span></div>' +
          '<div class="ce-card-body">' +
            '<div class="ce-card-brand">' + (p.marca || '') + '</div>' +
            '<div class="ce-card-name">' + (p.nombre || '') + '</div>' +
            '<div class="ce-card-desc">' + (p.descripcion || '') + '</div>' +
            '<div class="ce-card-footer"><span class="ce-card-cta">Consultar precio</span><span class="ce-card-avail">Disponible</span></div>' +
          '</div>' +
        '</div>';
      }).join('');

      var grid = '<div class="ce-grid" id="ce-grid-' + sec.id + '">' + cards + '</div>';
      var divider = si < D.sections.length - 1 ? '<div class="ce-divider"></div>' : '';

      secEl.innerHTML = header + grid + divider;
      frag.appendChild(secEl);
    });

    return frag;
  }

  /* ══════════════════════════════════════════
     BUILD EMPTY STATE
  ══════════════════════════════════════════ */
  function buildEmpty() {
    var el = document.createElement('div');
    el.className = 'ce-empty'; el.id = 'ce-empty'; el.style.display = 'none';
    el.innerHTML = [
      '<div class="ce-empty-icon">' + SVG_EMPTY + '</div>',
      '<p class="ce-empty-title">Sin resultados</p>',
      '<p class="ce-empty-desc">No encontramos productos para &ldquo;<span class="ce-empty-q" id="ce-empty-q"></span>&rdquo;</p>',
      '<button class="ce-empty-btn" id="ce-empty-btn">Limpiar búsqueda</button>',
    ].join('');
    return el;
  }

  /* ══════════════════════════════════════════
     BUILD MODAL
  ══════════════════════════════════════════ */
  function buildModal() {
    var wa_svg = '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.533 5.845L.057 23.492a.5.5 0 0 0 .614.612l5.716-1.498A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.896 0-3.67-.524-5.18-1.434l-.36-.217-3.795.995.991-3.727-.236-.375A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>';

    var overlay = document.createElement('div');
    overlay.className = 'ce-overlay'; overlay.id = 'ce-overlay';
    overlay.innerHTML = [
      '<div class="ce-modal" id="ce-modal">',
        '<button class="ce-modal-close" id="ce-modal-close" aria-label="Cerrar">✕</button>',
        '<div class="ce-modal-media">',
          '<div class="ce-modal-ph" id="ce-modal-ph">',
            '<div class="ce-modal-ph-icon" id="ce-modal-ph-icon"></div>',
            '<span id="ce-modal-ph-label"></span>',
          '</div>',
          '<img class="ce-modal-img" id="ce-modal-img" style="display:none" alt="">',
        '</div>',
        '<div class="ce-modal-info">',
          '<span class="ce-modal-codigo" id="ce-modal-codigo"></span>',
          '<span class="ce-modal-marca" id="ce-modal-marca"></span>',
          '<h2 class="ce-modal-nombre" id="ce-modal-nombre"></h2>',
          '<p class="ce-modal-desc" id="ce-modal-desc"></p>',
          '<div class="ce-modal-specs" id="ce-modal-specs" style="display:none">',
            '<div class="ce-specs-title">Especificaciones técnicas</div>',
            '<div class="ce-specs-grid" id="ce-modal-specs-grid"></div>',
          '</div>',
          '<div class="ce-modal-foot">',
            '<span class="ce-modal-stock">En stock</span>',
            '<button class="ce-modal-wa" id="ce-modal-wa">' + wa_svg + ' Consultar precio</button>',
          '</div>',
        '</div>',
      '</div>',
    ].join('');
    document.body.appendChild(overlay);
  }

  /* ══════════════════════════════════════════
     BUILD FOOTER
  ══════════════════════════════════════════ */
  function buildFooter() {
    var footer = document.createElement('footer');
    footer.className = 'ce-footer';
    footer.innerHTML = [
      '<div class="ce-footer-inner">',
        '<div>',
          '<div class="ce-footer-logo">MasToner<span>Center 77</span></div>',
          '<div class="ce-footer-tagline">Tecnología · Soluciones de Impresión · Calidad Garantizada</div>',
        '</div>',
        '<div>',
          '<div class="ce-footer-col-title">Contacto</div>',
          '<div class="ce-footer-item"><svg fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg><span id="ce-footer-dir"></span></div>',
          '<div class="ce-footer-item"><svg fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.53 3.47 2 2 0 0 1 3.5 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9A16 16 0 0 0 15 16.09l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22.97 17z"/></svg><a id="ce-footer-phone" href="#" target="_blank"></a></div>',
          '<div class="ce-footer-item"><svg fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="#38BDF8" stroke="none"/></svg><a id="ce-footer-ig" href="#" target="_blank"></a></div>',
        '</div>',
        '<div>',
          '<div class="ce-footer-col-title">Horario</div>',
          '<div class="ce-footer-item"><svg fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg><span id="ce-footer-horario"></span></div>',
          '<a id="ce-footer-wa" href="#" target="_blank" class="ce-footer-wa"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.533 5.845L.057 23.492a.5.5 0 0 0 .614.612l5.716-1.498A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.896 0-3.67-.524-5.18-1.434l-.36-.217-3.795.995.991-3.727-.236-.375A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg> Consultar por WhatsApp</a>',
        '</div>',
      '</div>',
      '<div class="ce-footer-copy" id="ce-footer-copy"></div>',
    ].join('');
    document.body.appendChild(footer);
  }

  /* ══════════════════════════════════════════
     FILL FOOTER WITH SITE DATA
  ══════════════════════════════════════════ */
  function fillFooter() {
    if (typeof SITE === 'undefined') return;
    var S = SITE;
    var phone = document.getElementById('ce-footer-phone');
    if (phone) { phone.href = 'https://wa.me/' + S.whatsapp; phone.textContent = S.telefono; }
    var ig = document.getElementById('ce-footer-ig');
    if (ig) { ig.href = S.instagram.url; ig.textContent = S.instagram.handle; }
    var dir = document.getElementById('ce-footer-dir');
    if (dir) dir.innerHTML = S.direccion.linea1 + '<br>' + S.direccion.linea2 + '<br>' + S.direccion.linea3;
    var hor = document.getElementById('ce-footer-horario');
    if (hor) hor.textContent = S.horario;
    var wa = document.getElementById('ce-footer-wa');
    if (wa) wa.href = 'https://wa.me/' + S.whatsapp;
    var copy = document.getElementById('ce-footer-copy');
    if (copy) copy.textContent = S.copyright;
  }

  /* ══════════════════════════════════════════
     FILTER LOGIC
  ══════════════════════════════════════════ */
  function applyFilter() {
    var q = _state.query.trim().toLowerCase();
    var sec = _state.activeSection;
    var cards = document.querySelectorAll('.ce-card');
    var total = 0;

    cards.forEach(function(card) {
      var matchSec  = sec === 'todos' || card.dataset.section === sec;
      var matchText = q === '' || (card.dataset.search || '').indexOf(q) !== -1;
      var show = matchSec && matchText;
      card.style.display = show ? '' : 'none';
      if (show) total++;
    });

    /* Hide/show section groups */
    document.querySelectorAll('.ce-section').forEach(function(secEl) {
      var id = secEl.id.replace('ce-sec-', '');
      if (sec !== 'todos' && id !== sec) { secEl.style.display = 'none'; return; }
      secEl.style.display = '';
      var grid = document.getElementById('ce-grid-' + id);
      if (!grid) return;
      var vis = 0;
      grid.querySelectorAll('.ce-card').forEach(function(c) { if (c.style.display !== 'none') vis++; });
      var hide = vis === 0 && q !== '';
      var hdr = secEl.querySelector('.ce-section-header');
      if (hdr) hdr.style.display = hide ? 'none' : '';
      var div = grid.nextElementSibling;
      if (div && div.classList.contains('ce-divider')) div.style.display = hide ? 'none' : '';
    });

    /* Empty state */
    var empty = document.getElementById('ce-empty');
    if (empty) {
      if (total === 0 && q !== '') {
        var qEl = document.getElementById('ce-empty-q');
        if (qEl) qEl.textContent = _state.query.trim();
        empty.style.display = '';
      } else {
        empty.style.display = 'none';
      }
    }

    /* Badge */
    var badge = document.getElementById('ce-badge');
    if (badge) {
      if (q === '') { badge.textContent = ''; badge.className = 'ce-search-badge'; }
      else { badge.textContent = total + (total === 1 ? ' producto' : ' productos'); badge.className = 'ce-search-badge active'; }
    }

    /* Clear button */
    var clearBtn = document.getElementById('ce-clear');
    if (clearBtn) clearBtn.style.display = q !== '' ? 'flex' : 'none';
  }

  /* ══════════════════════════════════════════
     OPEN / CLOSE MODAL
  ══════════════════════════════════════════ */
  function openModal(product) {
    _currentProduct = product;
    var color = brandColor(product.marca);
    var ab    = product.marca ? abbr(product.marca) : '?';

    document.getElementById('ce-modal-codigo').textContent = product.codigo || '';
    document.getElementById('ce-modal-marca').textContent  = product.marca  || '';
    document.getElementById('ce-modal-nombre').textContent = product.nombre || '';
    document.getElementById('ce-modal-desc').textContent   = product.descripcion || '';

    /* Specs */
    var specsWrap = document.getElementById('ce-modal-specs');
    var specsGrid = document.getElementById('ce-modal-specs-grid');
    if (specsWrap && specsGrid) {
      if (product.specs && product.specs.length) {
        specsGrid.innerHTML = product.specs.map(function(s) {
          return '<div class="ce-spec-row"><span class="ce-spec-k">' + s.k + '</span><span class="ce-spec-v">' + s.v + '</span></div>';
        }).join('');
        specsWrap.style.display = '';
      } else {
        specsWrap.style.display = 'none';
      }
    }

    var icon  = document.getElementById('ce-modal-ph-icon');
    var label = document.getElementById('ce-modal-ph-label');
    var img   = document.getElementById('ce-modal-img');
    var ph    = document.getElementById('ce-modal-ph');

    if (product.img) {
      img.src = product.img; img.alt = product.nombre || '';
      img.style.display = ''; ph.style.display = 'none';
      img.onerror = function() {
        img.style.display = 'none'; ph.style.display = 'flex';
        icon.style.background = color; icon.textContent = ab;
        if (label) label.textContent = product.nombre || '';
      };
    } else {
      img.style.display = 'none'; ph.style.display = 'flex';
      icon.style.background = color; icon.textContent = ab;
      if (label) label.textContent = product.nombre || '';
    }

    document.getElementById('ce-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    document.getElementById('ce-overlay').classList.remove('open');
    document.body.style.overflow = '';
    _currentProduct = null;
  }

  /* ══════════════════════════════════════════
     WIRE EVENTS
  ══════════════════════════════════════════ */
  function wireEvents(D) {
    /* Search */
    var input    = document.getElementById('ce-input');
    var clearBtn = document.getElementById('ce-clear');
    var emptyBtn = document.getElementById('ce-empty-btn');

    function clearSearch() {
      input.value = ''; _state.query = ''; applyFilter(); input.focus();
    }
    input.addEventListener('input', function() { _state.query = this.value; applyFilter(); });
    input.addEventListener('keydown', function(e) { if (e.key === 'Escape') clearSearch(); });
    clearBtn.addEventListener('click', clearSearch);
    if (emptyBtn) emptyBtn.addEventListener('click', clearSearch);

    /* Filter chips */
    var filtersEl = document.getElementById('ce-filters');
    if (filtersEl) {
      filtersEl.addEventListener('click', function(e) {
        var chip = e.target.closest('.ce-chip');
        if (!chip) return;
        filtersEl.querySelectorAll('.ce-chip').forEach(function(c) { c.classList.remove('active'); });
        chip.classList.add('active');
        _state.activeSection = chip.dataset.section;
        applyFilter();
      });
    }

    /* Card clicks */
    document.addEventListener('click', function(e) {
      var card = e.target.closest('.ce-card');
      if (!card) return;
      var id  = card.dataset.id;
      var sec = card.dataset.section;
      var product = null;
      (D.sections || []).forEach(function(s) {
        if (s.id === sec) {
          s.productos.forEach(function(p) {
            if (String(p.codigo) === String(id)) product = p;
          });
        }
      });
      if (product) openModal(product);
    });

    /* Modal close */
    document.getElementById('ce-modal-close').addEventListener('click', closeModal);
    document.getElementById('ce-overlay').addEventListener('click', function(e) {
      if (!document.getElementById('ce-modal').contains(e.target)) closeModal();
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeModal();
    });

    /* Zoom imagen modal */
    document.getElementById('ce-modal-img').addEventListener('click', function() {
      if (this.src && this.style.display !== 'none') {
        var zoomEl = document.getElementById('ce-img-zoom');
        if (!zoomEl) {
          zoomEl = document.createElement('div');
          zoomEl.id = 'ce-img-zoom';
          zoomEl.className = 'ce-img-zoom';
          zoomEl.innerHTML = '<img id="ce-img-zoom-img" src="" alt=""><button id="ce-img-zoom-close" aria-label="Cerrar">✕</button>';
          document.body.appendChild(zoomEl);
          document.getElementById('ce-img-zoom-close').addEventListener('click', function(e) { e.stopPropagation(); zoomEl.classList.remove('open'); });
          zoomEl.addEventListener('click', function() { zoomEl.classList.remove('open'); });
          document.getElementById('ce-img-zoom-img').addEventListener('click', function(e) { e.stopPropagation(); });
        }
        document.getElementById('ce-img-zoom-img').src = this.src;
        zoomEl.classList.add('open');
      }
    });

    /* WhatsApp */
    document.getElementById('ce-modal-wa').addEventListener('click', function() {
      if (!_currentProduct) return;
      var p = _currentProduct;
      var txt = '¡Hola! Me gustaría consultar precio y disponibilidad del producto: ' +
        (p.marca || '') + ' ' + (p.nombre || '') +
        (p.codigo ? ' (Código: ' + p.codigo + ')' : '') + '. ¡Gracias!';
      var wa = (typeof SITE !== 'undefined') ? SITE.whatsapp : '584144036573';
      window.open('https://wa.me/' + wa + '?text=' + encodeURIComponent(txt), '_blank');
    });
  }

  /* ══════════════════════════════════════════
     INTERSECTION OBSERVER — animaciones
  ══════════════════════════════════════════ */
  function initAnimations() {
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.ce-card, .ce-section-header').forEach(function(el) { obs.observe(el); });
  }

  /* ══════════════════════════════════════════
     BUILD FLAT PRODUCT INDEX
  ══════════════════════════════════════════ */
  function buildIndex(D) {
    (D.sections || []).forEach(function(sec) {
      (sec.productos || []).forEach(function(p) {
        _allProducts.push(Object.assign({}, p, { _section: sec.id }));
      });
    });
  }

  /* ══════════════════════════════════════════
     MAIN INIT
  ══════════════════════════════════════════ */
  function init() {
    var D = window.CATALOG_DATA;
    if (!D) { console.error('[catalog-engine] window.CATALOG_DATA no encontrado'); return; }

    buildIndex(D);
    setCSSVars(D);
    buildHero(D);

    var root = document.getElementById('catalog-root');
    if (!root) { console.error('[catalog-engine] #catalog-root no encontrado'); return; }

    root.appendChild(buildSearch());
    root.appendChild(buildFilters(D));

    var content = document.createElement('div');
    content.className = 'ce-content';
    content.appendChild(buildEmpty());
    content.appendChild(buildSections(D));
    root.appendChild(content);

    buildModal();
    buildFooter();
    fillFooter();
    wireEvents(D);
    initAnimations();

    /* Preconstruir caché de búsqueda */
    document.querySelectorAll('.ce-card').forEach(function() {});
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
