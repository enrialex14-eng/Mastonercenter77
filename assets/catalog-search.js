/**
 * catalog-search.js — Búsqueda en tiempo real para catálogos
 * Requiere: DATA (declarado en el script inline de cada catálogo)
 */
(function () {
  'use strict';

  /* ══════════════════════════════════════════
     CSS INYECTADO
  ══════════════════════════════════════════ */
  var CSS = [
    /* Strip sticky */
    '.csearch-outer{',
      'background:var(--bg-section,#F8FAFC);',
      'border-bottom:1px solid var(--border-base,#E2E8F0);',
      'box-shadow:0 2px 14px rgba(0,0,0,.05);',
      'padding:14px 40px;',
      'position:sticky;top:0;z-index:200;',
    '}',
    '.csearch-inner{',
      'max-width:1200px;margin:0 auto;',
      'display:flex;align-items:center;gap:16px;',
    '}',

    /* Caja de búsqueda */
    '.csearch-box{',
      'flex:1;display:flex;align-items:center;gap:10px;',
      'background:var(--bg-light,#fff);',
      'border:1.5px solid var(--border-base,#E2E8F0);',
      'border-radius:14px;padding:0 14px;cursor:text;',
      'transition:border-color .22s,box-shadow .22s;',
    '}',
    '.csearch-box:focus-within{',
      'border-color:var(--sky-mid,#38BDF8);',
      'box-shadow:0 0 0 3px rgba(56,189,248,.14);',
    '}',

    /* Icono lupa */
    '.csearch-icon{',
      'flex-shrink:0;width:17px;height:17px;',
      'stroke:var(--text-muted,#94A3B8);',
      'fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;',
      'transition:stroke .22s;',
    '}',
    '.csearch-box:focus-within .csearch-icon{stroke:var(--sky-deep,#0EA5E9);}',

    /* Input */
    '.csearch-input{',
      'flex:1;border:none;background:transparent;',
      'font-family:"Poppins",sans-serif;font-size:.93rem;',
      'color:var(--text-dark,#1E293B);',
      'padding:13px 0;outline:none;min-width:0;',
    '}',
    '.csearch-input::placeholder{color:var(--text-muted,#94A3B8);font-size:.88rem;}',
    '.csearch-input::-webkit-search-cancel-button{display:none;}',
    '.csearch-input::-ms-clear{display:none;}',

    /* Botón limpiar */
    '.csearch-clear{',
      'flex-shrink:0;width:22px;height:22px;border-radius:50%;',
      'border:none;background:var(--text-muted,#94A3B8);color:#fff;',
      'cursor:pointer;align-items:center;justify-content:center;',
      'padding:0;transition:background .2s,transform .15s;',
    '}',
    '.csearch-clear:hover{background:var(--sky-deep,#0EA5E9);transform:scale(1.12);}',

    /* Badge contador */
    '.csearch-badge{',
      'font-family:"Poppins",sans-serif;font-size:.72rem;font-weight:600;',
      'color:var(--text-muted,#94A3B8);white-space:nowrap;letter-spacing:.3px;',
      'min-width:88px;text-align:right;',
    '}',
    '.csearch-badge--active{color:var(--sky-deep,#0EA5E9);}',

    /* Sin resultados */
    '.csearch-empty{',
      'text-align:center;padding:80px 24px 48px;',
      'animation:cse-fadein .3s ease;',
    '}',
    '@keyframes cse-fadein{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}',
    '.csearch-empty-icon{',
      'width:68px;height:68px;',
      'background:var(--bg-section,#F8FAFC);',
      'border:1.5px solid var(--border-base,#E2E8F0);',
      'border-radius:18px;display:flex;align-items:center;justify-content:center;',
      'margin:0 auto 20px;',
    '}',
    '.csearch-empty-icon svg{',
      'width:28px;height:28px;stroke:var(--text-muted,#94A3B8);',
      'fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;',
    '}',
    '.csearch-empty-title{',
      'font-family:"Poppins",sans-serif;font-size:1.3rem;font-weight:700;',
      'color:var(--text-dark,#1E293B);margin-bottom:8px;',
    '}',
    '.csearch-empty-desc{',
      'font-family:"Poppins",sans-serif;font-size:.9rem;',
      'color:var(--text-mid,#475569);margin-bottom:24px;line-height:1.65;',
    '}',
    '.csearch-empty-q{color:var(--sky-deep,#0EA5E9);font-weight:600;}',
    '.csearch-empty-btn{',
      'display:inline-flex;align-items:center;gap:6px;',
      'padding:10px 22px;border-radius:50px;',
      'border:1.5px solid var(--border-base,#E2E8F0);',
      'background:transparent;font-family:"Poppins",sans-serif;',
      'font-size:.83rem;font-weight:600;color:var(--text-dark,#1E293B);',
      'cursor:pointer;transition:background .2s,border-color .2s,color .2s;',
    '}',
    '.csearch-empty-btn:hover{',
      'background:var(--sky-mid,#38BDF8);border-color:var(--sky-mid,#38BDF8);color:#fff;',
    '}',

    /* Responsive */
    '@media(max-width:600px){',
      '.csearch-outer{padding:10px 20px;}',
      '.csearch-badge{display:none;}',
      '.csearch-input{font-size:.88rem;}',
    '}',
  ].join('');

  /* ══════════════════════════════════════════
     SVG
  ══════════════════════════════════════════ */
  var SVG_SEARCH =
    '<svg class="csearch-icon" viewBox="0 0 24 24">' +
    '<circle cx="11" cy="11" r="8"/>' +
    '<line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';

  var SVG_CLEAR =
    '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor"' +
    ' stroke-width="3" stroke-linecap="round">' +
    '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';

  var SVG_EMPTY =
    '<svg viewBox="0 0 24 24">' +
    '<circle cx="11" cy="11" r="8"/>' +
    '<line x1="21" y1="21" x2="16.65" y2="16.65"/>' +
    '<line x1="8" y1="11" x2="14" y2="11"/></svg>';

  /* ══════════════════════════════════════════
     CACHÉ DE TEXTO DE BÚSQUEDA
     Se construye una vez por producto para que la búsqueda sea instantánea
     incluso con catálogos grandes.
  ══════════════════════════════════════════ */
  var _cache = {};

  function getSearchText(id) {
    if (_cache[id] !== undefined) return _cache[id];
    /* Si DATA no existe o el id no está, buscar en el DOM del card */
    if (typeof DATA === 'undefined' || !DATA[id]) {
      var card = document.querySelector('.card[data-id="' + id + '"]');
      _cache[id] = card ? card.textContent.toLowerCase() : '';
      return _cache[id];
    }
    var d = DATA[id];
    var parts = [d.badge || '', d.series || '', d.model || '', d.type || ''];
    if (Array.isArray(d.specs)) {
      d.specs.forEach(function (s) { parts.push(s.k || '', s.v || ''); });
    }
    if (Array.isArray(d.fns)) {
      parts = parts.concat(d.fns);
    }
    _cache[id] = parts.join(' ').toLowerCase();
    return _cache[id];
  }

  /* ══════════════════════════════════════════
     LÓGICA DE FILTRADO
  ══════════════════════════════════════════ */
  function applyFilter(query) {
    var q = query.trim().toLowerCase();
    var cards = document.querySelectorAll('.card[data-id]');
    var totalVisible = 0;

    /* 1 — Mostrar / ocultar cards */
    cards.forEach(function (card) {
      var matched = q === '' || getSearchText(card.dataset.id).indexOf(q) !== -1;
      card.style.display = matched ? '' : 'none';
      if (matched) totalVisible++;
    });

    /* 2 — Mostrar / ocultar cabeceras de sección y divisores */
    document.querySelectorAll('.grid').forEach(function (grid) {
      /* contar cards visibles en esta sección */
      var vis = 0;
      grid.querySelectorAll('.card[data-id]').forEach(function (c) {
        if (c.style.display !== 'none') vis++;
      });
      var hide = (vis === 0 && q !== '');

      /* Buscar section-header anterior (puede haber dividers u otros elementos entre medio) */
      var prev = grid.previousElementSibling;
      while (prev) {
        if (prev.classList.contains('section-header') || prev.classList.contains('section-hd')) {
          prev.style.display = hide ? 'none' : '';
          break;
        }
        prev = prev.previousElementSibling;
      }

      /* Divisor siguiente */
      var next = grid.nextElementSibling;
      if (next && next.classList.contains('divider')) {
        next.style.display = hide ? 'none' : '';
      }
    });

    /* 3 — Mensaje sin resultados */
    var empty = document.getElementById('csearch-empty');
    if (empty) {
      if (totalVisible === 0 && q !== '') {
        var qEl = document.getElementById('csearch-empty-q');
        if (qEl) qEl.textContent = query.trim();
        empty.style.display = '';
      } else {
        empty.style.display = 'none';
      }
    }

    /* 4 — Badge contador */
    var badge = document.getElementById('csearch-badge');
    if (badge) {
      if (q === '') {
        badge.textContent = '';
        badge.className = 'csearch-badge';
      } else {
        badge.textContent = totalVisible + (totalVisible === 1 ? ' producto' : ' productos');
        badge.className = 'csearch-badge csearch-badge--active';
      }
    }

    /* 5 — Botón limpiar */
    var clearBtn = document.getElementById('csearch-clear');
    if (clearBtn) {
      clearBtn.style.display = q !== '' ? 'flex' : 'none';
    }
  }

  /* ══════════════════════════════════════════
     CONSTRUIR UI
  ══════════════════════════════════════════ */
  function build() {
    /* Requiere que existan cards en el DOM */
    if (!document.querySelector('.card[data-id]')) return;

    /* Inyectar CSS */
    var styleEl = document.createElement('style');
    styleEl.textContent = CSS;
    document.head.appendChild(styleEl);

    /* Buscar contenedor principal */
    var content = document.querySelector('main.content, .content');
    if (!content) return;

    /* ── Barra de búsqueda (insertada antes del contenido) ── */
    var outer = document.createElement('div');
    outer.id = 'csearch-outer';
    outer.className = 'csearch-outer';
    outer.setAttribute('role', 'search');
    outer.innerHTML =
      '<div class="csearch-inner">' +
        '<label class="csearch-box" for="csearch-input">' +
          SVG_SEARCH +
          '<input type="search" id="csearch-input" class="csearch-input"' +
          ' placeholder="Buscar producto, marca, modelo…"' +
          ' autocomplete="off" autocorrect="off" spellcheck="false"' +
          ' aria-label="Buscar en el catálogo">' +
          '<button class="csearch-clear" id="csearch-clear"' +
          ' aria-label="Limpiar búsqueda" style="display:none">' +
            SVG_CLEAR +
          '</button>' +
        '</label>' +
        '<div class="csearch-badge" id="csearch-badge"' +
        ' aria-live="polite" aria-atomic="true"></div>' +
      '</div>';

    content.parentNode.insertBefore(outer, content);

    /* ── Mensaje sin resultados (primer hijo del contenido) ── */
    var empty = document.createElement('div');
    empty.id = 'csearch-empty';
    empty.className = 'csearch-empty';
    empty.style.display = 'none';
    empty.innerHTML =
      '<div class="csearch-empty-icon">' + SVG_EMPTY + '</div>' +
      '<p class="csearch-empty-title">Sin resultados</p>' +
      '<p class="csearch-empty-desc">' +
        'No encontramos productos para &ldquo;' +
        '<span class="csearch-empty-q" id="csearch-empty-q"></span>&rdquo;' +
      '</p>' +
      '<button class="csearch-empty-btn" id="csearch-empty-btn">Limpiar búsqueda</button>';

    content.insertBefore(empty, content.firstElementChild);

    /* ── Eventos ── */
    var input    = document.getElementById('csearch-input');
    var clearBtn = document.getElementById('csearch-clear');
    var emptyBtn = document.getElementById('csearch-empty-btn');

    function clearSearch() {
      input.value = '';
      applyFilter('');
      input.focus();
    }

    /* Filtrado en tiempo real */
    input.addEventListener('input', function () { applyFilter(this.value); });

    /* Escape limpia la búsqueda */
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') clearSearch();
    });

    clearBtn.addEventListener('click', clearSearch);
    if (emptyBtn) emptyBtn.addEventListener('click', clearSearch);

    /* Preconstruir caché para todos los productos al cargar */
    document.querySelectorAll('.card[data-id]').forEach(function (card) {
      getSearchText(card.dataset.id);
    });
  }

  /* ══════════════════════════════════════════
     INIT
  ══════════════════════════════════════════ */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();
