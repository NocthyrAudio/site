/* ============================================
   NOCTHYR AUDIO - i18n (EN / PT-BR)
   The official site language is English (en).
   Clicking the flag icons in the header switches
   all elements marked with data-i18n / data-i18n-html /
   data-i18n-placeholder between English and Português.
   No external translation service is used.
   ============================================ */

(function () {
  'use strict';

  const STORAGE_KEY = 'nocthyr_lang';
  const DEFAULT_LANG = 'en';

  const dict = {
    en: {
      'nav.home': 'Home',
      'nav.services': 'Services',
      'nav.discography': 'Discography',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'nav.store': 'Store 🛒',

      'hero.badge': 'Nocthyr Audio',
      'hero.title': 'Sound that <span>moves</span> the story',
      'hero.subtitle': 'Professional mixing, mastering and original soundtracks crafted for film, games and digital media.',
      'hero.button': 'Learn more',

      'services.title': 'Services',
      'services.desc': 'Professional audio solutions tailored for your projects. From mixing to original scores.',
      'services.mixing.title': 'Mixing',
      'services.mixing.desc': 'Detailed mixing that respects dynamics and character. Clear balance, space and focus so every element sits — exactly where it should.',
      'services.mastering.title': 'Mastering',
      'services.mastering.desc': 'Mastering prepared for distribution without crushing dynamics. Consistent loudness across platforms while preserving artistic intent.',
      'services.soundtracks.title': 'Original Soundtracks',
      'services.soundtracks.desc': 'Composition and production of exclusive scores for film, games, advertising and digital content — from briefing to final delivery.',
      'services.hire': 'Hire 💼',

      'discography.title': 'Original Soundtracks',
      'discography.desc': 'Nocthyr Audio Track Collection — listen on streaming platforms or purchase the high-quality album!',
      'album.listen': 'Listen ▶️',
      'album.buy': 'Buy the album 🛒',

      'album.1.title': 'Distant Mountains - Remastered',
      'album.1.desc': 'Dark RPG soundtrack.',
      'album.2.title': 'Elevated Aurora - Remastered',
      'album.2.desc': 'Dark RPG soundtrack.',
      'album.3.title': 'Event Horizon - Remastered',
      'album.3.desc': 'Cinematic suspense soundtrack.',
      'album.4.title': 'Turkish Tea',
      'album.4.desc': 'Novel drama soundtrack.',
      'album.5.title': 'Iron Pulse',
      'album.5.desc': 'Electronic sci-fi soundtrack.',
      'album.6.title': 'Lost Kingdom',
      'album.6.desc': 'Epic RPG soundtrack.',
      'album.7.title': 'Tavern Echoes',
      'album.7.desc': 'Dark RPG soundtrack.',

      'about.label': 'About',
      'about.title': 'Behind Nocthyr Audio',
      'about.text1': 'Nocthyr Audio was created by <strong>Jhonatan Gomes Ramos</strong>. What started as a quiet passion for audio quality has grown into a place where thoughtful solutions meet real human needs.',
      'about.text2': 'Every product and service is shaped by the same simple idea: technology works best when it stays close to the people who use it. Nocthyr exists to offer clear, reliable audio solutions without the noise.',

      'footer.brandText': 'Original music, sound resources and tools for creative production.',
      'footer.navigation': 'Navigation',
      'footer.services': 'Services',
      'footer.mixing': 'Mixing',
      'footer.mastering': 'Mastering',
      'footer.soundtracks': 'Original Soundtracks',
      'footer.contact': 'Contact',
      'footer.formName': 'Name',
      'footer.formEmail': 'E-mail',
      'footer.formMessage': 'Message',
      'footer.formSend': 'Send',
      'footer.formSuccess': 'Message sent successfully!',
      'footer.formError': 'Something went wrong. Please try again.',
      'footer.privacy': 'Privacy Policy',
      'footer.rights': 'All rights reserved.',

      'cookie.text': 'We use cookies to improve your experience and analyze site traffic. By continuing you agree to our use of cookies.',
      'cookie.link': 'Privacy Policy',
      'cookie.reject': 'Reject',
      'cookie.accept': 'Accept',

      'whatsapp.tooltip': 'Hello, can I help you?'
    },

    'pt-BR': {
      'nav.home': 'Início',
      'nav.services': 'Serviços',
      'nav.discography': 'Discografia',
      'nav.about': 'Sobre',
      'nav.contact': 'Contato',
      'nav.store': 'Loja 🛒',

      'hero.badge': 'Nocthyr Audio',
      'hero.title': 'O som que <span>move</span> a história',
      'hero.subtitle': 'Mixagem, masterização e trilhas sonoras originais profissionais, feitas para filmes, jogos e mídias digitais.',
      'hero.button': 'Saiba mais',

      'services.title': 'Serviços',
      'services.desc': 'Soluções de áudio profissionais feitas sob medida para o seu projeto. Da mixagem às trilhas originais.',
      'services.mixing.title': 'Mixagem',
      'services.mixing.desc': 'Mixagem detalhada que respeita a dinâmica e o caráter da música. Equilíbrio, espaço e foco claros para que cada elemento fique exatamente onde deve.',
      'services.mastering.title': 'Masterização',
      'services.mastering.desc': 'Masterização preparada para distribuição sem esmagar a dinâmica. Volume consistente entre plataformas, preservando a intenção artística.',
      'services.soundtracks.title': 'Trilhas Sonoras Originais',
      'services.soundtracks.desc': 'Composição e produção de trilhas exclusivas para filmes, jogos, publicidade e conteúdo digital — do briefing à entrega final.',
      'services.hire': 'Contratar 💼',

      'discography.title': 'Trilhas Sonoras Originais',
      'discography.desc': 'Coleção de faixas da Nocthyr Audio — ouça nas plataformas de streaming ou compre o álbum em alta qualidade!',
      'album.listen': 'Ouvir ▶️',
      'album.buy': 'Comprar o álbum 🛒',

      'album.1.title': 'Distant Mountains - Remasterizado',
      'album.1.desc': 'Trilha sonora Dark RPG.',
      'album.2.title': 'Elevated Aurora - Remasterizado',
      'album.2.desc': 'Trilha sonora Dark RPG.',
      'album.3.title': 'Event Horizon - Remasterizado',
      'album.3.desc': 'Trilha sonora de suspense cinematográfico.',
      'album.4.title': 'Turkish Tea',
      'album.4.desc': 'Trilha sonora de drama.',
      'album.5.title': 'Iron Pulse',
      'album.5.desc': 'Trilha sonora eletrônica de ficção científica.',
      'album.6.title': 'Lost Kingdom',
      'album.6.desc': 'Trilha sonora épica de RPG.',
      'album.7.title': 'Tavern Echoes',
      'album.7.desc': 'Trilha sonora Dark RPG.',

      'about.label': 'Sobre',
      'about.title': 'Por trás da Nocthyr Audio',
      'about.text1': 'A Nocthyr Audio foi criada por <strong>Jhonatan Gomes Ramos</strong>. O que começou como uma paixão discreta por qualidade de áudio se transformou em um lugar onde soluções bem pensadas encontram necessidades humanas reais.',
      'about.text2': 'Cada produto e serviço segue a mesma ideia simples: a tecnologia funciona melhor quando permanece próxima de quem a utiliza. A Nocthyr existe para oferecer soluções de áudio claras e confiáveis, sem ruído.',

      'footer.brandText': 'Música original, recursos sonoros e ferramentas para produção criativa.',
      'footer.navigation': 'Navegação',
      'footer.services': 'Serviços',
      'footer.mixing': 'Mixagem',
      'footer.mastering': 'Masterização',
      'footer.soundtracks': 'Trilhas Sonoras Originais',
      'footer.contact': 'Contato',
      'footer.formName': 'Nome',
      'footer.formEmail': 'E-mail',
      'footer.formMessage': 'Mensagem',
      'footer.formSend': 'Enviar',
      'footer.formSuccess': 'Mensagem enviada com sucesso!',
      'footer.formError': 'Algo deu errado. Tente novamente.',
      'footer.privacy': 'Política de Privacidade',
      'footer.rights': 'Todos os direitos reservados.',

      'cookie.text': 'Usamos cookies para melhorar sua experiência e analisar o tráfego do site. Ao continuar, você concorda com o uso de cookies.',
      'cookie.link': 'Política de Privacidade',
      'cookie.reject': 'Recusar',
      'cookie.accept': 'Aceitar',

      'whatsapp.tooltip': 'Olá, posso ajudar?'
    }
  };

  function getLanguage() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function t(key) {
    const lang = getLanguage();
    return (dict[lang] && dict[lang][key]) || (dict[DEFAULT_LANG] && dict[DEFAULT_LANG][key]) || key;
  }

  function translatePage() {
    const lang = getLanguage();
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const value = t(key);
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      el.setAttribute('alt', t(el.getAttribute('data-i18n-alt')));
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  function setLanguage(lang) {
    if (!dict[lang]) return;
    localStorage.setItem(STORAGE_KEY, lang);
    translatePage();
  }

  document.addEventListener('nocthyr:header-ready', translatePage);
  document.addEventListener('nocthyr:footer-ready', translatePage);
  document.addEventListener('DOMContentLoaded', translatePage);

  window.NocthyrI18n = { t, setLanguage, translatePage, getLanguage };
})();
