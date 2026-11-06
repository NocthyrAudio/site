/* ============================================
   NOCTHYR AUDIO - Main JavaScript
   Anti-copy | Active nav link | Reveal on scroll |
   FAQ accordion | Contact form submission
   ============================================ */

(function () {
  'use strict';

  /* ----- Anti-copy / security mode ----- */
  document.addEventListener('contextmenu', function (e) { e.preventDefault(); });

  document.addEventListener('keydown', function (e) {
    const blockedKeys = ['c', 'C', 'x', 'X', 'a', 'A', 's', 'S', 'u', 'U', 'p', 'P'];
    const blockedDevtoolsKeys = ['I', 'i', 'J', 'j', 'C', 'c'];

    if (
      (e.ctrlKey && blockedKeys.includes(e.key)) ||
      (e.ctrlKey && e.shiftKey && blockedDevtoolsKeys.includes(e.key)) ||
      e.key === 'F12'
    ) {
      e.preventDefault();
    }
  });

  document.addEventListener('dragstart', function (e) { e.preventDefault(); });

  /* ----- Active nav link highlight (runs once the header is injected) ----- */
  function highlightActiveLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('#mainNav a').forEach(function (link) {
      const href = (link.getAttribute('href') || '').split('#')[0];
      if (href === currentPath || (currentPath === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }
  document.addEventListener('nocthyr:header-ready', highlightActiveLink);

  /* ----- FAQ accordion (reusable on any page that has .faq-item) ----- */
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.faq-question');
    if (!btn) return;

    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');

    document.querySelectorAll('.faq-item.open').forEach(function (el) {
      el.classList.remove('open');
    });

    if (!isOpen) item.classList.add('open');
  });

  /* ----- Reveal on scroll ----- */
  function initReveal() {
    const targets = document.querySelectorAll('.card, .service-card, .faq-item, .about-section');
    if (!targets.length || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    targets.forEach(function (el) { observer.observe(el); });
  }

  /* ----- Contact form (progressive enhancement over PHP form action) ----- */
  function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      let msg = document.getElementById('contactFormMsg');
      if (!msg) {
        msg = document.createElement('p');
        msg.id = 'contactFormMsg';
        msg.className = 'form-msg';
        form.insertAdjacentElement('afterend', msg);
      }

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'X-Requested-With': 'XMLHttpRequest' }
      })
        .then(function (res) { return res.ok; })
        .then(function (ok) {
          msg.textContent = ok
            ? (window.NocthyrI18n ? window.NocthyrI18n.t('footer.formSuccess') : 'Message sent successfully!')
            : (window.NocthyrI18n ? window.NocthyrI18n.t('footer.formError') : 'Something went wrong. Please try again.');
          msg.className = 'form-msg ' + (ok ? 'success' : 'error');
          if (ok) form.reset();
        })
        .catch(function () {
          msg.textContent = window.NocthyrI18n ? window.NocthyrI18n.t('footer.formError') : 'Something went wrong. Please try again.';
          msg.className = 'form-msg error';
        });
    });
  }
  document.addEventListener('nocthyr:footer-ready', initContactForm);

  document.addEventListener('DOMContentLoaded', initReveal);
})();
