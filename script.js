const properties = [
  {id:'OP-101', title:'Premium Residential Plot', location:'Sector 20, Kaithal', type:'Plot', status:'For Sale', price:4200000, priceLabel:'₹42 Lac', area:'180 sq yd', image:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80', summary:'Registry-ready plot in a developed sector with wide road access.'},
  {id:'OP-102', title:'Main Road Commercial SCO', location:'Ambala Road, Kaithal', type:'Commercial', status:'Investment', price:13500000, priceLabel:'₹1.35 Cr', area:'92 sq yd', image:'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80', summary:'High-visibility commercial SCO for retail, clinic, office or showroom.'},
  {id:'OP-103', title:'Highway Belt Agricultural Land', location:'Kaithal-Jind Highway', type:'Agricultural', status:'For Sale', price:9800000, priceLabel:'₹98 Lac', area:'6 acres', image:'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80', summary:'Contiguous land parcel with productive soil and road approach.'},
  {id:'OP-104', title:'Investment Farmhouse Land', location:'Near Jind Bypass', type:'Farmhouse', status:'Investment', price:7800000, priceLabel:'₹78 Lac', area:'2.5 acres', image:'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80', summary:'Lifestyle and investment parcel close to Jind Bypass.'},
  {id:'OP-105', title:'Modern Family Home', location:'Pehowa Chowk, Kaithal', type:'Residential', status:'For Sale', price:8600000, priceLabel:'₹86 Lac', area:'220 sq yd', image:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80', summary:'Move-in-ready home with premium interiors and city access.'},
  {id:'OP-106', title:'Leased Office Space', location:'Civil Lines, Jind', type:'Commercial', status:'For Rent', price:55000, priceLabel:'₹55,000 / month', area:'1,450 sq ft', image:'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80', summary:'Professionally maintained office floor available for lease.'}
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const toast = (message) => { const el = $('#toast'); el.textContent = message; el.classList.add('show'); setTimeout(() => el.classList.remove('show'), 2600); };

window.addEventListener('load', () => setTimeout(() => $('#splash').classList.add('hide'), 2200));
window.addEventListener('scroll', () => { const max = document.documentElement.scrollHeight - innerHeight; $('#scrollProgress').style.width = `${(scrollY / max) * 100}%`; });
window.addEventListener('mousemove', (event) => { const glow = $('#cursorGlow'); glow.style.left = `${event.clientX}px`; glow.style.top = `${event.clientY}px`; });

$('#menuToggle').addEventListener('click', () => $('#mainMenu').classList.toggle('open'));
$('#themeToggle').addEventListener('click', () => { document.body.classList.toggle('light'); $('#themeToggle').textContent = document.body.classList.contains('light') ? '☀️' : '🌙'; });
$('#topBtn').addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')), { threshold: .14 });
$$('.section-reveal').forEach((el) => revealObserver.observe(el));

const counterObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (!entry.isIntersecting || entry.target.dataset.done) return;
  entry.target.dataset.done = 'true';
  const target = Number(entry.target.dataset.count);
  let current = 0;
  const step = Math.max(1, Math.ceil(target / 42));
  const timer = setInterval(() => { current += step; if (current >= target) { current = target; clearInterval(timer); } entry.target.textContent = `${current}+`; }, 28);
}), { threshold: .8 });
$$('[data-count]').forEach((el) => counterObserver.observe(el));

function renderShowcaseTabs() {
  $('#showcaseTabs').innerHTML = properties.slice(0, 3).map((property, index) => `<button class="${index === 0 ? 'active' : ''}" data-showcase="${index}"><small>${property.id}</small><br><b>${property.location}</b></button>`).join('');
}
function setShowcase(index) {
  const property = properties[index];
  $('#showcaseImage').src = property.image;
  $('#showcaseMeta').textContent = `${property.status} • ${property.type}`;
  $('#showcaseTitle').textContent = property.title;
  $('#showcasePrice').textContent = property.priceLabel;
  $$('[data-showcase]').forEach((btn) => btn.classList.toggle('active', Number(btn.dataset.showcase) === index));
}
renderShowcaseTabs();
$('#showcaseTabs').addEventListener('click', (event) => { const btn = event.target.closest('[data-showcase]'); if (btn) setShowcase(Number(btn.dataset.showcase)); });
let showcaseIndex = 0; setInterval(() => { showcaseIndex = (showcaseIndex + 1) % 3; setShowcase(showcaseIndex); }, 4200);

