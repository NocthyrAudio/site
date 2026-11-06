/**
 * no-zoom.js
 * Bloqueia apenas o ZOOM (scroll do mouse com Ctrl, pinça e teclas)
 * A rolagem normal continua funcionando
 */

(function () {
  'use strict';

  // Bloqueia zoom com Ctrl + scroll do mouse
  window.addEventListener('wheel', function (e) {
    if (e.ctrlKey) e.preventDefault();
  }, { passive: false });

  // Bloqueia zoom com Ctrl + (+) (-) (=) (0)
  window.addEventListener('keydown', function (e) {
    if (e.ctrlKey && (e.key === '+' || e.key === '-' || e.key === '=' || e.key === '0')) {
      e.preventDefault();
    }
  }, { passive: false });

  // Bloqueia gesto de pinça (mobile / tablet)
  window.addEventListener('gesturestart', function (e) { e.preventDefault(); }, { passive: false });
  window.addEventListener('gesturechange', function (e) { e.preventDefault(); }, { passive: false });

  // Bloqueia multi-touch (pinça) em touch devices
  document.addEventListener('touchmove', function (e) {
    if (e.touches.length > 1) e.preventDefault();
  }, { passive: false });

})();
