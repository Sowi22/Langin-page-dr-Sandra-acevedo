/* Idiomas: español e inglés. La primera visita muestra la pantalla de selección;
   después se recuerda la elección y el botón ES/EN del encabezado permite cambiarla. */
const translations = {
  es: {
    'page-title': 'Excellent Dental Studio | Diseño de sonrisa en Medellín',
    'page-description': 'Excellent Dental Studio, odontología integral y estética en Medellín. Dra. Sandra Acevedo, expertos en diseño de sonrisa digital. Agenda tu valoración.',
    'lang-toggle-label': 'EN',
    'nav-aria': 'Secciones',
    'nav-1': 'Inicio', 'nav-1-aria': 'Ir a Inicio',
    'nav-2': 'Tratamientos', 'nav-2-aria': 'Ir a Tratamientos',
    'nav-3': 'Agenda tu valoración', 'nav-3-aria': 'Ir a Agenda tu valoración',
    'nav-4': 'Turismo odontológico', 'nav-4-aria': 'Ir a Turismo odontológico',
    'nav-5': 'Sedes', 'nav-5-aria': 'Ir a Sedes',
    'hero-eyebrow': 'Odontología integral y estética &middot; Medellín',
    'hero-h1': 'Diseñamos sonrisas que elevan tu imagen, tu seguridad y tu <span class="accent">presencia.</span>',
    'hero-sub': 'Más de 20 años creando sonrisas únicas, naturales y totalmente personalizadas en Medellín.',
    'doctor-name': 'Dra. Sandra Acevedo',
    'doctor-title': 'Especialista en diseño de sonrisa',
    'doctor-photo-alt': 'Dra. Sandra Acevedo en Excellent Dental Studio',
    'stat-1-title': '+20 años', 'stat-1-text': 'Creando sonrisas en Medellín',
    'stat-2-title': 'Diseño digital', 'stat-2-text': 'Expertos en diseño de sonrisa digital',
    'stat-3-title': '2 sedes en Medellín', 'stat-3-text': 'Laureles y El Poblado',
    'stat-4-title': 'Turismo odontológico', 'stat-4-text': 'Pacientes nacionales e internacionales',
    'cta': 'Agendar valoración',
    'proc-title': '¿Qué deseas transformar?',
    'proc-sub': 'Sonrisas personalizadas y naturales, que resaltan tu verdadera esencia.',
    'proc-1-title': 'Diseño de sonrisa en cerámica', 'proc-1-text': 'Laminados cerámicos de estética premium y durabilidad superior.',
    'proc-2-title': 'Micro diseño de sonrisa', 'proc-2-text': 'Resultados sutiles y armónicos con técnicas mínimamente invasivas.',
    'proc-3-title': 'Rehabilitación oral', 'proc-3-text': 'Prótesis fija y láminas cerámicas para devolver función y armonía.',
    'proc-3-alt': 'Resultado de rehabilitación oral en Excellent Dental Studio',
    'form-eyebrow': 'Agenda tu',
    'form-title': 'Valoración sin compromiso',
    'form-name': 'Nombre',
    'form-phone': 'Teléfono / WhatsApp',
    'form-treatment': 'Tratamiento de interés',
    'form-select': 'Selecciona una opción',
    'opt-1': 'Diseño de sonrisa en cerámica',
    'opt-2': 'Diseño de sonrisa en resina',
    'opt-3': 'Micro diseño de sonrisa',
    'opt-4': 'Rehabilitación oral',
    'opt-5': 'Prótesis dental',
    'opt-6': 'Ortodoncia invisible',
    'opt-7': 'Cirugía oral',
    'opt-8': 'Valoración general',
    'form-message': 'Mensaje <em>(opcional)</em>',
    'form-error': 'Completa tu nombre, teléfono y el tratamiento de interés.',
    'trust-data': 'Tus datos están protegidos.',
    'trust-payment': 'Planes de pago cómodos.',
    'why-title': '¿Por qué elegir Excellent Dental Studio?',
    'why-1-title': '+20 años de experiencia',
    'why-1-text': 'La Dra. Sandra Acevedo cuida cada detalle con excelencia, compromiso y pasión por la estética dental.',
    'why-2-title': 'Diseño adaptado a tu rostro',
    'why-2-text': 'Analizamos la forma de tu rostro, el ancho real de tu sonrisa y el color perfecto para tu piel.',
    'why-3-title': 'Materiales de alta calidad',
    'why-3-text': 'Trabajamos con <strong>cerámica</strong> o <strong>resina</strong> para lograr resultados duraderos, armónicos y naturales.',
    'why-4-title': 'Odontología integral',
    'why-4-text': 'Cirugía oral, prótesis, rehabilitación oral, ortodoncia invisible y estética dental en un mismo lugar.',
    'why-5-title': 'Garantía y seguimiento',
    'why-5-text': 'Diagnóstico personalizado, garantía y seguimiento profesional en cada etapa de tu tratamiento.',
    'tour-eyebrow': 'Turismo odontológico',
    'tour-title': 'Tu sonrisa, en manos expertas <span class="accent">desde cualquier lugar.</span>',
    'tour-text': 'Seguimos impactando la odontología en Medellín y en el mundo. Recibimos pacientes nacionales e internacionales con la misma calidad, profesionalismo y calidez humana de siempre.',
    'loc-title': 'Nuestras sedes en Medellín',
    'loc-1': 'Sede El Poblado',
    'loc-1-addr': 'Edificio Xerox, Cra. 43A #15 Sur-15<br>Consultorio 903',
    'loc-2': 'Sede Laureles',
    'footer-text': 'Odontología integral y estética &middot; @excellentdental.studio',
    'wa-greeting': 'Hola, quiero agendar una valoración en Excellent Dental Studio.',
    'wa-name': 'Nombre',
    'wa-phone': 'Teléfono',
    'wa-treatment': 'Tratamiento de interés',
    'wa-message': 'Mensaje',
    'nav-6': 'Antes y después', 'nav-6-aria': 'Ir a Antes y después',
    'nav-7': 'Historias reales', 'nav-7-aria': 'Ir a Historias reales',
    'ba-title': 'Antes y después',
    'ba-sub': 'Desliza para ver el cambio.',
    'ba-before': 'Antes', 'ba-after': 'Después',
    'ba-before-alt': 'Sonrisa antes del tratamiento', 'ba-after-alt': 'Sonrisa después del tratamiento',
    'ba-range-aria': 'Comparar antes y después',
    'ba-1': 'Caso real', 'ba-2': 'Carillas de porcelana',
    'gallery-alt': 'Resultado real de Excellent Dental Studio',
    'stories-title': 'Historias reales',
    'story-1': 'Transformación', 'story-2': 'Sito Pérez · España', 'story-3': 'Ángel Santana · Tampa',
    'story-4': 'Turismo dental', 'story-5': 'Nuestra clínica',
    'close-aria': 'Cerrar',
  },
  en: {
    'page-title': 'Excellent Dental Studio | Smile Design in Medellín, Colombia',
    'page-description': 'Excellent Dental Studio, comprehensive and cosmetic dentistry in Medellín, Colombia. Dr. Sandra Acevedo, experts in digital smile design. Book your consultation.',
    'lang-toggle-label': 'ES',
    'nav-aria': 'Sections',
    'nav-1': 'Home', 'nav-1-aria': 'Go to Home',
    'nav-2': 'Treatments', 'nav-2-aria': 'Go to Treatments',
    'nav-3': 'Book your consultation', 'nav-3-aria': 'Go to Book your consultation',
    'nav-4': 'Dental tourism', 'nav-4-aria': 'Go to Dental tourism',
    'nav-5': 'Locations', 'nav-5-aria': 'Go to Locations',
    'hero-eyebrow': 'Comprehensive &amp; cosmetic dentistry &middot; Medellín',
    'hero-h1': 'We design smiles that elevate your image, your confidence and your <span class="accent">presence.</span>',
    'hero-sub': 'Over 20 years creating unique, natural and fully personalized smiles in Medellín, Colombia.',
    'doctor-name': 'Dr. Sandra Acevedo',
    'doctor-title': 'Smile design specialist',
    'doctor-photo-alt': 'Dr. Sandra Acevedo at Excellent Dental Studio',
    'stat-1-title': '20+ years', 'stat-1-text': 'Creating smiles in Medellín',
    'stat-2-title': 'Digital design', 'stat-2-text': 'Experts in digital smile design',
    'stat-3-title': '2 locations in Medellín', 'stat-3-text': 'Laureles and El Poblado',
    'stat-4-title': 'Dental tourism', 'stat-4-text': 'Local and international patients',
    'cta': 'Book a consultation',
    'proc-title': 'What would you like to transform?',
    'proc-sub': 'Personalized, natural smiles that highlight your true essence.',
    'proc-1-title': 'Porcelain smile design', 'proc-1-text': 'Porcelain veneers with premium aesthetics and superior durability.',
    'proc-2-title': 'Micro smile design', 'proc-2-text': 'Subtle, harmonious results with minimally invasive techniques.',
    'proc-3-title': 'Full mouth rehabilitation', 'proc-3-text': 'Fixed prosthetics and porcelain veneers to restore function and harmony.',
    'proc-3-alt': 'Full mouth rehabilitation result at Excellent Dental Studio',
    'form-eyebrow': 'Book your',
    'form-title': 'No-obligation consultation',
    'form-name': 'Name',
    'form-phone': 'Phone / WhatsApp',
    'form-treatment': 'Treatment of interest',
    'form-select': 'Select an option',
    'opt-1': 'Porcelain smile design',
    'opt-2': 'Composite resin smile design',
    'opt-3': 'Micro smile design',
    'opt-4': 'Full mouth rehabilitation',
    'opt-5': 'Dental prosthetics',
    'opt-6': 'Clear aligners',
    'opt-7': 'Oral surgery',
    'opt-8': 'General consultation',
    'form-message': 'Message <em>(optional)</em>',
    'form-error': 'Please enter your name, phone number and treatment of interest.',
    'trust-data': 'Your information is protected.',
    'trust-payment': 'Flexible payment plans.',
    'why-title': 'Why choose Excellent Dental Studio?',
    'why-1-title': '20+ years of experience',
    'why-1-text': 'Dr. Sandra Acevedo takes care of every detail with excellence, commitment and a passion for cosmetic dentistry.',
    'why-2-title': 'Designed for your face',
    'why-2-text': 'We analyze the shape of your face, the real width of your smile and the perfect shade for your skin.',
    'why-3-title': 'High-quality materials',
    'why-3-text': 'We work with <strong>porcelain</strong> or <strong>composite resin</strong> for long-lasting, harmonious and natural results.',
    'why-4-title': 'Comprehensive dentistry',
    'why-4-text': 'Oral surgery, prosthetics, full mouth rehabilitation, clear aligners and cosmetic dentistry, all in one place.',
    'why-5-title': 'Warranty and follow-up',
    'why-5-text': 'Personalized diagnosis, warranty and professional follow-up at every stage of your treatment.',
    'tour-eyebrow': 'Dental tourism',
    'tour-title': 'Your smile, in expert hands <span class="accent">from anywhere in the world.</span>',
    'tour-text': 'We keep making an impact on dentistry in Medellín and around the world. We welcome local and international patients with the same quality, professionalism and warmth as always.',
    'loc-title': 'Our locations in Medellín',
    'loc-1': 'El Poblado location',
    'loc-1-addr': 'Edificio Xerox, Cra. 43A #15 Sur-15<br>Office 903',
    'loc-2': 'Laureles location',
    'footer-text': 'Comprehensive &amp; cosmetic dentistry &middot; @excellentdental.studio',
    'wa-greeting': 'Hello, I would like to book a consultation at Excellent Dental Studio.',
    'wa-name': 'Name',
    'wa-phone': 'Phone',
    'wa-treatment': 'Treatment of interest',
    'wa-message': 'Message',
    'nav-6': 'Before & after', 'nav-6-aria': 'Go to Before & after',
    'nav-7': 'Real stories', 'nav-7-aria': 'Go to Real stories',
    'ba-title': 'Before & after',
    'ba-sub': 'Slide to see the change.',
    'ba-before': 'Before', 'ba-after': 'After',
    'ba-before-alt': 'Smile before treatment', 'ba-after-alt': 'Smile after treatment',
    'ba-range-aria': 'Compare before and after',
    'ba-1': 'Real case', 'ba-2': 'Porcelain veneers',
    'gallery-alt': 'Real result at Excellent Dental Studio',
    'stories-title': 'Real stories',
    'story-1': 'Transformation', 'story-2': 'Sito Pérez · Spain', 'story-3': 'Ángel Santana · Tampa',
    'story-4': 'Dental tourism', 'story-5': 'Our clinic',
    'close-aria': 'Close',
  },
};

