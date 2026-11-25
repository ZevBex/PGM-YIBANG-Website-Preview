/* V9.17 — one navigation controller for desktop dropdowns and mobile drill-down navigation. */
(() => {
  const header = document.querySelector('.v98-header');
  if (!header) return;
  const nav = header.querySelector('#primary-nav');
  const dropdowns = [...header.querySelectorAll('details.nav-dropdown[data-nav-group]')];
  const menuButton = header.querySelector('.menu-toggle');
  const isMobile = () => window.matchMedia('(max-width: 1180px)').matches;

  let backButton = nav?.querySelector('.nav-mobile-back');
  if (nav && !backButton) {
    backButton = document.createElement('button');
    backButton.type = 'button';
    backButton.className = 'nav-mobile-back';
    backButton.innerHTML = '<span aria-hidden="true">←</span><span class="nav-mobile-back-label">ALL MENU</span>';
    backButton.addEventListener('click', () => {
      const active = dropdowns.find(item => item.classList.contains('is-mobile-active'));
      dropdowns.forEach(item => {
        item.open = false;
        item.classList.remove('is-mobile-active');
        item.querySelector(':scope > summary')?.setAttribute('aria-expanded', 'false');
      });
      nav.classList.remove('mobile-subnav-open');
      active?.querySelector(':scope > summary')?.focus();
    });
    nav.insertBefore(backButton, nav.firstChild);
  }

  const updateBackLabel = () => {
    const zh = window.GolfI18n?.language === 'zh';
    if (backButton) {
      const label = backButton.querySelector('.nav-mobile-back-label');
      if (label) label.textContent = zh ? '返回主菜单' : 'ALL MENU';
      backButton.setAttribute('aria-label', zh ? '返回主菜单' : 'Back to main menu');
    }
  };

  const closeDropdowns = (except = null) => {
    dropdowns.forEach(item => {
      if (item !== except) {
        item.open = false;
        item.classList.remove('is-mobile-active');
        item.querySelector(':scope > summary')?.setAttribute('aria-expanded', 'false');
      }
    });
    if (!except) nav?.classList.remove('mobile-subnav-open');
  };

  dropdowns.forEach(item => {
    const summary = item.querySelector(':scope > summary');
    if (!summary) return;
    summary.setAttribute('aria-expanded', String(item.open));
    summary.addEventListener('click', () => closeDropdowns(item));
    item.addEventListener('toggle', () => {
      summary.setAttribute('aria-expanded', String(item.open));
      if (item.open) {
        closeDropdowns(item);
        if (isMobile()) {
          dropdowns.forEach(other => other.classList.toggle('is-mobile-active', other === item));
          nav?.classList.add('mobile-subnav-open');
        }
      } else if (item.classList.contains('is-mobile-active')) {
        item.classList.remove('is-mobile-active');
        nav?.classList.remove('mobile-subnav-open');
      }
    });
  });

  document.addEventListener('click', event => {
    if (!header.contains(event.target)) {
      closeDropdowns();
      if (menuButton?.getAttribute('aria-expanded') === 'true') {
        menuButton.setAttribute('aria-expanded', 'false');
        nav?.classList.remove('is-open', 'mobile-subnav-open');
        document.body.classList.remove('menu-open');
        setMenuLabel();
      }
    }
    if (event.target.closest('.nav-link, .nav-dropdown-link, .nav-cta, .language-switch')) {
      closeDropdowns();
      if (menuButton?.getAttribute('aria-expanded') === 'false') setMenuLabel();
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    const active = dropdowns.find(item => item.open);
    if (isMobile() && nav?.classList.contains('mobile-subnav-open')) {
      closeDropdowns();
      active?.querySelector(':scope > summary')?.focus();
      return;
    }
    closeDropdowns();
    if (menuButton?.getAttribute('aria-expanded') === 'true') {
      menuButton.setAttribute('aria-expanded', 'false');
      nav?.classList.remove('is-open', 'mobile-subnav-open');
      document.body.classList.remove('menu-open');
      setMenuLabel();
      menuButton.focus();
    } else {
      active?.querySelector(':scope > summary')?.focus();
    }
  });

  menuButton?.addEventListener('click', () => {
    if (menuButton.getAttribute('aria-expanded') === 'false') closeDropdowns();
    setMenuLabel();
  });

  // Current-page state, including category-specific product links.
  const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const currentParams = new URLSearchParams(location.search);
  const groupMap = {
    'products.html':'products', 'product-detail.html':'products', 'club-configurator.html':'products',
    'partnership-solutions.html':'partnerships', 'co-brand-collaboration.html':'partnerships', 'oem-odm.html':'partnerships', 'project-builder.html':'partnerships',
    'capabilities.html':'manufacturing', 'manufacturing.html':'manufacturing', 'factory.html':'manufacturing', 'factory-tour.html':'manufacturing', 'quality.html':'manufacturing',
    'brand-heritage.html':'brand', 'player-collaboration.html':'brand', 'market-impact.html':'brand',
    'buyer-guide.html':'resources', 'insights.html':'resources', 'privacy.html':'resources',
    'contact.html':'contact', 'thank-you.html':'contact'
  };
  header.querySelectorAll('.nav-link, .nav-dropdown-toggle, .nav-dropdown-link').forEach(el => el.classList.remove('is-active','is-current'));
  header.querySelectorAll('[aria-current="page"]').forEach(el => el.removeAttribute('aria-current'));
  if (current === 'index.html') {
    const home = header.querySelector('.nav-home');
    home?.classList.add('is-active');
    home?.setAttribute('aria-current','page');
  }
  const activeGroup = groupMap[current];
  if (activeGroup === 'contact') {
    const contactLink = header.querySelector('.nav-contact-v917');
    contactLink?.classList.add('is-active');
    contactLink?.setAttribute('aria-current','page');
  }
  if (activeGroup) {
    const group = header.querySelector(`[data-nav-group="${activeGroup}"]`);
    group?.querySelector(':scope > summary')?.classList.add('is-active');
    group?.querySelectorAll('.nav-dropdown-link').forEach(link => {
      // Mega-menu child links are destinations, not a persistent selection.
      // The top-level group already communicates the current section. Avoid
      // marking every same-path anchor as selected (e.g. several #section links).
      if (link.closest('.mega-menu-v921')) return;

      const href = link.getAttribute('href') || '';
      const url = new URL(href, location.href);
      const file = url.pathname.split('/').pop().toLowerCase();
      let matches = file === current;
      if (matches && current === 'products.html') {
        const linkCategory = url.searchParams.get('category');
        const pageCategory = currentParams.get('category');
        matches = linkCategory === pageCategory;
      }
      if (matches) {
        link.classList.add('is-current');
        link.setAttribute('aria-current','page');
      }
    });
  }

  const setMenuLabel = () => {
    const zh = window.GolfI18n?.language === 'zh';
    if (menuButton) {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-label', zh ? (open ? '关闭导航' : '打开导航') : (open ? 'Close navigation' : 'Open navigation'));
      menuButton.setAttribute('title', zh ? '导航菜单' : 'Navigation menu');
    }
    nav?.setAttribute('aria-label', zh ? '主导航' : 'Main navigation');
    updateBackLabel();
  };
  setMenuLabel();
  window.addEventListener('golf-language-change', setMenuLabel);
})();
