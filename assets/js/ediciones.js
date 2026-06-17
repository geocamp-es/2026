// ediciones.js — renderiza la lista desde ediciones.json
(function () {
  'use strict';

  const list = document.getElementById('ediciones-list');
  if (!list) return;

  fetch('ediciones.json')
    .then(r => {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    })
    .then(data => {
      list.innerHTML = data
        .map(e => `<li><a href="${e.url}" target="_blank" rel="noopener">${e.city} ${e.year}</a></li>`)
        .join('');
    })
    .catch(() => { /* el <noscript> fallback o el contenido HTML inicial permanecen visibles */ });
})();