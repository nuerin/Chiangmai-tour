document.querySelectorAll('.nav-dropdown').forEach(drop => {
  const button = drop.querySelector('.nav-dropdown-toggle');
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    const opened = drop.classList.toggle('open');
    button.setAttribute('aria-expanded', String(opened));
  });
  drop.addEventListener('mouseenter', () => { if (matchMedia('(hover:hover)').matches) { drop.classList.add('open'); button.setAttribute('aria-expanded','true'); } });
  drop.addEventListener('mouseleave', () => { if (matchMedia('(hover:hover)').matches) { drop.classList.remove('open'); button.setAttribute('aria-expanded','false'); } });
});
document.addEventListener('click', (event) => {
  document.querySelectorAll('.nav-dropdown.open').forEach(drop => {
    if (!drop.contains(event.target)) { drop.classList.remove('open'); drop.querySelector('button').setAttribute('aria-expanded','false'); }
  });
});
document.addEventListener('keydown', event => { if(event.key === 'Escape') document.querySelectorAll('.nav-dropdown.open').forEach(drop => { drop.classList.remove('open'); drop.querySelector('button').setAttribute('aria-expanded','false'); }); });