const LANG_KEY = 'excellent_dental_lang';

function currentLang() {
  return document.documentElement.lang === 'en' ? 'en' : 'es';
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations.es;
  document.documentElement.lang = lang;
  document.title = dict['page-title'];
  const metaDesc = document.getElementById('pageDescription');
  if (metaDesc) metaDesc.setAttribute('content', dict['page-description']);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const key = el.getAttribute('data-i18n-alt');
    if (dict[key] !== undefined) el.setAttribute('alt', dict[key]);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria');
    if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
  });

  try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
}

const langGate = document.getElementById('langGate');
const langToggle = document.getElementById('langToggle');

let savedLang = null;
try { savedLang = localStorage.getItem(LANG_KEY); } catch (e) {}

if (savedLang === 'es' || savedLang === 'en') {
  applyLanguage(savedLang);
  if (langGate) langGate.remove();
} else if (langGate) {
  document.body.classList.add('lang-gate-open');
  langGate.querySelector('.lang-btn')?.focus();
}

if (langGate) {
  langGate.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      applyLanguage(btn.getAttribute('data-lang'));
      document.body.classList.remove('lang-gate-open');
      langGate.classList.add('is-hidden');
      setTimeout(() => langGate.remove(), 300);
    });
  });
}

if (langToggle) {
  langToggle.addEventListener('click', () => {
    applyLanguage(currentLang() === 'es' ? 'en' : 'es');
  });
}

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
    { left: 6,  top: 85, scale: .7,  opacity: 0 },    // Antes y después
    { left: 94, top: 85, scale: .7,  opacity: 0 },    // Historias reales
    { left: 8,  top: 85, scale: .7,  opacity: 0 },    // Tratamientos
    { left: 92, top: 15, scale: .7,  opacity: 0 },    // Agenda tu valoración
    { left: 50, top: 50, scale: 2,   opacity: .5 },   // Turismo odontológico
    { left: 92, top: 85, scale: .8,  opacity: 0 },    // Sedes
  ],
  mobile: [
    { left: 94, top: 6,  scale: .5,  opacity: 0 },
    { left: 6,  top: 94, scale: .5,  opacity: 0 },
    { left: 94, top: 94, scale: .5,  opacity: 0 },
    { left: 6,  top: 94, scale: .5,  opacity: 0 },
    { left: 94, top: 8,  scale: .5,  opacity: 0 },
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

    // El mensaje sale en el idioma que eligió la persona, así la clínica sabe en qué idioma responder
    const dict = translations[currentLang()];
    const data = new FormData(leadForm);
    const select = leadForm.querySelector('select[name="tratamiento"]');
    const lines = [
      dict['wa-greeting'],
      `${dict['wa-name']}: ${data.get('nombre').trim()}`,
      `${dict['wa-phone']}: ${data.get('telefono').trim()}`,
      `${dict['wa-treatment']}: ${select.options[select.selectedIndex].textContent.trim()}`,
    ];
    const mensaje = data.get('mensaje').trim();
    if (mensaje) lines.push(`${dict['wa-message']}: ${mensaje}`);
    window.open('https://wa.me/573147623636?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener');
  });

  leadForm.querySelectorAll('[required]').forEach((field) => {
    field.addEventListener('input', () => field.classList.remove('is-invalid'));
    field.addEventListener('change', () => field.classList.remove('is-invalid'));
  });
}

