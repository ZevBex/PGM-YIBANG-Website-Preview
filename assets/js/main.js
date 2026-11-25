(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const lang = () => window.GolfI18n?.language || 'en';
  const productName = p => lang() === 'zh' ? p.nameZh : p.name;
  const productLabel = p => lang() === 'zh' ? p.labelZh : p.label;
  const productSummary = p => lang() === 'zh' ? p.summaryZh : p.summary;
  const productCard = p => `<article class="product-card" data-category="${p.category}"><a class="product-card-link" href="product-detail.html?id=${encodeURIComponent(p.id)}"><div class="product-card-image"><img src="${p.image}" alt="${productName(p)} — category illustration" loading="lazy"><span class="product-visual-note">${lang() === 'zh' ? '品类示意图' : 'CATEGORY ILLUSTRATION'}</span><span class="card-arrow" aria-hidden="true">↗</span></div><div class="product-card-meta"><span>${productLabel(p)}</span><span>PGM × YIBANG</span></div><h3>${productName(p)}</h3><p>${productSummary(p)}</p><span class="card-link-text">${lang() === 'zh' ? '查看系列' : 'VIEW SERIES'} <b>↗</b></span></a></article>`;

  const homeOemCategories = [
    {
      category: 'drivers', image: 'assets/images/category-driver.jpg',
      labelEn: 'OFF THE TEE', labelZh: '开球木杆系列',
      titleEn: 'Drivers', titleZh: '一号木',
      summaryEn: 'Develop driver concepts around your target player, launch profile and brand positioning.',
      summaryZh: '围绕目标球员、弹道需求与品牌定位，开发一号木产品系列。'
    },
    {
      category: 'fairway-woods', image: 'assets/images/category-fairway-wood.jpg',
      labelEn: 'FAIRWAY PLAY', labelZh: '球道木系列',
      titleEn: 'Fairway Woods', titleZh: '球道木',
      summaryEn: 'Build fairway wood ranges with market-led configurations and coordinated components.',
      summaryZh: '根据目标市场规划球道木配置，并协同匹配相关部件。'
    },
    {
      category: 'hybrids', image: 'assets/images/category-hybrid.jpg',
      labelEn: 'VERSATILE DISTANCE', labelZh: '混合型球杆系列',
      titleEn: 'Hybrids', titleZh: '铁木杆',
      summaryEn: 'Develop hybrid options as standalone products or as part of a wider club range.',
      summaryZh: '可独立开发铁木杆产品，也可纳入完整球杆产品线。'
    },
    {
      category: 'irons', image: 'assets/images/category-iron.jpg',
      labelEn: 'IRON PLAY', labelZh: '铁杆系列',
      titleEn: 'Irons', titleZh: '铁杆',
      summaryEn: 'Plan iron models and set configurations around your customers and product brief.',
      summaryZh: '围绕目标客户与产品需求，规划铁杆型号及组合配置。'
    },
    {
      category: 'wedges', image: 'assets/images/category-wedge.jpg',
      labelEn: 'SHORT GAME', labelZh: '短杆攻果岭系列',
      titleEn: 'Wedges', titleZh: '挖起杆',
      summaryEn: 'Discuss loft, sole design, finish and components for your short-game range.',
      summaryZh: '围绕倾角、杆底设计、表面处理及部件配置开发挖起杆。'
    },
    {
      category: 'putters', image: 'assets/images/category-putter.jpg',
      labelEn: 'ON THE GREEN', labelZh: '果岭推杆系列',
      titleEn: 'Putters', titleZh: '推杆',
      summaryEn: 'Explore head shapes, balance concepts, materials and brand details for your putter range.',
      summaryZh: '围绕杆头造型、平衡理念、材料与品牌细节开发推杆系列。'
    },
    {
      category: 'sets', image: 'assets/images/category-complete-set.jpg',
      labelEn: 'COMPLETE SET PROGRAM', labelZh: '完整套杆方案',
      titleEn: 'Complete Golf Club Sets', titleZh: '高尔夫全套球杆',
      summaryEn: 'Create coordinated club-set programs for different customer segments and market positions.',
      summaryZh: '面向不同客户群体与市场定位，规划完整球杆组合及品牌配套。'
    },
    {
      category: 'junior', image: 'assets/images/category-junior.jpg',
      labelEn: 'JUNIOR RANGE', labelZh: '青少年球杆系列',
      titleEn: 'Junior Golf Clubs', titleZh: '青少年高尔夫球杆',
      summaryEn: 'Develop junior club ranges with age- and height-appropriate configurations.',
      summaryZh: '围绕不同年龄与身高需求，规划青少年球杆产品系列。'
    },
    {
      category: 'park', image: 'assets/images/category-park-golf.jpg',
      labelEn: 'SPECIALTY RANGE', labelZh: '公园高尔夫专用系列',
      titleEn: 'Park Golf Clubs', titleZh: '公园高尔夫球杆',
      summaryEn: 'A dedicated category for Park Golf projects and custom product enquiries.',
      summaryZh: '公园高尔夫球杆独立类别，提供专项产品开发与定制咨询入口。'
    }
  ];

  const homeOemCard = item => {
    const chinese = lang() === 'zh';
    const title = chinese ? item.titleZh : item.titleEn;
    const label = chinese ? item.labelZh : item.labelEn;
    const summary = chinese ? item.summaryZh : item.summaryEn;
    const categoryUrl = `products.html?category=${encodeURIComponent(item.category)}#catalog`;
    return `<article class="product-card home-oem-card" data-category="${item.category}"><a class="product-card-link" href="${categoryUrl}"><div class="product-card-image"><img class="category-product-image category-product-image--${item.category}" src="${item.image}" alt="PGM ${title} real product image" loading="lazy"><span class="card-arrow" aria-hidden="true">↗</span></div><div class="product-card-meta"><span>${label}</span><span>${chinese ? '支持定制' : 'CUSTOM OPTIONS'}</span></div><h3>${title}</h3><p>${summary}</p><span class="card-link-text">${chinese ? '查看对应类目' : 'VIEW CATEGORY'} <b>↗</b></span></a></article>`;
  };

  const applyProductCategoryFilter = filter => {
    const grid = $('[data-product-grid]');
    if (!grid) return;
    const cards = $$('.product-card', grid);
    let visibleCount = 0;
    cards.forEach(card => {
      const visible = filter === 'all' || card.dataset.category === filter;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    const emptyState = $('[data-category-empty]');
    if (emptyState) emptyState.hidden = !(filter === 'park' && visibleCount === 0);
  };

  const year = $('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  const menu = $('.menu-toggle');
  const nav = $('#primary-nav');
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = menu.getAttribute('aria-expanded') === 'true';
      menu.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
      document.body.classList.toggle('menu-open', !open);
    });
    $$('.nav-link, .nav-dropdown-link, .nav-cta, .language-switch', nav).forEach(link => link.addEventListener('click', () => {
      menu.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open', 'mobile-subnav-open');
      nav.querySelectorAll('.nav-dropdown').forEach(item => { item.open = false; item.classList.remove('is-mobile-active'); });
      document.body.classList.remove('menu-open');
    }));
  }

  function renderProductLists() {
    if (!window.GOLF_PRODUCTS) return;
    const homeGrid = $('[data-home-products]');
    if (homeGrid) homeGrid.innerHTML = homeOemCategories.map(homeOemCard).join('');
    const grid = $('[data-product-grid]');
    if (grid) {
      const filterButtons = $$('.filter-button');
      const requestedFilter = new URLSearchParams(location.search).get('category');
      const requestedButton = filterButtons.find(button => button.dataset.filter === requestedFilter);
      if (requestedButton) filterButtons.forEach(button => button.classList.toggle('is-active', button === requestedButton));
      const currentFilter = $('.filter-button.is-active')?.dataset.filter || 'all';
      grid.innerHTML = window.GOLF_PRODUCTS.map(productCard).join('');
      applyProductCategoryFilter(currentFilter);
    }
  }

  $$('.filter-button').forEach(button => button.addEventListener('click', () => {
    $$('.filter-button').forEach(b => b.classList.toggle('is-active', b === button));
    const filter = button.dataset.filter;
    applyProductCategoryFilter(filter);
    const url = new URL(window.location.href);
    if (filter === 'all') url.searchParams.delete('category');
    else url.searchParams.set('category', filter);
    window.history.replaceState({}, '', url.pathname + (url.search ? url.search : '') + url.hash);
  }));

  function renderProductDetail() {
    const detailTitle = $('[data-detail-title]');
    if (!detailTitle || !window.GOLF_PRODUCTS) return;
    const params = new URLSearchParams(location.search);
    const product = window.GOLF_PRODUCTS.find(p => p.id === params.get('id')) || window.GOLF_PRODUCTS[0];
    const name = productName(product);
    document.title = lang() === 'zh' ? `${name} | 高尔夫球杆产品详情 | PGM × YIBANG GOLF` : `${name} | PGM × YIBANG GOLF`;
    detailTitle.textContent = name;
    $('[data-detail-category]').textContent = productLabel(product);
    $('[data-product-breadcrumb]').textContent = productLabel(product);
    const summary = $('[data-detail-summary]');
    if (summary) summary.textContent = lang() === 'zh' ? product.summaryZh : product.summary;
    $('[data-detail-description]').textContent = lang() === 'zh' ? product.detailZh : product.detail;

    const driverGallery = [
      ['assets/images/product-gallery/driver-01-hero.webp','Hero angle','整体外观'],
      ['assets/images/product-gallery/driver-02-face.webp','Face detail','杆面细节'],
      ['assets/images/product-gallery/driver-03-sole.webp','Sole & weight ports','底部与配重细节'],
      ['assets/images/product-gallery/driver-04-crown.webp','Carbon crown concept','碳纤维杆冠概念'],
      ['assets/images/product-gallery/driver-05-shaft-grip.webp','Shaft & grip detail','杆身与握把细节'],
      ['assets/images/product-gallery/driver-06-hosel-detail.webp','Hosel & finish detail','连接部位与表面处理细节']
    ];
    const referenceGallery = [
      [product.detailImage || product.image, 'Product category visual','产品类别示意图'],
      ['assets/images/owner-provided/development-01.webp','Product development reference','产品开发参考'],
      ['assets/images/owner-provided/custom-01.webp','Customization reference','定制工艺参考'],
      ['assets/images/owner-provided/material-01.webp','Material selection reference','材料选择参考'],
      ['assets/images/owner-provided/process-01.webp','Process reference','生产流程参考'],
      ['assets/images/owner-provided/qc-equipment-01.webp','Quality inspection reference','品质检验参考']
    ];
    const gallery = product.id === 'driver-series' ? driverGallery : referenceGallery;
    const galleryRoot = $('[data-detail-gallery]');
    if (galleryRoot) {
      galleryRoot.innerHTML = gallery.map((item, i) => {
        const label = lang() === 'zh' ? item[2] : item[1];
        const alt = `${name} — ${label}`;
        return `<button type="button" class="detail-gallery-thumb" data-gallery-thumb data-index="${i}" aria-pressed="${i===0?'true':'false'}" aria-label="${alt}"><img src="${item[0]}" alt="" loading="lazy" decoding="async"><span>${label}</span></button>`;
      }).join('');
    }
    const image = $('[data-detail-image]');
    if (image) {
      image.src = gallery[0][0];
      image.alt = product.id === 'driver-series' ? `${name} — AI-generated concept visual, not model-specific product photography` : `${name} — category illustration and development reference`;
    }
    const imageNote = $('[data-detail-image-note]');
    if (imageNote) imageNote.textContent = lang() === 'zh'
      ? 'AI 生成的品类概念示意图，并非具体型号实拍；其余图片为企业提供的通用研发、工艺及质检参考，不代表该型号完整图库。正式发布具体型号前，请替换为经批准的产品实拍。'
      : 'AI-generated category concept visual, not model-specific product photography. Supporting images are general company-provided development, process and QC references, not a complete gallery for this model. Replace with approved product photos before publishing a specific model.';
    const features = lang() === 'zh' ? product.featuresZh : product.features;
    $('[data-detail-features]').innerHTML = features.map(feature => `<li>${feature}</li>`).join('');
    const featuresSecondary = $('[data-detail-features-secondary]');
    if (featuresSecondary) featuresSecondary.innerHTML = features.map(feature => `<li>${feature}</li>`).join('');
    const specBody = $('[data-detail-specs]');
    if (specBody) {
      const labels = lang() === 'zh' ? ['产品类别','杆头材质','杆面材质 / 结构','Loft / Lie 角度','杆身材质 / 硬度','杆身重量 / 长度','握把规格','左右手规格','Logo / 表面处理 / 包装'] : ['Club category','Clubhead material','Face material / construction','Loft / Lie angle','Shaft material / flex','Shaft weight / length','Grip specification','Hand orientation','Logo / finish / packaging'];
      const values = lang() === 'zh' ? ['按所选系列确认','以具体型号确认为准','视产品类别及型号而定','以具体型号规格书为准','以具体型号及配置为准','以最终批准配置为准','按项目配置确认','请确认右手 / 左手需求','按项目确认可选范围'] : ['Confirm by selected series','Confirm by selected model','Depends on club category and model','Refer to the model-specific specification sheet','Confirm by model and configuration','Confirm in the approved configuration','Confirm by project configuration','Specify right-hand / left-hand requirement','Confirm available options by project'];
      specBody.innerHTML = labels.map((label, i) => `<tr><th>${label}</th><td>${values[i]}</td></tr>`).join('');
    }
    $$('[data-detail-cta]').forEach(link => { link.href = `contact.html?product=${encodeURIComponent(product.id)}`; });
  }

  function productNameForEnquiry(product) { return lang() === 'zh' ? product.nameZh : product.name; }

  function prepareContactForm() {
    const contactForm = $('.contact-form');
    if (!contactForm) return;
    const params = new URLSearchParams(location.search);
    const product = params.get('product');
    const topic = params.get('topic');
    const buyer = params.get('buyer');
    const interest = $('select[name="product_interest"]', contactForm);
    const selectedProduct = product && window.GOLF_PRODUCTS ? window.GOLF_PRODUCTS.find(p => p.id === product || p.name === product || p.nameZh === product) : null;
    if (selectedProduct && interest) interest.value = selectedProduct.enquiryValue || '';
    const buyerType = $('select[name="buyer_type"]', contactForm);
    if (buyerType && buyer === 'brand') buyerType.value = 'Brand owner / Private label';
    if (buyerType && buyer === 'distributor') buyerType.value = 'Importer / Distributor';
    if (product || topic || buyer) {
      const message = $('textarea[name="message"]', contactForm);
      if (message && (!message.value || message.dataset.autoPrefill === 'true')) {
        const productName = selectedProduct ? productNameForEnquiry(selectedProduct) : product;
        const buyerLabel = buyer === 'brand' ? (lang() === 'zh' ? '品牌商 / 自有品牌' : 'Brand owner / private label') : buyer === 'distributor' ? (lang() === 'zh' ? '进口商 / 经销商' : 'Importer / distributor') : '';
        const lead = lang() === 'zh' ? `${productName ? `我想咨询的产品：${productName}。\n` : ''}${topic ? `咨询主题：${topic}。\n` : ''}${buyerLabel ? `采购商类型：${buyerLabel}。\n` : ''}\n` : `${productName ? `Product of interest: ${productName}.\n` : ''}${topic ? `Enquiry topic: ${topic}.\n` : ''}${buyerLabel ? `Buyer type: ${buyerLabel}.\n` : ''}\n`;
        message.value = lead;
        message.dataset.autoPrefill = 'true';
        message.addEventListener('input', () => { message.dataset.autoPrefill = 'false'; }, { once: true });
      }
    }
  }

  renderProductLists();
  renderProductDetail();
  prepareContactForm();

  window.addEventListener('golf-language-change', () => {
    renderProductLists();
    renderProductDetail();
    prepareContactForm();
    // Keep mobile navigation usable after switching languages.
    if (menu && nav) {
      menu.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open', 'mobile-subnav-open');
      nav.querySelectorAll('.nav-dropdown').forEach(item => { item.open = false; item.classList.remove('is-mobile-active'); });
      document.body.classList.remove('menu-open');
    }
  });

  const revealItems = $$('.reveal');
  if ('IntersectionObserver' in window && revealItems.length) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }), { threshold: .12 });
    revealItems.forEach(item => observer.observe(item));
  }
})();
