/* ============================================
   NOCTHYR AUDIO - Universal Header
   Injects the site header into #site-header.
   Used by every HTML page (index.html, privacy.html, etc).
   Requires: css/header.css
   ============================================ */

(function () {
  'use strict';

  const mount = document.getElementById('site-header');
  if (!mount) return;

  mount.innerHTML = `
    <header class="site-header">
      <div class="nav-wrap">
        <a href="index.html" class="logo">
          <img src="assets/logo.svg" alt="Nocthyr Audio">
        </a>

        <button class="menu-toggle" id="menuToggle" aria-label="Open menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>

        <ul class="nav" id="mainNav">
          <li><a href="index.html#home" data-i18n="nav.home">Home</a></li>
          <li><a href="index.html#services" data-i18n="nav.services">Services</a></li>
          <li><a href="index.html#discography" data-i18n="nav.discography">Discography</a></li>
          <li><a href="index.html#about" data-i18n="nav.about">About</a></li>
          <li><a href="index.html#contact" data-i18n="nav.contact">Contact</a></li>
          <!-- EDIT: coloque o link externo da Store -->
          <li><a href="https://sua-loja-externa.com" class="nav-store" target="_blank" rel="noopener" data-i18n="nav.store">Store 🛒</a></li>
          <li class="lang-switch">
            <button type="button" class="lang-btn" id="langEN" data-lang="en" aria-label="Switch to English">
              <span class="flag-emoji" aria-hidden="true"><img src="assets//images/us.svg"</span>
              <span class="sr-only">English</span>
            </button>
            <button type="button" class="lang-btn" id="langPT" data-lang="pt-BR" aria-label="Mudar para Português (Brasil)">
              <span class="flag-emoji" aria-hidden="true"><img src="assets/images/br.svg"</span>
              <span class="sr-only">Português</span>
            </button>
          </li>
        </ul>
      </div>
    </header>
  `;

  // ----- Mobile menu toggle -----
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      toggle.classList.toggle('active', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.classList.remove('active');
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // ----- Language buttons -----
  const langEN = document.getElementById('langEN');
  const langPT = document.getElementById('langPT');

  if (langEN && window.NocthyrI18n) {
    langEN.addEventListener('click', function () { window.NocthyrI18n.setLanguage('en'); });
  }
  if (langPT && window.NocthyrI18n) {
    langPT.addEventListener('click', function () { window.NocthyrI18n.setLanguage('pt-BR'); });
  }

  // Let the rest of the app know the header markup is ready
  document.dispatchEvent(new CustomEvent('nocthyr:header-ready'));
})();
