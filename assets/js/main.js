/* ==========================================================
   Earthly Basket — shared site behaviour
   Loaded on every page after gsap, ScrollTrigger, site-images.js
   ========================================================== */
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll("img[data-img]").forEach(function(el){
  el.src = SITE_IMAGES[el.dataset.img];
});
document.querySelectorAll("[data-bg]").forEach(function(el){
  el.style.backgroundImage = "url(" + SITE_IMAGES[el.dataset.bg] + ")";
  el.style.backgroundSize = "cover";
  el.style.backgroundPosition = "center";
});

window.reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
window.isMobile = window.matchMedia('(max-width:900px)').matches;

/* ---------- nav scroll state ---------- */
const nav = document.getElementById('mainNav');
if(nav){
  ScrollTrigger.create({
    start: 60, end: 99999,
    onUpdate: self => nav.classList.toggle('scrolled', self.scroll() > 60)
  });
}

/* ---------- custom cursor (desktop) ---------- */
const cursorDot = document.getElementById('cursorDot');
if(cursorDot){
  if(!isMobile){
    window.addEventListener('mousemove', e=>{
      gsap.to(cursorDot, {x:e.clientX, y:e.clientY, duration:0.15, ease:'power2.out'});
    });
    document.querySelectorAll('.p-media, .ing-wheel-holder, .j-media, .cat-card, .band, .pd-media, .post-media, [data-cursor-expand]').forEach(el=>{
      el.addEventListener('mouseenter', ()=>cursorDot.classList.add('expand'));
      el.addEventListener('mouseleave', ()=>cursorDot.classList.remove('expand'));
    });
  } else {
    cursorDot.style.display = 'none';
  }
}

/* ---------- generic reveal-on-scroll ---------- */
gsap.utils.toArray('.reveal').forEach(el=>{
  gsap.to(el, {
    opacity:1, y:0, duration:1, ease:'cubic-bezier(0.16,1,0.3,1)',
    scrollTrigger:{trigger:el, start:'top 85%'}
  });
});

/* ---------- mobile nav toggle ---------- */
const navToggle = document.querySelector('.nav-toggle');
if(navToggle){
  navToggle.addEventListener('click', ()=>{
    const links = document.querySelector('.nav-links');
    const open = links.style.display === 'flex';
    links.style.cssText = open ? '' : 'display:flex; position:fixed; inset:0; flex-direction:column; align-items:center; justify-content:center; background:rgba(20,31,25,0.98); gap:32px; font-size:20px; z-index:1200;';
  });
}

/* ---------- mark active nav link ---------- */
(function(){
  const here = (location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.nav-links a[href]').forEach(a=>{
    const href = a.getAttribute('href').split('/').pop();
    if(href === here) a.classList.add('active');
  });
})();

/* ---------- simple toast helper (used on shop / product pages) ---------- */
function showToast(msg){
  let t = document.querySelector('.toast');
  if(!t){
    t = document.createElement('div');
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(()=> t.classList.remove('show'), 2400);
}

window.addEventListener('load', ()=> ScrollTrigger.refresh());
