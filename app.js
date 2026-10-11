const content={
 sectors:[
  {icon:'⌂',en:'Building & construction materials',ar:'مواد البناء والتشييد',descEn:'Materials, systems and solutions for the built environment.',descAr:'مواد وأنظمة وحلول لقطاع البناء والبيئة العمرانية.'},
  {icon:'▤',en:'Plastics & packaging',ar:'البلاستيك والتغليف',descEn:'Plastic products, packaging formats and industrial solutions.',descAr:'منتجات بلاستيكية وحلول التغليف والاستخدامات الصناعية.'},
  {icon:'✧',en:'Perfumes',ar:'العطور',descEn:'Fragrance, personal care and related product lines.',descAr:'العطور والعناية الشخصية والمنتجات ذات الصلة.'},
  {icon:'◌',en:'Food & beverages',ar:'الأغذية والمشروبات',descEn:'Food products, ingredients and beverage opportunities.',descAr:'المنتجات الغذائية والمكونات وفرص المشروبات.'},
  {icon:'▱',en:'Painting materials',ar:'مواد الدهانات',descEn:'Coatings, paints and finishing products for trade.',descAr:'الطلاءات والدهانات ومنتجات التشطيب.'},
  {icon:'⌁',en:'Petroleum & gas',ar:'النفط والغاز',descEn:'Products, equipment and services across the energy value chain.',descAr:'منتجات ومعدات وخدمات ضمن سلسلة قيمة الطاقة.'}
 ],
 days:[
  {day:'DAY 1',dayAr:'اليوم ١',en:'Market discovery & delegation welcome',ar:'اكتشاف السوق واستقبال الوفد',descEn:'Welcome and orientation; market briefing; introductions to the local commercial landscape.',descAr:'استقبال وتعريف بالبرنامج؛ إحاطة عن السوق؛ والتعرف على المشهد التجاري المحلي.'},
  {day:'DAY 2',dayAr:'اليوم ٢',en:'Tailored B2B matchmaking meetings',ar:'اجتماعات مواءمة أعمال مخصصة',descEn:'Pre-arranged meetings with qualified buyers, importers, distributors and potential partners, based on participant objectives.',descAr:'اجتماعات مرتبة مسبقاً مع مشترين ومستوردين وموزعين وشركاء محتملين، وفق أهداف المشاركين.'},
  {day:'DAY 3',dayAr:'اليوم ٣',en:'Corporate & market visits',ar:'زيارات للشركات والسوق',descEn:'Visits to relevant companies, channels and market locations, subject to final programme confirmation.',descAr:'زيارات لشركات وقنوات ومواقع سوق ذات صلة، رهناً باعتماد البرنامج النهائي.'},
  {day:'DAY 4',dayAr:'اليوم ٤',en:'Additional meetings & next steps',ar:'اجتماعات إضافية وخطوات تالية',descEn:'Follow-up conversations, networking and practical next-step planning with potential counterparties.',descAr:'حوارات متابعة وتواصل وتخطيط عملي للخطوات التالية مع الجهات المحتملة.'}
 ],
 journey:[['Explore missions','استكشف البعثات'],['Apply','قدّم طلبك'],['Company review','مراجعة الشركة'],['Define objectives','تحديد الأهداف'],['Buyer targeting','استهداف المشترين'],['B2B matchmaking','مواءمة الأعمال'],['Join the mission','شارك في البعثة'],['Follow-up','المتابعة']],
 objectives:[['Buyers','المشترون'],['Importers','المستوردون'],['Distributors','الموزعون'],['Retailers','تجار التجزئة'],['Agents','الوكلاء'],['Manufacturers','المصنّعون'],['Suppliers','الموردون'],['Strategic partners','الشركاء الاستراتيجيون'],['Private-label opportunities','فرص العلامات الخاصة'],['Other','أخرى']],
 buyerTypes:[['Buyer','مشترٍ'],['Importer','مستورد'],['Distributor','موزع'],['Retailer','تاجر تجزئة'],['Sourcing company','شركة توريد'],['Business partner','شريك أعمال'],['Manufacturer','مصنّع'],['Other','أخرى']],
 sectorsHeading:['Select a sector','اختر القطاع']
};
let lang='en';
function render(){
 document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';document.body.dir=lang==='ar'?'rtl':'ltr';
 document.querySelectorAll('[data-en][data-ar]').forEach(el=>{el.innerHTML=el.dataset[lang]});
 document.getElementById('lang').textContent=lang==='en'?'العربية':'English';
 document.getElementById('sectorGrid').innerHTML=content.sectors.map((s,i)=>`<article class="sector-card"><span class="sector-no">0${i+1} / 06</span><span class="sector-icon">${s.icon}</span><h3>${s[lang]}</h3><p>${lang==='en'?s.descEn:s.descAr}</p></article>`).join('');
 document.getElementById('timeline').innerHTML=content.days.map((d,i)=>`<article class="day-row ${i===0?'open':''}" tabindex="0"><span class="day-label">${lang==='en'?d.day:d.dayAr}</span><div class="day-content"><div class="day-title">${d[lang]}</div><div class="day-desc">${lang==='en'?d.descEn:d.descAr}</div></div><span class="day-plus">${i===0?'−':'+'}</span></article>`).join('');
 document.querySelectorAll('.day-row').forEach(row=>{const toggle=()=>{row.classList.toggle('open');row.querySelector('.day-plus').textContent=row.classList.contains('open')?'−':'+'};row.addEventListener('click',toggle);row.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();toggle()}})});
 document.getElementById('journey').innerHTML=content.journey.map((step,i)=>`<div class="journey-step"><b>0${i+1}</b><span>${step[lang==='en'?0:1]}</span></div>`).join('');
 document.getElementById('objectives').innerHTML=content.objectives.map((o,i)=>`<label class="check-option"><input type="checkbox" name="objectives" value="${o[0]}"><span>${o[lang==='en'?0:1]}</span></label>`).join('');
 const selectOptions=content.sectors.map(s=>`<option value="${s.en}">${s[lang]}</option>`).join('');
 document.getElementById('company-sector').innerHTML=`<option value="">${content.sectorsHeading[lang==='en'?0:1]}</option>${selectOptions}`;
 document.getElementById('buyer-sector').innerHTML=`<option value="">${content.sectorsHeading[lang==='en'?0:1]}</option>${selectOptions}`;
 document.getElementById('buyer-type').innerHTML=`<option value="">${lang==='en'?'Select company type':'اختر نوع الشركة'}</option>${content.buyerTypes.map(v=>`<option value="${v[0]}">${v[lang==='en'?0:1]}</option>`).join('')}`;
}
document.getElementById('lang').addEventListener('click',()=>{lang=lang==='en'?'ar':'en';render()});
document.querySelector('.menu-toggle').addEventListener('click',()=>document.getElementById('nav').classList.toggle('open'));
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>document.getElementById('nav').classList.remove('open')));
const toast=document.getElementById('toast');function demoSubmit(e,statusId){e.preventDefault();const msg=lang==='en'?'Demo only — this site has no connected form inbox yet. Your information was not sent.':'نسخة تجريبية — لم يتم ربط الموقع بصندوق استقبال الطلبات. لم تُرسل بياناتك.';document.getElementById(statusId).textContent=msg;toast.textContent=msg;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),5000)}
document.getElementById('company-form').addEventListener('submit',e=>demoSubmit(e,'company-status'));
document.getElementById('buyer-form-el').addEventListener('submit',e=>demoSubmit(e,'buyer-status'));
document.getElementById('year').textContent=new Date().getFullYear();
fetch('./mission.json').then(r=>{if(!r.ok)throw new Error('Mission data unavailable');return r.json()}).then(cfg=>{content.sectors=cfg.sectors.map((s,i)=>({...content.sectors[i],en:s.en,ar:s.ar}));content.days=cfg.programme.map((p,i)=>({...content.days[i],day:`DAY ${p.day}`,dayAr:`اليوم ${['١','٢','٣','٤'][i]||p.day}`,en:p.title.en,ar:p.title.ar}));render()}).catch(()=>render());
