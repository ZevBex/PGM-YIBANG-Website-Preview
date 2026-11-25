/* V9.21.2 — Keep the desktop mega menu open while the pointer travels
   from the nav trigger into the fixed-position panel. Mobile behavior remains
   owned by navigation-v98.js. */
(() => {
  const header = document.querySelector('.v98-header');
  if (!header) return;

  const dropdowns = [...header.querySelectorAll('details.nav-mega-dropdown-v921[data-nav-group]')];
  const desktopHover = window.matchMedia('(min-width:1181px) and (hover:hover) and (pointer:fine)');
  const closeDelay = 420;
  const closeTimers = new WeakMap();

  const clearClose = item => {
    const timer = closeTimers.get(item);
    if (timer) {
      window.clearTimeout(timer);
      closeTimers.delete(item);
    }
  };

  const setExpanded = (item, expanded) => {
    item.open = expanded;
    item.querySelector(':scope > summary')?.setAttribute('aria-expanded', String(expanded));
  };

  const closeOthers = current => dropdowns.forEach(item => {
    if (item !== current) {
      clearClose(item);
      setExpanded(item, false);
    }
  });

  const openMenu = item => {
    if (!desktopHover.matches) return;
    clearClose(item);
    closeOthers(item);
    setExpanded(item, true);
  };

  const scheduleClose = item => {
    if (!desktopHover.matches) return;
    clearClose(item);
    const timer = window.setTimeout(() => {
      // Only close if focus is not inside the menu (keyboard users).
      if (!item.contains(document.activeElement)) setExpanded(item, false);
      closeTimers.delete(item);
    }, closeDelay);
    closeTimers.set(item, timer);
  };

  dropdowns.forEach(item => {
    const summary = item.querySelector(':scope > summary');
    const panel = item.querySelector(':scope > .mega-menu-v921');
    if (!summary || !panel) return;

    // Hovering the trigger opens the panel.
    summary.addEventListener('mouseenter', () => openMenu(item));
    summary.addEventListener('focus', () => openMenu(item));

    // The panel is position:fixed, so it can sit outside the details box.
    // Use a short close delay and cancel it as soon as the pointer reaches it.
    panel.addEventListener('mouseenter', () => clearClose(item));
    panel.addEventListener('mouseleave', () => scheduleClose(item));

    // Do not close immediately on details mouseleave: the pointer is usually
    // crossing from the summary to the fixed panel at this exact moment.
    item.addEventListener('mouseleave', () => scheduleClose(item));
    item.addEventListener('mouseenter', () => clearClose(item));

    item.addEventListener('focusin', () => openMenu(item));
    item.addEventListener('focusout', event => {
      if (item.contains(event.relatedTarget)) return;
      scheduleClose(item);
    });

    summary.addEventListener('click', event => {
      if (!desktopHover.matches) return;
      event.preventDefault();
      openMenu(item);
    });
  });

  // Clicking elsewhere or pressing Escape closes the open desktop menu.
  document.addEventListener('pointerdown', event => {
    if (!desktopHover.matches) return;
    const insideMenu = dropdowns.some(item => item.contains(event.target));
    if (!insideMenu) dropdowns.forEach(item => {
      clearClose(item);
      setExpanded(item, false);
    });
  });

  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape' || !desktopHover.matches) return;
    dropdowns.forEach(item => {
      clearClose(item);
      setExpanded(item, false);
    });
  });

  window.addEventListener('resize', () => {
    if (window.matchMedia('(max-width:1180px)').matches) {
      dropdowns.forEach(item => {
        clearClose(item);
        setExpanded(item, false);
        item.classList.remove('is-mobile-active');
      });
    }
  }, { passive: true });
})();
