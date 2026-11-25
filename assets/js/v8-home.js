(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const currentLang = () => window.GolfI18n?.language || 'en';
  const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  // Scroll progress and compact glass navigation.
  const header = $('.v8-header');
  const progress = $('#scroll-progress');
  let scrollTicking = false;
  const updateScrollUI = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    if (header) header.classList.toggle('is-scrolled', scrollTop > 28);
    if (progress) progress.style.width = `${Math.min(100, (scrollTop / maxScroll) * 100)}%`;
    scrollTicking = false;
  };
  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(updateScrollUI);
      scrollTicking = true;
    }
  }, { passive: true });
  updateScrollUI();

  // Subtle hero parallax — disabled on touch and reduced-motion devices.
  const hero = $('#hero');
  const heroImage = $('[data-parallax] img');
  if (hero && heroImage && !reducedMotion && window.matchMedia?.('(hover: hover) and (pointer: fine)').matches) {
    hero.addEventListener('pointermove', event => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      heroImage.style.transform = `translate3d(${x * -10}px, ${y * -8}px, 0) scale(1.035)`;
    });
    hero.addEventListener('pointerleave', () => { heroImage.style.transform = ''; });
  }

  // Reveal content as it enters the viewport.
  const revealItems = $$('.v8-home .reveal');
  if ('IntersectionObserver' in window && !reducedMotion) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: .12, rootMargin: '0px 0px -35px 0px' });
    revealItems.forEach(item => revealObserver.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('is-visible'));
  }

  // Golf club configuration concept. The selected brief is passed to the enquiry form.
  const configPreview = $('#config-preview');
  const configFeedback = $('#config-feedback');
  const configState = { finish: 'Black Titanium', shaft: 'Graphite', grip: 'Black', branding: 'Custom Logo' };
  const getOptionLabel = button => button.getAttribute(currentLang() === 'zh' ? 'data-zh' : 'data-en') || button.dataset.value || button.textContent.trim();

  function renderConfig() {
    Object.entries(configState).forEach(([key, value]) => {
      const group = $(`[data-config-group="${key}"]`);
      if (!group) return;
      const active = $$('.v8-option-buttons button', group).find(button => button.dataset.value === value);
      const output = $('[data-selected-value]', group);
      if (output && active) output.textContent = getOptionLabel(active);
    });
    if (configPreview) {
      const finish = configState.finish.toLowerCase().includes('silver') ? 'silver' : configState.finish.toLowerCase().includes('custom') ? 'custom' : 'black';
      const grip = configState.grip.toLowerCase().includes('red') ? 'red' : 'black';
      configPreview.dataset.finish = finish;
      configPreview.dataset.grip = grip;
    }
    const previewName = $('#config-preview-name');
    if (previewName) previewName.textContent = currentLang() === 'zh' ? '定制一号木概念' : 'CUSTOM DRIVER CONCEPT';
  }

  $$('[data-config-group]').forEach(group => {
    const key = group.dataset.configGroup;
    $$('.v8-option-buttons button', group).forEach(button => {
      button.addEventListener('click', () => {
        $$('.v8-option-buttons button', group).forEach(item => item.classList.toggle('is-active', item === button));
        configState[key] = button.dataset.value;
        renderConfig();
        if (configFeedback) configFeedback.textContent = currentLang() === 'zh' ? '配置预览已更新。' : 'Configuration preview updated.';
      });
    });
  });

  function configBrief() {
    return [
      'PGM × YIBANG — CUSTOM GOLF CLUB CONFIGURATION',
      `Head finish: ${configState.finish}`,
      `Shaft: ${configState.shaft}`,
      `Grip: ${configState.grip}`,
      `Branding: ${configState.branding}`,
      'Note: Concept selections only. Please confirm model-specific availability and specifications.'
    ].join('\n');
  }

  const sendConfig = $('#send-config');
  if (sendConfig) sendConfig.addEventListener('click', () => {
    const params = new URLSearchParams({ category: 'Golf Clubs', project: 'OEM / ODM Private Label', configuration: JSON.stringify(configState) });
    window.location.href = `project-builder.html?${params.toString()}`;
  });

  const copyConfig = $('#copy-config');
  if (copyConfig) copyConfig.addEventListener('click', async () => {
    const brief = configBrief();
    try {
      await navigator.clipboard.writeText(brief);
      if (configFeedback) configFeedback.textContent = currentLang() === 'zh' ? '配置需求已复制。' : 'Configuration brief copied.';
    } catch (_) {
      const field = document.createElement('textarea');
      field.value = brief;
      field.setAttribute('readonly', '');
      field.style.position = 'absolute';
      field.style.left = '-9999px';
      document.body.appendChild(field);
      field.select();
      const copied = document.execCommand('copy');
      field.remove();
      if (configFeedback) configFeedback.textContent = currentLang() === 'zh' ? (copied ? '配置需求已复制。' : '复制失败，请手动选择配置内容。') : (copied ? 'Configuration brief copied.' : 'Copy unavailable. Please note the selected options.');
    }
  });
  renderConfig();

  // Interactive factory process explorer.
  const factoryButtons = $$('[data-factory-step]');
  let factorySwapTimer = null;
  const factoryImage = $('#factory-stage-image');
  const factoryTitle = $('#factory-stage-title');
  const factoryCopy = $('#factory-stage-copy');
  const factoryEyebrow = $('#factory-stage-eyebrow');
  const factoryIndex = $('#factory-stage-index');
  function renderFactoryStep(button) {
    if (!button) return;
    const lang = currentLang();
    factoryButtons.forEach(item => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-selected', String(active));
      item.setAttribute('tabindex', active ? '0' : '-1');
    });
    if (factoryImage) {
      if (factorySwapTimer) window.clearTimeout(factorySwapTimer);
      factoryImage.style.opacity = '0';
      factorySwapTimer = window.setTimeout(() => {
        factoryImage.src = button.dataset.image;
        factoryImage.alt = `${button.dataset[lang === 'zh' ? 'titleZh' : 'titleEn']} — company-provided process photo`;
        factoryImage.style.opacity = '1';
      }, reducedMotion ? 0 : 160);
    }
    if (factoryTitle) factoryTitle.textContent = button.dataset[lang === 'zh' ? 'titleZh' : 'titleEn'];
    if (factoryCopy) factoryCopy.textContent = button.dataset[lang === 'zh' ? 'copyZh' : 'copyEn'];
    const stage = Number(button.dataset.factoryStep || 0) + 1;
    if (factoryEyebrow) factoryEyebrow.textContent = lang === 'zh' ? `制造流程 / 0${stage}` : `SELECTED PROCESS / 0${stage}`;
    if (factoryIndex) factoryIndex.textContent = `0${stage} — 05`;
  }
  factoryButtons.forEach(button => {
    button.addEventListener('click', () => renderFactoryStep(button));
    button.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const current = factoryButtons.indexOf(button);
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? factoryButtons.length - 1 : (current + (event.key === 'ArrowRight' ? 1 : -1) + factoryButtons.length) % factoryButtons.length;
      factoryButtons[next].focus();
      renderFactoryStep(factoryButtons[next]);
    });
  });
  if (factoryButtons.length) renderFactoryStep(factoryButtons[0]);

  // Keep temporary third-party portrait failures graceful; the card remains usable.
  $$('.v8-athlete-card img').forEach(image => {
    image.addEventListener('error', () => { image.classList.add('is-unavailable'); image.style.display = 'none'; }, { once: true });
  });

  // Refresh dynamic labels after the bilingual switcher updates the page.
  window.addEventListener('golf-language-change', () => {
    renderConfig();
    const activeFactory = $('.v8-factory-tabs button.is-active');
    if (activeFactory) renderFactoryStep(activeFactory);
  });
})();
