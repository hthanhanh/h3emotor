const button=document.querySelector('.menu-toggle');
const panel=document.querySelector('.mobile-navigation');
if(button&&panel){button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));panel.hidden=!open;});document.addEventListener('keydown',event=>{if(event.key==='Escape'){panel.hidden=true;button.setAttribute('aria-expanded','false');}});panel.addEventListener('click',event=>{if(event.target.closest('a')){panel.hidden=true;button.setAttribute('aria-expanded','false');}});}