const tilt = $('#tiltCard');
tilt.addEventListener('mousemove', (event) => { const rect = tilt.getBoundingClientRect(); const x = event.clientX - rect.left - rect.width / 2; const y = event.clientY - rect.top - rect.height / 2; tilt.style.transform = `rotateX(${-y / 22}deg) rotateY(${x / 22}deg)`; });
tilt.addEventListener('mouseleave', () => { tilt.style.transform = 'rotateX(0) rotateY(0)'; });

function renderProperties(list = properties) {
  $('#emptyState').style.display = list.length ? 'none' : 'block';
  $('#propertyGrid').innerHTML = list.map((property) => `<article class="property-card"><div class="property-img" data-image="${property.image}"><img src="${property.image}" alt="${property.title}"><span>${property.status}</span></div><div class="property-body"><p class="property-meta">${property.location} · ${property.area}</p><h3>${property.title}</h3><p class="muted">${property.summary}</p><p class="price">${property.priceLabel}</p><div class="card-actions"><button class="icon-btn" data-fav="${property.id}">♡ Save</button><button class="icon-btn" data-compare="${property.id}">⇄ Compare</button><a class="icon-btn" href="https://wa.me/919876543210?text=I am interested in ${encodeURIComponent(property.title)}">WhatsApp</a></div></div></article>`).join('');
}
function applyFilters() {
  const q = $('#searchInput').value.toLowerCase();
  const type = $('#typeFilter').value;
  const purpose = $('#purposeFilter').value;
  const budget = Number($('#budgetFilter').value);
  const filtered = properties.filter((p) => [p.title,p.location,p.type,p.summary].join(' ').toLowerCase().includes(q) && (type === 'All' || p.type === type) && (purpose === 'All' || p.status === purpose) && p.price <= budget);
  renderProperties(filtered);
}
['#searchInput','#typeFilter','#purposeFilter','#budgetFilter'].forEach((selector) => $(selector).addEventListener('input', applyFilters));
renderProperties();

const locationNames = ['Kaithal','Jind','Ambala Road','Sector 20','Pehowa Chowk','Jind Bypass','Civil Lines','Highway Belt'];
function renderChips(target) { document.querySelector(target).innerHTML = locationNames.map((name) => `<button data-chip="${name}">#${name.replaceAll(' ','')}</button>`).join(''); }
renderChips('#chips'); renderChips('.location-chips');
document.body.addEventListener('click', (event) => {
  const chip = event.target.closest('[data-chip]');
  if (chip) { $('#searchInput').value = chip.dataset.chip; applyFilters(); location.hash = 'properties'; }
  const fav = event.target.closest('[data-fav]');
  if (fav) { fav.classList.toggle('active'); fav.textContent = fav.classList.contains('active') ? '♥ Saved' : '♡ Save'; toast('Property saved to favorites UI'); }
  const compare = event.target.closest('[data-compare]');
  if (compare) { compare.classList.toggle('active'); toast('Added to comparison UI'); }
  const image = event.target.closest('[data-image]');
  if (image) { $('#modalImage').src = image.dataset.image; $('#imageModal').showModal(); }
  const openModal = event.target.closest('[data-open-modal]');
  if (openModal) document.getElementById(openModal.dataset.openModal).showModal();
  if (event.target.matches('[data-close-modal]')) event.target.closest('dialog').close();
});

$('#saveSearchBtn').addEventListener('click', () => toast('Search saved. Backend connect hote hi alerts bhi chalenge.'));
$('#leadForm').addEventListener('submit', (event) => { event.preventDefault(); event.currentTarget.reset(); toast('Enquiry received! Team callback karegi.'); });
$('#visitForm').addEventListener('submit', (event) => { event.preventDefault(); $('#visitModal').close(); toast('Site visit request booked.'); });
$('#calculateEmi').addEventListener('click', () => {
  const principal = Number($('#loanAmount').value);
  const monthlyRate = Number($('#interestRate').value) / 12 / 100;
  const months = Number($('#loanYears').value) * 12;
  const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
  $('#emiResult').textContent = `${emi.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })} / month approx`;
});
