/* ============================================
   SNIPPET: comportamento do widget do WhatsApp
   (tooltip que aparece/some e o alerta vermelho)
   Edite os tempos (ms) conforme sua preferência.
   ============================================ */

(function () {
  'use strict';

  function init() {
    const msg1 = document.getElementById('msg1');
    const alertWapp = document.getElementById('alertWapp');
    if (!msg1) return;

    function showMsg() { msg1.style.visibility = 'visible'; }
    function hideMsg() { msg1.style.visibility = 'hidden'; }
    function showAlert() { if (alertWapp) alertWapp.style.visibility = 'visible'; }

    setTimeout(showMsg, 5000);
    setTimeout(hideMsg, 15000);
    setTimeout(showMsg, 25000);
    setTimeout(showAlert, 15000);

    msg1.addEventListener('click', hideMsg);
  }

  window.NocthyrWhatsAppWidget = { init: init };
})();
