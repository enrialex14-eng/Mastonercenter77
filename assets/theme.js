/* ══════════════════════════════════════════
   MASTONER CENTER — TEMA CLARO / OSCURO
   Carga este archivo en <head> para evitar
   el "flash" de fondo blanco en modo oscuro.
══════════════════════════════════════════ */

/* 1 — Aplica el tema guardado ANTES de renderizar */
(function () {
  var saved = localStorage.getItem('theme');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var theme = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
})();

/* 2 — Íconos SVG */
var _ICON_MOON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
var _ICON_SUN  = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';

/* 3 — Toggle */
function toggleTheme() {
  var html  = document.documentElement;
  var next  = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  _updateToggleIcons();
}

function _updateToggleIcons() {
  var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.querySelectorAll('.theme-btn').forEach(function (btn) {
    btn.innerHTML = isDark ? _ICON_SUN : _ICON_MOON;
    btn.setAttribute('aria-label', isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
  });
}

/* 4 — Inicializa iconos cuando el DOM está listo */
document.addEventListener('DOMContentLoaded', _updateToggleIcons);
