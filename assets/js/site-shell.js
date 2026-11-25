/* V9.17 — lightweight global back-to-top control. Navigation is managed by navigation-v98.js. */
(() => {
  let backTop = document.getElementById('v8-back-top');
  if (!backTop) {
    backTop = document.createElement('button');
    backTop.id = 'v8-back-top';
    backTop.className = 'v8-back-top';
    backTop.type = 'button';
    backTop.textContent = '↑';
    backTop.setAttribute('aria-label', 'Back to top');
    backTop.setAttribute('title', 'Back to top');
    document.body.appendChild(backTop);
  }
  const setTopLabel = () => {
    const zh = window.GolfI18n?.language === 'zh';
    backTop.setAttribute('aria-label', zh ? '返回顶部' : 'Back to top');
    backTop.setAttribute('title', zh ? '返回顶部' : 'Back to top');
  };
  setTopLabel();
  window.addEventListener('golf-language-change', setTopLabel);
  backTop.addEventListener('click', () => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  });
  const updateBackTop = () => backTop.classList.toggle('is-visible', (window.scrollY || document.documentElement.scrollTop) > 520);
  window.addEventListener('scroll', updateBackTop, { passive: true });
  updateBackTop();
})();
