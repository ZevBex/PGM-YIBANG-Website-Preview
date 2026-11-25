/* PGM × YIBANG V8.0 — inner-page interactions */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const header = $('.v8-header');
  const progress = $('.v8-scroll-progress span');

  // Keep the compact glass navigation and reading progress consistent on every page.
  const update = () => {
    const y = window.scrollY || document.documentElement.scrollTop;
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    header?.classList.toggle('is-scrolled', y > 24);
    if (progress) progress.style.width = `${Math.min(100, y / max * 100)}%`;
    $('#v8-back-top')?.classList.toggle('is-visible', y > 520);
  };
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(() => { update(); ticking = false; }); ticking = true; }
  }, { passive: true });

  // Mark current navigation item and give page sections a subtle numbered rhythm.
  const current = (location.pathname.split('/').pop() || 'index.html').split('?')[0];
  $$('.primary-nav a[href]').forEach(a => {
    if (a.getAttribute('href') === current) a.classList.add('is-active');
  });
  $$('.nav-dropdown').forEach(dropdown => {
    if ([...dropdown.querySelectorAll('a[href]')].some(a => a.getAttribute('href') === current)) dropdown.querySelector('.nav-dropdown-toggle')?.classList.add('is-active');
  });
  const sections = $$('main > section').filter(s => !s.classList.contains('page-hero') && !s.classList.contains('v7-page-hero') && !s.classList.contains('not-found'));
  sections.forEach((section, i) => {
    if (!section.dataset.v8Index) section.dataset.v8Index = String(i + 1).padStart(2, '0');
    const heading = $('.section-heading, .contact-info, .chong-feature-copy', section);
    if (heading && !$('.v8-section-marker', heading)) {
      const marker = document.createElement('p');
      marker.className = 'v8-section-marker';
      marker.textContent = `PGM × YIBANG  /  ${section.dataset.v8Index}`;
      const target = heading.classList.contains('section-heading') ? (heading.querySelector(':scope > div') || heading) : heading;
      target.prepend(marker);
    }
  });

  // Reveal headings and content cards as they enter view.
  const revealTargets = $$('.section-heading, .v7-image-grid article, .v7-material-grid article, .v7-capability-card, .product-card, .athlete-profile-card, .collaboration-model-grid article, .v7-video-card, .contact-form-wrap, .spec-guide-panel, .audit-banner, .v7-inline-cta, .training-aid-enquiry, .v7-qc-gallery figure, .v7-production-gallery figure');
  revealTargets.forEach((el, i) => {
    el.classList.add('v8-reveal');
    if (i < 10) el.style.transitionDelay = `${(i % 4) * 65}ms`;
  });
  if ('IntersectionObserver' in window && !reduced) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: .1, rootMargin: '0px 0px -25px 0px' });
    revealTargets.forEach(el => observer.observe(el));
  } else revealTargets.forEach(el => el.classList.add('is-visible'));

  // Restrained pointer tilt on desktop only; no motion on touch or reduced-motion devices.
  if (!reduced && window.matchMedia?.('(hover:hover) and (pointer:fine)').matches) {
    $$('.v7-capability-card, .v7-image-grid article, .v7-material-grid article, .collaboration-model-grid article').forEach(card => {
      card.addEventListener('pointermove', e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5;
        const y = (e.clientY - r.top) / r.height - .5;
        card.style.transform = `perspective(900px) rotateX(${y * -2.2}deg) rotateY(${x * 2.2}deg) translateY(-3px)`;
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });
  }

  // Accessible back-to-top control. The floating WhatsApp action is managed
  // by whatsapp-floating.js so it behaves consistently on home and inner pages.
  if (!$('#v8-back-top')) {
    const top = document.createElement('button');
    top.id = 'v8-back-top'; top.className = 'v8-back-top'; top.type = 'button';
    top.setAttribute('aria-label', 'Back to top'); top.textContent = '↑';
    top.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' }));
    document.body.appendChild(top);
  }

  update();
})();
