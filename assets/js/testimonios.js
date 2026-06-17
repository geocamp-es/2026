// testimonios.js — carrusel accesible sin dependencias
(function () {
  'use strict';

  const quoteEl = document.querySelector('[data-testimonial-active]');
  const thumbs = document.querySelectorAll('[data-testimonial-thumb]');
  if (!quoteEl || thumbs.length === 0) return;

  let index = 0;
  let timerId = null;

  function show(i) {
    index = (i + thumbs.length) % thumbs.length;
    const text = thumbs[index].dataset.testimonialText || '';
    quoteEl.textContent = text;
    thumbs.forEach((btn, j) => {
      btn.setAttribute('aria-current', j === index ? 'true' : 'false');
    });
  }

  function start() {
    if (timerId) return;
    timerId = setInterval(() => show(index + 1), 6000);
  }

  function stop() {
    if (timerId) { clearInterval(timerId); timerId = null; }
  }

  thumbs.forEach((btn, i) => {
    btn.addEventListener('click', () => { show(i); stop(); start(); });
  });

  quoteEl.addEventListener('mouseenter', stop);
  quoteEl.addEventListener('mouseleave', start);

  show(0);
  start();
})();