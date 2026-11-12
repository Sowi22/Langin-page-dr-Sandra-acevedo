/* =========================================================
   VERSIÓN COMPUTADOR: movimiento con el scroll.
   No hace nada en pantallas de 960px o menos (el celular no cambia).
   ========================================================= */
(function () {
  const desktopMQ = window.matchMedia('(min-width: 961px)');
  if (!desktopMQ.matches) return;
  /* Si se pasa a tamaño celular (o al revés), se recarga para usar la versión correcta */
  desktopMQ.addEventListener('change', () => location.reload());

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Franjas infinitas: se duplica el contenido para que el movimiento no tenga cortes */
  document.querySelectorAll('.marquee__track').forEach((track) => {
    track.innerHTML += track.innerHTML;
  });
  document.querySelectorAll('.photo-strip__track').forEach((track) => {
    const original = track.innerHTML;
    track.innerHTML = original + original + original + original; /* 4 fotos x 4 = una mitad cubre la pantalla */
  });

  /* Cifras que cuentan hasta su valor cuando aparecen */
  const counters = document.querySelectorAll('.stat__num[data-count]');
  if ('IntersectionObserver' in window) {
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const end = parseInt(el.dataset.count, 10);
        const prefix = el.dataset.prefix || '';
        if (reduceMotion) { el.textContent = prefix + end; countObserver.unobserve(el); return; }
        const start = performance.now();
        const dur = 1600;
        const tick = (now) => {
          const t = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = prefix + Math.round(end * eased);
          if (t < 1) requestAnimationFrame(tick);
        };
        el.textContent = prefix + '0';
        requestAnimationFrame(tick);
        countObserver.unobserve(el);
      });
    }, { threshold: 0.6 });
    counters.forEach((c) => countObserver.observe(c));
  }

  /* Historias: la sección se queda fija y los videos avanzan de lado mientras se baja */
  const stories = document.getElementById('historias');
  const pin = stories && stories.querySelector('.stories__pin');
  const track = document.getElementById('storiesTrack');
  let distance = 0;
  let progressBar = null;
  if (pin && track) {
    const bar = document.createElement('div');
    bar.className = 'stories__progress';
    bar.innerHTML = '<span></span>';
    pin.appendChild(bar);
    progressBar = bar.firstElementChild;
  }
  function measureStories() {
    if (!stories || !track) return;
    track.style.transform = '';
    distance = Math.max(0, track.scrollWidth - window.innerWidth);
    stories.style.height = (window.innerHeight + distance) + 'px';
  }

  /* Portada: la foto baja más lento que el texto (profundidad) */
  const heroMedia = document.querySelector('.hero__media');
  const heroText = document.querySelector('.hero__text');

  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      if (!reduceMotion && y < vh * 1.2) {
        if (heroMedia) heroMedia.style.transform = `translate3d(0, ${y * 0.12}px, 0)`;
        if (heroText) {
          heroText.style.transform = `translate3d(0, ${y * -0.06}px, 0)`;
          heroText.style.opacity = String(Math.max(0, 1 - y / (vh * 0.9)));
        }
      }
      if (stories && track && distance > 0) {
        const top = stories.getBoundingClientRect().top;
        const p = Math.min(1, Math.max(0, -top / distance));
        track.style.transform = `translate3d(${-p * distance}px, 0, 0)`;
        if (progressBar) progressBar.style.transform = `scaleX(${p})`;
      }
      ticking = false;
    });
  }

  measureStories();
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => { measureStories(); onScroll(); });
  window.addEventListener('load', () => { measureStories(); onScroll(); });
})();
