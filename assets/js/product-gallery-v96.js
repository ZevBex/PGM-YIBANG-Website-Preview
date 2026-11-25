/* V9.6 product gallery interactions */
(() => {
  const root = document.querySelector('.detail-gallery');
  if (!root) return;
  const mainImage = root.querySelector('[data-detail-image]');
  const thumbs = () => [...root.querySelectorAll('[data-gallery-thumb]')];
  const note = root.querySelector('[data-detail-image-note]');
  const lightbox = document.querySelector('[data-gallery-lightbox]');
  const lightboxImage = lightbox?.querySelector('[data-gallery-lightbox-image]');
  const lightboxCaption = lightbox?.querySelector('[data-gallery-lightbox-caption]');
  let activeIndex = 0, touchStartX = null;
  const captionOf = button => button?.querySelector('span')?.textContent || '';
  function select(index) {
    const list = thumbs();
    if (!list.length) return;
    activeIndex = (index + list.length) % list.length;
    const button = list[activeIndex];
    const image = button.querySelector('img');
    if (!image || !mainImage) return;
    mainImage.src = image.src;
    mainImage.alt = button.getAttribute('aria-label') || '';
    list.forEach((item, i) => item.setAttribute('aria-pressed', String(i === activeIndex)));
    if (note) note.dataset.currentCaption = captionOf(button);
    if (lightbox && !lightbox.hidden) openLightbox();
  }
  function openLightbox() {
    if (!lightbox || !mainImage) return;
    lightboxImage.src = mainImage.src;
    lightboxImage.alt = mainImage.alt;
    lightboxCaption.textContent = note?.dataset.currentCaption || '';
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    lightbox.querySelector('[data-gallery-close]')?.focus();
  }
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.hidden = true;
    document.body.style.overflow = '';
  }
  root.addEventListener('click', event => {
    const thumb = event.target.closest('[data-gallery-thumb]');
    if (thumb) { select(Number(thumb.dataset.index || 0)); return; }
    if (event.target.closest('[data-gallery-zoom]') || event.target === mainImage) openLightbox();
  });
  root.addEventListener('touchstart', event => { touchStartX = event.changedTouches?.[0]?.clientX ?? null; }, {passive:true});
  root.addEventListener('touchend', event => {
    if (touchStartX === null) return;
    const endX = event.changedTouches?.[0]?.clientX ?? touchStartX;
    const delta = endX - touchStartX;
    if (Math.abs(delta) > 45) select(activeIndex + (delta < 0 ? 1 : -1));
    touchStartX = null;
  }, {passive:true});
  lightbox?.querySelector('[data-gallery-close]')?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', event => { if (event.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', event => {
    if (!lightbox || lightbox.hidden) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowRight') select(activeIndex + 1);
    if (event.key === 'ArrowLeft') select(activeIndex - 1);
  });
  window.addEventListener('golf-language-change', () => {
    const current = thumbs()[activeIndex];
    if (current) select(activeIndex);
  });
})();