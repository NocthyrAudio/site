/* ============================================
   NOCTHYR AUDIO - Snippets loader
   Loads the personalized HTML snippets kept in /snippets
   (e.g. the WhatsApp floating button) into the page.
   Add new snippets here as they are created.
   ============================================ */

(function () {
  'use strict';

  function loadSnippet(mountId, url, onReady) {
    const mount = document.getElementById(mountId);
    if (!mount) return;

    fetch(url)
      .then(function (res) { return res.ok ? res.text() : ''; })
      .then(function (html) {
        mount.innerHTML = html;
        if (window.NocthyrI18n) window.NocthyrI18n.translatePage();
        if (typeof onReady === 'function') onReady();
      })
      .catch(function () { /* snippet indisponível: falha silenciosa */ });
  }

  document.addEventListener('DOMContentLoaded', function () {
    loadSnippet('whatsapp-widget-slot', 'snippets/whatsapp-widget.html', function () {
      if (window.NocthyrWhatsAppWidget) window.NocthyrWhatsAppWidget.init();
    });
  });
})();
