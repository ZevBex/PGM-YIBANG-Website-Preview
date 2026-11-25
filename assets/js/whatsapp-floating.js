/* V9.42.19 — shared WhatsApp contact action on every active site page. */
(() => {
  const body = document.body;
  if (!body || !body.matches('.v8-home, .v8-page')) return;

  // The floating contact action is intentionally present on every active page,
  // including Contact, Project Builder and Thank You. Page-specific content actions remain intact.
  if (document.querySelector('[data-wa-floating]')) return;

  // Reuse the WhatsApp number already published in this page's footer; do not maintain a second number.
  const footerLink = [...document.querySelectorAll('a[href]')].find(a => /wa\.me\//i.test(a.href));
  if (!footerLink) return;

  const action = document.createElement('a');
  action.className = 'v8-floating-whatsapp';
  action.setAttribute('data-wa-floating', '');
  action.target = '_blank';
  action.rel = 'noopener noreferrer';
  action.innerHTML = `
    <span class="v8-whatsapp-mark" aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
        <path fill="currentColor" d="M20.52 3.48A11.78 11.78 0 0 0 2.02 17.7L.5 23.25l5.68-1.49A11.77 11.77 0 0 0 22.25 11.8a11.7 11.7 0 0 0-1.73-8.32ZM11.8 20.1a9.1 9.1 0 0 1-4.64-1.27l-.33-.2-3.37.89.9-3.28-.22-.34A9.12 9.12 0 1 1 11.8 20.1Zm5-6.83c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26 0 1.33.98 2.61 1.12 2.79.14.18 1.93 2.95 4.67 4.13.65.28 1.16.45 1.56.57.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.82-1.29.23-.64.23-1.19.16-1.3-.07-.11-.25-.18-.52-.32Z"/>
      </svg>
    </span>
    <span class="v8-whatsapp-label" data-en="Chat on WhatsApp" data-zh="WhatsApp 即时沟通">Chat on WhatsApp</span>`;

  const updateLink = () => {
    const isChinese = window.GolfI18n?.language === 'zh' || document.documentElement.lang.toLowerCase().startsWith('zh');
    const message = isChinese
      ? '您好，我对 PGM 高尔夫产品感兴趣，希望咨询批发价格、起订量、交货时间以及 OEM/ODM 合作。'
      : "Hi, I'm interested in PGM golf products. I'd like to discuss wholesale pricing, MOQ, lead time, and OEM/ODM opportunities.";
    const url = new URL(footerLink.href);
    url.searchParams.set('text', message);
    action.href = url.toString();
    action.setAttribute('aria-label', isChinese ? '通过 WhatsApp 联系我们' : 'Chat with us on WhatsApp');
    const label = action.querySelector('.v8-whatsapp-label');
    if (label) label.textContent = isChinese ? 'WhatsApp 即时沟通' : 'Chat on WhatsApp';
  };

  updateLink();
  body.appendChild(action);
  window.addEventListener('golf-language-change', updateLink);
})();
