const menuButton = document.querySelector('[data-menu-button]');
const closeButton = document.querySelector('[data-menu-button-close]');
const mobileMenu = document.querySelector('[data-menu]');
const menuLinks = document.querySelectorAll('.mob-nav-link');

menuButton.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
});

closeButton.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
  });
});
