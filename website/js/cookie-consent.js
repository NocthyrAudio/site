/* ============================================
   NOCTHYR AUDIO - Cookie consent bar
   Styling lives in css/cookie-consent.css
   ============================================ */

(function () {
  'use strict';

  if (localStorage.getItem('cookie_consent')) return;

  function render() {
    const t = window.NocthyrI18n ? window.NocthyrI18n.t.bind(window.NocthyrI18n) : function (k, fallback) { return fallback; };

    const bar = document.createElement('div');
    bar.id = 'cookie-consent';
    bar.innerHTML = `
      <p data-i18n="cookie.text">
        We use cookies to improve your experience and analyze site traffic.
        By continuing you agree to our use of cookies.
        <a href="privacy.html" data-i18n="cookie.link">Privacy Policy</a>
      </p>
      <div class="btn-group">
        <button id="cookie-reject" data-i18n="cookie.reject">Reject</button>
        <button id="cookie-accept" data-i18n="cookie.accept">Accept</button>
      </div>
    `;
    document.body.appendChild(bar);

    document.getElementById('cookie-accept').addEventListener('click', function () {
      localStorage.setItem('cookie_consent', 'accepted');
      bar.remove();
    });

    document.getElementById('cookie-reject').addEventListener('click', function () {
      localStorage.setItem('cookie_consent', 'rejected');
      bar.remove();
    });

    if (window.NocthyrI18n) window.NocthyrI18n.translatePage();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
