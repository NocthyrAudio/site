/* ============================================
   NOCTHYR AUDIO - Favicon universal
   Aplica o favicon em todas as páginas via JS.
   EDIT: troque o caminho abaixo quando adicionar
   o arquivo definitivo em /assets.
   ============================================ */

(function () {
  'use strict';

  const FAVICON_PATH = 'assets/favicom.svg';
  const FAVICON_TYPE = 'image/svg+xml';

  let link = document.querySelector('link[rel="icon"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  link.type = FAVICON_TYPE;
  link.href = FAVICON_PATH;
})();
