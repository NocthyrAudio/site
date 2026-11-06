/* ============================================
   NOCTHYR AUDIO - Universal Footer
   Injects the site footer into #site-footer.
   Used by every HTML page (index.html, privacy.html, etc).
   Requires: css/footer.css
   ============================================ */

(function () {
  'use strict';

  const mount = document.getElementById('site-footer');
  if (!mount) return;

  mount.innerHTML = `
    <footer class="site-footer" id="contact">
      <div class="footer-inner">

        <div class="footer-brand">
          <a href="index.html" class="logo">
            <img src="assets/logo.svg" alt="Nocthyr Audio" style="height:36px">
          </a>
          <p data-i18n="footer.brandText">Original music, sound resources and tools for creative production.</p>
        </div>

        <div>
          <h4 data-i18n="footer.navigation">Navigation</h4>
          <ul>
            <li><a href="index.html#home" data-i18n="nav.home">Home</a></li>
            <li><a href="index.html#services" data-i18n="nav.services">Services</a></li>
            <li><a href="index.html#discography" data-i18n="nav.discography">Discography</a></li>
            <li><a href="index.html#about" data-i18n="nav.about">About</a></li>
          </ul>
        </div>

        <div>
          <h4 data-i18n="footer.services">Services</h4>
          <ul>
            <li><a href="index.html#services" data-i18n="footer.mixing">Mixing</a></li>
            <li><a href="index.html#services" data-i18n="footer.mastering">Mastering</a></li>
            <li><a href="index.html#services" data-i18n="footer.soundtracks">Original Soundtracks</a></li>
          </ul>
        </div>

        <div class="contact-block" id="contactBlock">
          <h4 data-i18n="footer.contact">Contact</h4>

          <form class="contact-form" id="contactForm" action="php/enviar.php" method="POST" novalidate>
            <input type="text" name="nome" id="cf-nome" data-i18n-placeholder="footer.formName" placeholder="Name" required>
            <input type="email" name="email" id="cf-email" data-i18n-placeholder="footer.formEmail" placeholder="E-mail" required>
            <textarea name="mensagem" id="cf-mensagem" data-i18n-placeholder="footer.formMessage" placeholder="Message" required></textarea>
            <button type="submit" class="btn btn-primary" data-i18n="footer.formSend">Send</button>
          </form>

          <ul>
            <li><a href="mailto:nocthyraudio@gmail.com">nocthyraudio@gmail.com</a></li>
            <li><a href="privacy.html" data-i18n="footer.privacy">Privacy Policy</a></li>
          </ul>
        </div>

      </div>

      <div class="footer-bottom">
        <span>&copy; <span id="year"></span> Nocthyr Audio. <span data-i18n="footer.rights">All rights reserved.</span></span>
        <p class="created-by">Created by <a href="https://ln.ki/jgr77" target="_blank" rel="noopener">jgrbyte 🎸</a></p>
      </div>
    </footer>
  `;

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  document.dispatchEvent(new CustomEvent('nocthyr:footer-ready'));
})();
