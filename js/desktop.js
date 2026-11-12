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
  /* Las fotos de la tira solo se descargan en computador (en el celular no existen) */
  document.querySelectorAll('.photo-strip img[data-src]').forEach((img) => { img.src = img.dataset.src; img.removeAttribute('data-src'); });
  document.querySelectorAll('.photo-strip__track').forEach((track) => {
    /* 17 fotos distintas: se copian una sola vez para que el ciclo no tenga cortes;
       la tira mide más del doble de la pantalla, así nunca se ve la misma foto dos veces a la vez */
    track.innerHTML += track.innerHTML;
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

  /* Historias: carrusel que se mueve con las flechas, arrastrando con el mouse o con el trackpad.
     No detiene el scroll de la página. */
  const stories = document.getElementById('historias');
  const pin = stories && stories.querySelector('.stories__pin');
  const track = document.getElementById('storiesTrack');
  if (pin && track) {
    const bar = document.createElement('div');
    bar.className = 'stories__progress';
    bar.innerHTML = '<span></span>';
    pin.appendChild(bar);
    const fill = bar.firstElementChild;
    const updateBar = () => {
      const max = track.scrollWidth - track.clientWidth;
      const p = max > 0 ? track.scrollLeft / max : 0;
      fill.style.transform = 'scaleX(' + Math.max(0.08, p) + ')';
    };
    track.addEventListener('scroll', updateBar, { passive: true });
    window.addEventListener('resize', updateBar);
    updateBar();

    /* Arrastrar con el mouse */
    let down = false, startX = 0, startLeft = 0, moved = false;
    track.addEventListener('pointerdown', (e) => {
      if (e.pointerType !== 'mouse') return;
      down = true; moved = false; startX = e.clientX; startLeft = track.scrollLeft;
    });
    window.addEventListener('pointermove', (e) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 6) { moved = true; track.classList.add('is-dragging'); }
      if (moved) track.scrollLeft = startLeft - dx;
    });
    window.addEventListener('pointerup', () => {
      if (!down) return;
      down = false;
      setTimeout(() => track.classList.remove('is-dragging'), 0);
    });
    /* Si se arrastró, no se abre el video */
    track.addEventListener('click', (e) => { if (moved) { e.stopPropagation(); e.preventDefault(); moved = false; } }, true);
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

      ticking = false;
    });
  }

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  
})();
