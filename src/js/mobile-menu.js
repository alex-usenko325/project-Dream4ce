
const menuOpenBtn = document.getElementById('menu-open-btn'); 
const menuCloseBtn = document.querySelector('[data-menu-button-close]'); 
const mobileMenu = document.querySelector('.mob-menu'); 

function openMenu() {
  mobileMenu.classList.add('is-open');
}

function closeMenu() {
  mobileMenu.classList.remove('is-open');
}

menuOpenBtn.addEventListener('click', openMenu);
menuCloseBtn.addEventListener('click', closeMenu);

const menuLinks = document.querySelectorAll('.mob-nav-link');
menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);

});
