/* PGM × YIBANG V9.0 — configuration studio, factory tour and guided RFQ */
(() => {
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => [...r.querySelectorAll(s)];
  const lang = () => window.GolfI18n?.language || 'en';
  const label = (el) => el?.getAttribute(lang()==='zh'?'data-v9-zh':'data-v9-en') || el?.textContent?.trim() || '';
  const applyV9Language = () => {
    $$('[data-v9-en][data-v9-zh]').forEach(el => {
      const value = el.getAttribute(lang()==='zh'?'data-v9-zh':'data-v9-en');
      if (value !== null && !el.matches('input,textarea,select') && el.children.length === 0) el.textContent = value;
    });
    $$('[data-v9-placeholder-en][data-v9-placeholder-zh]').forEach(el => el.placeholder = el.getAttribute(lang()==='zh'?'data-v9-placeholder-zh':'data-v9-placeholder-en'));
  };
  applyV9Language();
  window.addEventListener('golf-language-change', applyV9Language);

  // Configurator — live illustrative preview, not a claim of production feasibility.
  const configPage = $('[data-page="club-configurator"]');
  if (configPage) {
    const state = {product:'Driver',image:'assets/images/driver.svg',finish:'Black Titanium',shaft:'Graphite',grip:'Black',branding:'Custom Logo',hand:'Right-hand'};
    const preview = $('#v9-config-preview'), art = $('#v9-product-art');
    const zhMap={Driver:'一号木', 'Fairway Wood':'球道木', Hybrid:'铁木杆', 'Iron Set':'铁杆组', Wedge:'挖起杆', Putter:'推杆', 'Complete Set':'全套球杆', 'Black Titanium':'黑钛色', 'Satin Silver':'缎面银', 'Custom Finish':'定制表面', Graphite:'碳素', Steel:'钢', 'Discuss options':'沟通选项', Black:'黑色', Red:'红色', 'Custom color':'定制颜色', 'Custom Logo':'定制 Logo', 'PGM Branding':'PGM 品牌', 'No Logo':'无 Logo', 'Right-hand':'右手', 'Left-hand':'左手', 'Both / To be confirmed':'左右手 / 待确认'};
    const show=v=>lang()==='zh'?(zhMap[v]||v):v;
    function updateConfig() {
      if (art) { art.src = state.image; art.alt = `${state.product} illustrative concept preview`; }
      if (preview) preview.dataset.finish = state.finish.includes('Silver') ? 'silver' : state.finish.includes('Custom') ? 'custom' : 'black';
      $('#v9-preview-product').textContent = show(state.product);
      $('#v9-preview-finish').textContent = show(state.finish);
      $('#v9-finish-value').textContent = show(state.finish);
      $('#v9-shaft-value').textContent = show(state.shaft);
      $('#v9-config-summary-title').textContent = `${show(state.product)} · ${show(state.finish)}`;
      $('#v9-config-summary-copy').textContent = `${show(state.shaft)} ${lang()==='zh'?'杆身':'shaft'} / ${show(state.grip)} ${lang()==='zh'?'握把':'grip'} / ${show(state.branding)} / ${show(state.hand)}`;
      $('#v9-preview-code').textContent = `CFG / ${String(Object.values(state).join('').length).padStart(3,'0')}`;
    }
    $$('[data-config-choice]').forEach(group => {
      const key = group.dataset.configChoice;
      $$('button',group).forEach(btn => btn.addEventListener('click', () => {
        $$('button',group).forEach(b=>b.classList.toggle('is-selected',b===btn));
        state[key]=btn.dataset.value;
        if (key==='product') state.image=btn.dataset.image;
        updateConfig();
      }));
    });
    $('#v9-grip')?.addEventListener('change',e=>{state.grip=e.target.value;updateConfig();});
    $('#v9-branding')?.addEventListener('change',e=>{state.branding=e.target.value;updateConfig();});
    const go = $('#v9-config-to-rfq');
    go?.addEventListener('click',()=>{
      const params = new URLSearchParams({category:'Golf Clubs',project:'OEM / ODM Private Label',configuration:JSON.stringify(state)});
      window.location.href = `project-builder.html?${params.toString()}`;
    });
    if (preview && window.matchMedia?.('(hover:hover) and (pointer:fine)').matches && !window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      preview.addEventListener('pointermove',e=>{const r=preview.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;preview.style.setProperty('--tilt-x',`${x*5}deg`);preview.style.setProperty('--tilt-y',`${y*-4}deg`);preview.classList.add('is-tilting');});
      preview.addEventListener('pointerleave',()=>{preview.classList.remove('is-tilting');preview.style.removeProperty('--tilt-x');preview.style.removeProperty('--tilt-y');});
    }
    updateConfig();
    window.addEventListener('golf-language-change', updateConfig);
  }

  // Factory tour — accessible stage navigation and native dialog image zoom.
  const tourPage = $('#factory-explorer');
  if (tourPage) {
    const tabs=$$('[data-tour-stage]'), img=$('#v9-tour-image'), title=$('#v9-tour-title'), copy=$('#v9-tour-copy'), tag=$('#v9-tour-tag'), index=$('#v9-tour-index');
    let active=0;
    function setStage(n){
      active=(n+tabs.length)%tabs.length; const btn=tabs[active];
      tabs.forEach((b,i)=>{b.classList.toggle('is-active',i===active);b.setAttribute('aria-pressed',String(i===active));});
      if(img){img.style.opacity='0';window.setTimeout(()=>{img.src=btn.dataset.image;img.alt=lang()==='zh'?btn.dataset.titleZh:btn.dataset.titleEn;img.style.opacity='1';},window.matchMedia?.('(prefers-reduced-motion: reduce)').matches?0:130);}
      title.textContent=lang()==='zh'?btn.dataset.titleZh:btn.dataset.titleEn;
      copy.textContent=lang()==='zh'?btn.dataset.copyZh:btn.dataset.copyEn;
      tag.textContent=lang()==='zh'?btn.dataset.tagZh:btn.dataset.tagEn;
      index.textContent=`${String(active+1).padStart(2,'0')} / ${String(tabs.length).padStart(2,'0')}`;
    }
    tabs.forEach((b,i)=>{b.addEventListener('click',()=>setStage(i));b.addEventListener('keydown',e=>{if(!['ArrowDown','ArrowUp','Home','End'].includes(e.key))return;e.preventDefault();const n=e.key==='Home'?0:e.key==='End'?tabs.length-1:(i+(e.key==='ArrowDown'?1:-1)+tabs.length)%tabs.length;tabs[n].focus();setStage(n);});});
    $('#v9-tour-prev')?.addEventListener('click',()=>setStage(active-1));$('#v9-tour-next')?.addEventListener('click',()=>setStage(active+1));
    const dialog=$('#v9-image-dialog');
    const zoomButton=$('#v9-tour-zoom');
    const closeButton=$('#v9-dialog-close');
    const factoryVideo=$('#factory-intro-video');
    const updateTourAccessibility=()=>{
      const zh=lang()==='zh';
      if(zoomButton) zoomButton.setAttribute('aria-label',zh?'放大工厂照片':'Enlarge factory photograph');
      if(closeButton) closeButton.setAttribute('aria-label',zh?'关闭':'Close');
      if(factoryVideo) factoryVideo.setAttribute('title',zh?'PGM 工厂介绍视频':'PGM factory introduction video');
    };
    const open=()=>{if(!dialog||!img)return;const enlarged=$('#v9-dialog-image');if(enlarged){enlarged.src=img.src;enlarged.alt=title.textContent;}$('#v9-dialog-caption').textContent=title.textContent;dialog.showModal?.();};
    zoomButton?.addEventListener('click',open);img?.addEventListener('click',open);
    closeButton?.addEventListener('click',()=>dialog?.close());
    dialog?.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
    setStage(0);
    updateTourAccessibility();
    window.addEventListener('golf-language-change',()=>{setStage(active);updateTourAccessibility();});
  }

  // Smart RFQ builder — guided form, not an automated AI quotation engine.
  const rfqForm=$('#v9-rfq-form');
  if (rfqForm) {
    let step=1; const total=4; const chosen={category:'',model:''};
    const params=new URLSearchParams(location.search);
    const configParam=params.get('configuration');
    let configText='';
    if(configParam){try{const c=JSON.parse(configParam);configText=Object.entries(c).filter(([k])=>k!=='image').map(([k,v])=>`${k}: ${v}`).join(' | ');}catch(_){configText=configParam;}}
    if(params.get('category')) chosen.category=params.get('category');
    const requestedProject=params.get('project')||'';
    const validCategories=['Drivers','Fairway Woods','Hybrids','Irons','Wedges','Putters','Complete Golf Sets','Junior Golf Clubs','Park Golf Clubs','Custom Golf Club Development','Golf Club Sets','Golf Woods','Golf Irons & Hybrids','Golf Wedges','Golf Putters','Golf Clubs','Drivers & Fairway Woods','Irons & Hybrids','Wedges','Putters','Complete Golf Sets'];
    const validModels=['OEM / ODM Private Label','Private Label Solutions','Product Development from Drawing or Sample','Wholesale / Distribution','Co-branded / Signature Project'];
    if(!validCategories.includes(chosen.category)) chosen.category='';
    if(validModels.includes(requestedProject)) chosen.model=requestedProject;
    if(configText || requestedProject){const notes=$('#rfq-notes');if(notes)notes.value=[requestedProject && !['OEM / ODM Private Label','Private Label Solutions','Product Development from Drawing or Sample','Wholesale / Distribution','Co-branded / Signature Project'].includes(requestedProject)?`Initial request: ${requestedProject}`:'',configText?`Configurator selections: ${configText}`:''].filter(Boolean).join('\n');}
    const panels=$$('[data-rfq-step]'), progress=$('#rfq-progress-bar'), percent=$('#rfq-progress-percent'), stepLabel=$('#rfq-step-label'), dots=$$('.v9-progress-dots span');
    const next=$('#rfq-next'), back=$('#rfq-back'), submit=$('#rfq-submit'), hint=$('#rfq-step-hint');
    function updateSummary(){
      const quantity=$('#rfq-quantity-select')?.value||'Not sure yet';const market=$('#rfq-market-select')?.value||'Not decided';
      const briefZh={'Golf Clubs':'高尔夫球杆','Drivers':'一号木','Fairway Woods':'球道木','Hybrids':'铁木杆','Irons':'铁杆','Wedges':'挖起杆','Putters':'推杆','Complete Golf Sets':'高尔夫全套球杆','Park Golf Clubs':'公园高尔夫球杆','Golf Club Sets':'高尔夫全套球杆','Golf Woods':'高尔夫木杆','Golf Irons & Hybrids':'铁杆与铁木杆','Golf Wedges':'高尔夫挖起杆','Golf Putters':'高尔夫推杆','Drivers & Fairway Woods':'一号木与球道木','Irons & Hybrids':'铁杆与铁木杆','Wedges':'挖起杆','Putters':'推杆','Complete Golf Sets':'全套球杆','Junior Golf Clubs':'青少年球杆','Custom Golf Club Development':'定制球杆开发','OEM / ODM Private Label':'自有品牌定制','Private Label Solutions':'自有品牌定制','Product Development from Drawing or Sample':'根据图纸 / 样品开发','Wholesale / Distribution':'批发 / 经销','Co-branded / Signature Project':'品牌联名 / 签名系列'};
      const modelLabel=chosen.model==='OEM / ODM Private Label'?'Private Label Solutions':(chosen.model||'Not selected');
      $('#rfq-aside-category').textContent=lang()==='zh'?(briefZh[chosen.category]||chosen.category||'—'):(chosen.category||'—');$('#rfq-aside-model').textContent=lang()==='zh'?(briefZh[chosen.model]||chosen.model||'—'):modelLabel;$('#rfq-aside-quantity').textContent=$('#rfq-quantity-select')?.selectedOptions[0]?.textContent||quantity;$('#rfq-aside-market').textContent=$('#rfq-market-select')?.selectedOptions[0]?.textContent||market;
      const custom=$$('.v9-check-grid input:checked').map(x=>x.value).join(', ')||'Not specified';
      const timeline=$('#rfq-timeline-select')?.value||'Flexible';
      const price=$('#rfq-price-select')?.value||'Not decided';
      const notes=$('#rfq-notes')?.value||'Not provided';
      const lines=[`Product: ${chosen.category||'Not selected'}`,`Cooperation: ${modelLabel}`,`Quantity: ${quantity}`,`Target market: ${market}`,`Timeline: ${timeline}`,`Target price: ${price}`,`Customization: ${custom}`,`Project notes: ${notes}`,configText?`Configurator: ${configText}`:''].filter(Boolean).join('\n');
      const zh={ 'Golf Clubs':'高尔夫球杆','Golf Club Sets':'高尔夫全套球杆','Golf Woods':'高尔夫木杆','Golf Irons & Hybrids':'铁杆与铁木杆','Golf Wedges':'高尔夫挖起杆','Golf Putters':'高尔夫推杆','Park Golf Clubs':'公园高尔夫球杆','Drivers & Fairway Woods':'一号木与球道木','Irons & Hybrids':'铁杆与铁木杆','Wedges':'挖起杆','Putters':'推杆','Complete Golf Sets':'全套球杆','Junior Golf Clubs':'青少年球杆','Custom Golf Club Development':'定制球杆开发','OEM / ODM Private Label':'自有品牌定制','Private Label Solutions':'自有品牌定制','Product Development from Drawing or Sample':'根据图纸 / 样品开发','Wholesale / Distribution':'批发 / 经销','Co-branded / Signature Project':'品牌联名 / 签名系列','Not sure yet':'暂不确定','Not decided':'暂未确定','Europe':'欧洲','North America':'北美洲','Asia Pacific':'亚太地区','Middle East':'中东','South America':'南美洲','Africa':'非洲','Other / Global':'其他 / 全球','Sample / Development':'样品 / 开发','Under 100 units':'少于 100 件','100–500 units':'100–500 件','500–1,000 units':'500–1,000 件','1,000+ units':'1,000 件以上','To be discussed':'待沟通','Flexible / To be discussed':'时间灵活 / 待沟通','As soon as possible':'尽快','Within 1–3 months':'1–3 个月内','Within 3–6 months':'3–6 个月内','6+ months':'6 个月以上','Entry level':'入门级','Mid-range':'中端','Premium':'高端','Not specified':'未指定','Not provided':'未提供'};
      const show=v=>lang()==='zh'?(zh[v]||v):v;
      const displayLines=[`${lang()==='zh'?'产品':'Product'}: ${show(chosen.category||'Not selected')}`,`${lang()==='zh'?'合作方式':'Cooperation'}: ${show(chosen.model||'Not selected')}`,`${lang()==='zh'?'预估数量':'Quantity'}: ${show(quantity)}`,`${lang()==='zh'?'目标市场':'Target market'}: ${show(market)}`,`${lang()==='zh'?'项目时间':'Timeline'}: ${show(timeline)}`,`${lang()==='zh'?'目标价格定位':'Target price'}: ${show(price)}`,`${lang()==='zh'?'定制需求':'Customization'}: ${show(custom)}`,`${lang()==='zh'?'项目说明':'Project notes'}: ${show(notes)}`,configText?`${lang()==='zh'?'定制配置':'Configurator'}: ${configText}`:''].filter(Boolean).join('\n');
      $('#rfq-final-summary').textContent=displayLines;
      $('#rfq-category').value=chosen.category;$('#rfq-model').value=chosen.model;$('#rfq-quantity').value=quantity;$('#rfq-market').value=market;$('#rfq-timeline').value=timeline;$('#rfq-custom').value=custom;$('#rfq-config').value=configText;$('#rfq-summary').value=lines;
      return lines;
    }
    function setStep(n){step=Math.max(1,Math.min(total,n));panels.forEach(p=>{const active=Number(p.dataset.rfqStep)===step;p.classList.toggle('is-active',active);p.hidden=!active;});const pct=step/total*100;progress.style.width=`${pct}%`;percent.textContent=`${pct}%`;stepLabel.textContent=lang()==='zh'?`第 0${step} 步 / 共 04 步`:`STEP 0${step} OF 04`;dots.forEach((d,i)=>d.classList.toggle('is-active',i<step));back.disabled=step===1;next.hidden=step===total;submit.hidden=step!==total;hint.textContent=lang()==='zh'?(step===1?'请选择产品类别。':step===2?'请选择合作方式。':step===3?'可填写已知信息，也可以留空部分内容。':'请检查项目摘要并提交。'):(step===1?'Choose a product category to continue.':step===2?'Choose a cooperation model to continue.':step===3?'Share what you know. Partial information is welcome.':'Review your brief and submit.');updateSummary();}
    $$('[data-rfq-choice]').forEach(group=>{const key=group.dataset.rfqChoice;$$('button',group).forEach(btn=>btn.addEventListener('click',()=>{$$('button',group).forEach(b=>b.classList.toggle('is-selected',b===btn));chosen[key]=btn.dataset.value;updateSummary();}));});
    // Preselected category / project from the configurator or a deep link.
    if(chosen.category){const b=$$('[data-rfq-choice="category"] button').find(x=>x.dataset.value===chosen.category);if(b)b.click();}
    if(chosen.model){const b=$$('[data-rfq-choice="model"] button').find(x=>x.dataset.value===chosen.model);if(b)b.click();}
    ['#rfq-quantity-select','#rfq-market-select','#rfq-timeline-select','#rfq-price-select','#rfq-notes'].forEach(sel=>$(sel)?.addEventListener('input',updateSummary));$$('.v9-check-grid input').forEach(x=>x.addEventListener('change',updateSummary));
    next?.addEventListener('click',()=>{if(step===1&&!chosen.category){hint.textContent=lang()==='zh'?'请先选择一个产品类别。':'Please select a product category first.';return;}if(step===2&&!chosen.model){hint.textContent=lang()==='zh'?'请先选择合作方式。':'Please select a cooperation model first.';return;}setStep(step+1);});
    back?.addEventListener('click',()=>setStep(step-1));
    rfqForm.addEventListener('submit',e=>{if(step!==total){e.preventDefault();return;}if(!rfqForm.reportValidity()){e.preventDefault();return;}updateSummary();});
    setStep(1);
    window.addEventListener('golf-language-change',()=>setStep(step));
  }
})();
