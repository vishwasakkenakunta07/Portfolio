const menuToggle=document.getElementById('menuToggle');const navLinks=document.getElementById('navLinks');
menuToggle.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.textContent=open?'×':'☰';});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.textContent='☰';}));
const sections=document.querySelectorAll('main section[id]');const navItems=document.querySelectorAll('.nav-links a');
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)navItems.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id));}),{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(s=>observer.observe(s));