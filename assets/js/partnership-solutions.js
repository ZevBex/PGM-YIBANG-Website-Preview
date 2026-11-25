/* V9.7 Partnership Solutions: model selector + contact enquiry prefill */
(() => {
  const labels = {
    'pgm-distribution': {
      en: 'PGM Brand Distribution', zh: 'PGM 品牌经销合作',
      descEn: 'Discuss distribution of selected PGM-branded golf club ranges.',
      descZh: '沟通经销选定的 PGM 品牌球杆系列。',
      option: 'PGM brand distribution / dealer application'
    },
    'private-label': {
      en: 'Private Label Solutions', zh: '自有品牌定制',
      descEn: 'Build your own golf brand from selected available golf club designs and review model-specific customization options.',
      descZh: '从可选的成熟球杆款式出发，评估按型号可执行的品牌定制选项，打造自有品牌系列。',
      option: 'Private label on selected existing golf club designs'
    },
    'custom-oem-odm': {
      en: 'Fully Customized OEM / ODM', zh: '完全定制 OEM / ODM 开发',
      descEn: 'Develop a golf club from your drawing, reference sample or product concept, subject to project review.',
      descZh: '根据图纸、参考样品或产品构想开发专属球杆，具体以项目评估为准。',
      option: 'Fully customized OEM / ODM product development'
    },
    'pgm-cobrand': {
      en: 'PGM Co-Brand Collaboration', zh: 'PGM 品牌联名合作',
      descEn: 'Explore a joint golf club collection, subject to PGM brand review and written approval.',
      descZh: '探讨联合球杆系列开发，须经过 PGM 品牌审核及书面授权。',
      option: 'PGM co-brand collaboration proposal'
    }
  };
  const selectModel = (key) => {
    const model = labels[key];
    if (!model) return;
    document.querySelectorAll('[data-model-card]').forEach(card => {
      const active = card.dataset.modelCard === key;
      card.classList.toggle('is-selected', active);
      card.querySelector('[data-select-model]')?.setAttribute('aria-pressed', String(active));
    });
    const lang = window.GolfI18n?.language === 'zh' ? 'zh' : 'en';
    const name = document.getElementById('selected-model-name');
    const desc = document.getElementById('selected-model-description');
    const cta = document.getElementById('selected-model-cta');
    if (name) name.textContent = lang === 'zh' ? model.zh : model.en;
    if (desc) desc.textContent = lang === 'zh' ? model.descZh : model.descEn;
    if (cta) cta.href = `contact.html?partnership=${encodeURIComponent(key)}`;
    const hidden = document.querySelector('input[name="partnership_model"]');
    if (hidden) hidden.value = key;
  };
  document.querySelectorAll('[data-select-model]').forEach(btn => btn.addEventListener('click', () => selectModel(btn.dataset.selectModel)));
  if (document.querySelector('[data-model-card]')) {
    const applyHashModel = () => {
      const hashModel = decodeURIComponent(window.location.hash.replace(/^#/, ''));
      if (labels[hashModel]) selectModel(hashModel);
    };
    const initialHash = decodeURIComponent(window.location.hash.replace(/^#/, ''));
    selectModel(labels[initialHash] ? initialHash : 'pgm-distribution');
    window.addEventListener('hashchange', applyHashModel);
    window.addEventListener('golf-language-change', () => {
      const active = document.querySelector('.partnership-model-card.is-selected')?.dataset.modelCard || 'pgm-distribution';
      selectModel(active);
    });
  }

  const params = new URLSearchParams(window.location.search);
  const requested = params.get('partnership');
  if (requested && labels[requested]) {
    const form = document.querySelector('.contact-form');
    const select = form?.querySelector('select[name="cooperation_type"]');
    const hidden = form?.querySelector('input[name="partnership_model"]');
    if (select) {
      const option = [...select.options].find(o => o.dataset.partnership === requested);
      if (option) select.value = option.value;
      else {
        const value = labels[requested].option;
        let created = [...select.options].find(o => o.value === value);
        if (!created) {
          created = document.createElement('option');
          created.value = value;
          created.textContent = labels[requested].en;
          created.dataset.partnership = requested;
          select.appendChild(created);
        }
        select.value = value;
      }
    }
    if (hidden) hidden.value = requested;
    form?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
})();