/* V9.12 Manufacturing page interactions: process filters and accessible image lightbox. */
(() => {
  const filters = [...document.querySelectorAll('[data-process-filter]')];
  const cards = [...document.querySelectorAll('[data-process-category]')];
  filters.forEach(button => button.addEventListener('click', () => {
    const value = button.dataset.processFilter;
    filters.forEach(item => item.classList.toggle('is-active', item === button));
    cards.forEach(card => { card.hidden = value !== 'all' && card.dataset.processCategory !== value; });
  }));

  const dialog = document.getElementById('mfg-lightbox');
  if (!dialog) return;
  const image = dialog.querySelector('img');
  const caption = dialog.querySelector('p');
  const close = dialog.querySelector('.mfg-lightbox-close');
  const currentLanguage = () => window.GolfI18n?.language || 'en';
  document.querySelectorAll('[data-lightbox]').forEach(button => {
    button.addEventListener('click', () => {
      image.src = button.dataset.lightbox;
      image.alt = button.querySelector('img')?.alt || 'Manufacturing reference photograph';
      caption.textContent = currentLanguage() === 'zh' ? (button.dataset.captionZh || '') : (button.dataset.captionEn || '');
      dialog.showModal();
    });
  });
  const closeDialog = () => { if (dialog.open) dialog.close(); };
  close?.addEventListener('click', closeDialog);
  dialog.addEventListener('click', event => { if (event.target === dialog) closeDialog(); });
  dialog.addEventListener('close', () => { image.src = ''; caption.textContent = ''; });
})();