/* Si la persona pidió reducir el movimiento, los videos de tratamientos quedan en pausa (se ve el póster) */
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.proc-card__video').forEach((v) => {
    if (v.tagName === 'VIDEO') { v.removeAttribute('autoplay'); v.pause(); }
  });
}

/* Comparador antes/después: el control deslizante mueve la línea divisoria */
document.querySelectorAll('[data-ba]').forEach((frame) => {
  const range = frame.querySelector('.ba__range');
  const update = () => frame.style.setProperty('--pos', range.value + '%');
  range.addEventListener('input', update);
  update();
});

/* Historias: los videos se reproducen en silencio solo mientras están en pantalla */
const storyVideos = document.querySelectorAll('.story__video');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (storyVideos.length && 'IntersectionObserver' in window && !reduceMotion) {
  const storyObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const v = entry.target;
      if (entry.isIntersecting) { v.play().catch(() => {}); } else { v.pause(); }
    });
  }, { threshold: 0.4 });
  storyVideos.forEach((v) => storyObserver.observe(v));
}

/* Al tocar una historia se abre en grande, con sonido y controles */
const lightbox = document.getElementById('lightbox');
const lightboxVideo = document.getElementById('lightboxVideo');
let lastStory = null;
function closeLightbox() {
  lightboxVideo.pause();
  lightboxVideo.removeAttribute('src');
  lightboxVideo.load();
  lightbox.hidden = true;
  document.body.classList.remove('lightbox-open');
  if (lastStory) lastStory.focus();
}
document.querySelectorAll('.story').forEach((btn) => {
  btn.addEventListener('click', () => {
    lastStory = btn;
    lightboxVideo.src = btn.dataset.video;
    lightbox.hidden = false;
    document.body.classList.add('lightbox-open');
    lightboxVideo.play().catch(() => {});
    document.getElementById('lightboxClose').focus();
  });
});
if (lightbox) {
  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !lightbox.hidden) closeLightbox(); });
}
