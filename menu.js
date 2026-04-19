// ── Intersection Observer: reveal on scroll ──
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
);
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// ── Nav pill active state on scroll ──
const sections = document.querySelectorAll('section[id]');
const pills    = document.querySelectorAll('.nav-pill');
const onScroll = () => {
  let current = '';
  sections.forEach((sec) => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight * 0.45) current = sec.getAttribute('id');
  });
  pills.forEach((pill) => {
    pill.classList.toggle('active', pill.getAttribute('href') === `#${current}`);
  });
};
window.addEventListener('scroll', onScroll, { passive: true });

// ── Smooth scroll for nav pills ──
pills.forEach((pill) => {
  pill.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(pill.getAttribute('href'));
    if (target) {
      const offset = target.getBoundingClientRect().top + window.scrollY - 54;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  });
});

// ── Dropdown nav logic ──
// NOTA: backdrop-filter en .nav-pills crea un nuevo stacking context que
// atrapa position:fixed. Solución: mover los .drop-menu al <body>.
const dropdowns = document.querySelectorAll('.nav-dropdown');

// Mover cada drop-menu al body y guardar referencia en el dropdown
dropdowns.forEach((dd) => {
  const menu = dd.querySelector('.drop-menu');
  menu.dataset.owner = Math.random().toString(36).slice(2);
  dd.dataset.menuId  = menu.dataset.owner;
  document.body.appendChild(menu); // saca el menú del nav
});

function getMenu(dd) {
  return document.querySelector(`.drop-menu[data-owner="${dd.dataset.menuId}"]`);
}

function closeAll() {
  dropdowns.forEach((d) => {
    d.classList.remove('open');
    d.querySelector('.nav-pill-drop').setAttribute('aria-expanded', 'false');
    const m = getMenu(d);
    if (m) m.classList.remove('open');
  });
}

function positionMenu(dd) {
  const btn  = dd.querySelector('.nav-pill-drop');
  const menu = getMenu(dd);
  const rect = btn.getBoundingClientRect();
  menu.style.top  = (rect.bottom + 8) + 'px';
  menu.style.left = rect.left + 'px';
}

dropdowns.forEach((dd) => {
  const btn  = dd.querySelector('.nav-pill-drop');
  const menu = getMenu(dd);

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dd.classList.contains('open');
    closeAll();
    if (!isOpen) {
      dd.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      menu.classList.add('open');
      positionMenu(dd);
    }
  });

  // Evitar que el click dentro del menú lo cierre
  menu.addEventListener('click', (e) => e.stopPropagation());
});

// Cerrar al hacer click fuera
document.addEventListener('click', closeAll);

// Reposicionar en scroll
window.addEventListener('scroll', () => {
  dropdowns.forEach((dd) => {
    if (dd.classList.contains('open')) positionMenu(dd);
  });
}, { passive: true });

// ── Smooth scroll para drop-items ──
document.querySelectorAll('.drop-item').forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    closeAll();
    const target = document.querySelector(item.getAttribute('href'));
    if (target) {
      const offset = target.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  });
});
