/* V9.42.2 — switch the homepage background film with the selected site language. */
(() => {
  const video = document.querySelector('#hero .v8-hero-video');
  if (!video) return;

  const wrapper = video.closest('.v8-hero-image-wrap');
  const sources = {
    en: video.dataset.enSrc,
    zh: video.dataset.zhSrc
  };

  let activeSource = '';

  function setLanguageFilm(language) {
    const lang = language === 'zh' ? 'zh' : 'en';
    const nextSource = sources[lang];
    if (!nextSource || nextSource === activeSource) return;

    activeSource = nextSource;
    video.classList.remove('is-playing');
    if (wrapper) wrapper.classList.remove('v8-video-active');

    try {
      video.pause();
      video.removeAttribute('src');
      video.load();

      video.src = nextSource;
      video.load();

      const playAttempt = video.play();
      if (playAttempt && typeof playAttempt.catch === 'function') {
        playAttempt.catch(() => {
          video.classList.remove('is-playing');
          if (wrapper) wrapper.classList.remove('v8-video-active');
        });
      }
    } catch (_) {
      video.classList.remove('is-playing');
      if (wrapper) wrapper.classList.remove('v8-video-active');
    }
  }

  video.addEventListener('playing', () => {
    video.classList.add('is-playing');
    if (wrapper) wrapper.classList.add('v8-video-active');
  });

  video.addEventListener('error', () => {
    video.classList.remove('is-playing');
    if (wrapper) wrapper.classList.remove('v8-video-active');
  });

  window.addEventListener('golf-language-change', event => {
    setLanguageFilm(event.detail && event.detail.language);
  });

  const currentLanguage = window.GolfI18n
    ? window.GolfI18n.language
    : (document.body.classList.contains('lang-zh') ? 'zh' : 'en');

  setLanguageFilm(currentLanguage);
})();
