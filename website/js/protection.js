(function () {
  'use strict';

  // Bloqueios de interface: servem apenas como dissuasão e não protegem
  // conteúdo publicado na internet contra usuários técnicos.
  document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
  });

  document.addEventListener('selectstart', function (event) {
    if (!event.target.closest('input, textarea, select')) event.preventDefault();
  });

  document.addEventListener('copy', function (event) {
    if (!event.target.closest('input, textarea')) event.preventDefault();
  });

  document.addEventListener('cut', function (event) {
    if (!event.target.closest('input, textarea')) event.preventDefault();
  });

  document.addEventListener('dragstart', function (event) {
    if (!event.target.closest('input, textarea')) event.preventDefault();
  });

  document.addEventListener('keydown', function (event) {
    const key = event.key.toLowerCase();
    const blocked =
      key === 'f12' ||
      (event.ctrlKey && event.shiftKey && ['i', 'j', 'c'].includes(key)) ||
      (event.ctrlKey && ['u', 's', 'p'].includes(key)) ||
      (event.metaKey && ['u', 's', 'p'].includes(key));

    if (blocked) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, true);

  // Bloqueia zoom sem bloquear a rolagem normal.
  window.addEventListener('wheel', function (event) {
    if (event.ctrlKey || event.metaKey) event.preventDefault();
  }, { passive: false });

  window.addEventListener('gesturestart', function (event) { event.preventDefault(); }, { passive: false });
  window.addEventListener('gesturechange', function (event) { event.preventDefault(); }, { passive: false });
  window.addEventListener('gestureend', function (event) { event.preventDefault(); }, { passive: false });

  document.addEventListener('touchmove', function (event) {
    if (event.touches.length > 1) event.preventDefault();
  }, { passive: false });
})();
