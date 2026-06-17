// countdown.js — cuenta atrás leyendo data-event-date del HTML
(function () {
  'use strict';

  const timer = document.querySelector('[data-event-date]');
  if (!timer) return;

  const target = new Date(timer.dataset.eventDate).getTime();
  if (Number.isNaN(target)) return;

  const fields = {
    days: timer.querySelector('[data-unit="days"]'),
    hours: timer.querySelector('[data-unit="hours"]'),
    minutes: timer.querySelector('[data-unit="minutes"]'),
    seconds: timer.querySelector('[data-unit="seconds"]')
  };

  const pad = n => String(Math.max(0, n)).padStart(2, '0');

  function tick() {
    const diff = target - Date.now();
    if (diff <= 0) {
      fields.days.textContent = '00';
      fields.hours.textContent = '00';
      fields.minutes.textContent = '00';
      fields.seconds.textContent = '00';
      return;
    }
    const totalSeconds = Math.floor(diff / 1000);
    fields.days.textContent = pad(Math.floor(totalSeconds / 86400));
    fields.hours.textContent = pad(Math.floor((totalSeconds % 86400) / 3600));
    fields.minutes.textContent = pad(Math.floor((totalSeconds % 3600) / 60));
    fields.seconds.textContent = pad(totalSeconds % 60);
  }

  tick();
  setInterval(tick, 1000);
})();