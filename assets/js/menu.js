// menu.js — toggle del menú lateral accesible
(function () {
  'use strict';

  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');
  if (!toggle || !menu) return;

  function setOpen(open) {
    menu.dataset.open = open ? 'true' : 'false';
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) menu.removeAttribute('hidden'); else menu.setAttribute('hidden', '');
  }

  toggle.addEventListener('click', () => {
    setOpen(menu.getAttribute('hidden') !== null);
  });

  menu.addEventListener('click', e => {
    if (e.target.tagName === 'A') setOpen(false);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') setOpen(false);
  });
})();