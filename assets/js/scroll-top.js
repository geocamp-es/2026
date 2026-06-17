// scroll-top.js — botón flotante para volver arriba
(function () {
  'use strict';

  const btn = document.querySelector('[data-scroll-top]');
  if (!btn) return;

  function update() {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    btn.dataset.visible = (total > 0 && scrolled / total > 0.05) ? 'true' : 'false';
  }

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.addEventListener('scroll', update, { passive: true });
  update();
})();