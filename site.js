document.querySelectorAll('.uni-nav').forEach((header) => {
  const button = header.querySelector('.menu-toggle');
  const links = header.querySelectorAll('.main-nav a');
  if (!button) return;
  button.addEventListener('click', () => {
    const open = header.classList.toggle('nav-open');
    button.setAttribute('aria-expanded', String(open));
  });
  links.forEach((link) => link.addEventListener('click', () => {
    header.classList.remove('nav-open');
    button.setAttribute('aria-expanded', 'false');
  }));
});
