if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  const glow = document.querySelector('.cursor-glow');
  let ticking = false;
  let lastX = 0, lastY = 0;

  window.addEventListener('mousemove', (e) => {
    lastX = e.clientX;
    lastY = e.clientY;
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => {
        if (glow) {
          glow.style.setProperty('--mx', lastX + 'px');
          glow.style.setProperty('--my', lastY + 'px');
        }
        ticking = false;
      });
    }
  }, { passive: true });

  document.querySelectorAll('.proc-card, .hero__form').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--sx', (e.clientX - r.left) + 'px');
      el.style.setProperty('--sy', (e.clientY - r.top) + 'px');
    }, { passive: true });
  });
}

const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }
}

function wireCarouselDots(trackId, dotsSelector) {
  const track = document.getElementById(trackId);
  const dots = document.querySelectorAll(dotsSelector);
  if (!track || !dots.length) return;
  track.addEventListener('scroll', () => {
    const cards = [...track.children];
    const center = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let min = Infinity;
    cards.forEach((card, i) => {
      const dist = Math.abs(card.offsetLeft + card.offsetWidth / 2 - center);
      if (dist < min) { min = dist; closest = i; }
    });
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === closest));
  }, { passive: true });
}
wireCarouselDots('procTrack', '#procDots .dot');
wireCarouselDots('trustTrack', '#trustDots .dot');

/* Pequeño "vistazo" automático en el carrusel de razones, solo en celular,
   para que la persona entienda que se puede deslizar y hay más información */
const trustTrack = document.getElementById('trustTrack');
if (trustTrack && 'IntersectionObserver' in window) {
  const peekObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (window.matchMedia('(max-width: 640px)').matches) {
          setTimeout(() => {
            trustTrack.scrollTo({ left: 70, behavior: 'smooth' });
            setTimeout(() => trustTrack.scrollTo({ left: 0, behavior: 'smooth' }), 700);
          }, 500);
        }
        peekObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  peekObserver.observe(trustTrack);
}

/* Globo + barra de progreso + navegación lateral.
   Cada sección tiene una posición del globo (en % del viewport) y una escala;
   la sección activa es la que tiene su centro más cerca del centro de la pantalla. */
const globe = document.querySelector('.globe');
const scrollBar = document.getElementById('scrollBar');
const sections = [...document.querySelectorAll('[data-section]')];
const navButtons = [...document.querySelectorAll('.side-nav button')];
const mobileQuery = window.matchMedia('(max-width: 640px)');

/* El globo solo se ve en la sección oscura de Turismo; en las demás viaja
   a su posición con opacidad 0, así aparece y se va con movimiento. */
const globePositions = {
  desktop: [
    { left: 94, top: 10, scale: .6,  opacity: 0 },    // Inicio
    { left: 8,  top: 85, scale: .7,  opacity: 0 },    // Tratamientos
    { left: 50, top: 50, scale: 2,   opacity: .5 },   // Turismo odontológico
    { left: 92, top: 85, scale: .8,  opacity: 0 },    // Sedes
  ],
  mobile: [
    { left: 94, top: 6,  scale: .5,  opacity: 0 },
    { left: 6,  top: 94, scale: .5,  opacity: 0 },
    { left: 50, top: 50, scale: 1.3, opacity: .4 },
    { left: 94, top: 92, scale: .5,  opacity: 0 },
  ],
};

let activeIndex = -1;

function setActiveSection(index) {
  if (index === activeIndex) return;
  activeIndex = index;
  const pos = (mobileQuery.matches ? globePositions.mobile : globePositions.desktop)[index];
  if (globe && pos) {
    globe.style.transform = `translate3d(${pos.left}vw, ${pos.top}vh, 0) translate3d(-50%, -50%, 0) scale3d(${pos.scale}, ${pos.scale}, 1)`;
    globe.style.opacity = pos.opacity;
  }
  navButtons.forEach((btn, i) => btn.classList.toggle('is-active', i === index));
}

function updateScroll() {
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? Math.min(Math.max(window.scrollY / docHeight, 0), 1) : 0;
  if (scrollBar) scrollBar.style.transform = `scaleX(${progress})`;

  const viewportCenter = window.innerHeight / 2;
  let closest = 0;
  let min = Infinity;
  sections.forEach((section, i) => {
    const r = section.getBoundingClientRect();
    // Distancia 0 si el centro de la pantalla cae dentro de la sección
    const dist = r.top <= viewportCenter && r.bottom >= viewportCenter
      ? 0
      : Math.min(Math.abs(r.top - viewportCenter), Math.abs(r.bottom - viewportCenter));
    if (dist < min) { min = dist; closest = i; }
  });
  setActiveSection(closest);
}

let scrollTicking = false;
window.addEventListener('scroll', () => {
  if (!scrollTicking) {
    scrollTicking = true;
    requestAnimationFrame(() => {
      updateScroll();
      scrollTicking = false;
    });
  }
}, { passive: true });
window.addEventListener('resize', () => { activeIndex = -1; updateScroll(); });
updateScroll();

navButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    document.getElementById(btn.dataset.target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* Formulario: mientras la clínica no tenga plataforma de formularios,
   arma el mensaje y abre WhatsApp con la línea principal de agendamiento. */
const leadForm = document.getElementById('leadForm');
const formError = document.getElementById('formError');
if (leadForm) {
  leadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const required = [...leadForm.querySelectorAll('[required]')];
    let valid = true;
    required.forEach((field) => {
      const ok = field.value.trim() !== '';
      field.classList.toggle('is-invalid', !ok);
      if (!ok) valid = false;
    });
    formError.hidden = valid;
    if (!valid) return;

    const data = new FormData(leadForm);
    const lines = [
      'Hola, quiero agendar una valoración en Excellent Dental Studio.',
      `Nombre: ${data.get('nombre').trim()}`,
      `Teléfono: ${data.get('telefono').trim()}`,
      `Tratamiento de interés: ${data.get('tratamiento')}`,
    ];
    const mensaje = data.get('mensaje').trim();
    if (mensaje) lines.push(`Mensaje: ${mensaje}`);
    window.open('https://wa.me/573147623636?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener');
  });

  leadForm.querySelectorAll('[required]').forEach((field) => {
    field.addEventListener('input', () => field.classList.remove('is-invalid'));
    field.addEventListener('change', () => field.classList.remove('is-invalid'));
  });
}
