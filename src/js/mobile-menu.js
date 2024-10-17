const menuOpenBtn = document.getElementById('menu-open-btn');
const menuCloseBtn = document.querySelector('[data-menu-button-close]');
const mobileMenu = document.querySelector('.mob-menu');


function openMenu() {
  mobileMenu.classList.add('is-open');
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  mobileMenu.classList.remove('is-open');
  document.body.style.overflow = "auto";
}

menuOpenBtn.addEventListener('click', openMenu);
menuCloseBtn.addEventListener('click', closeMenu);

const menuLinks = document.querySelectorAll('.mob-nav-link');
menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

const themeCheckbox = document.getElementById('change-theme');
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-theme');
  document.querySelector('header').classList.add('dark-theme');
  themeCheckbox.checked = true;
}
themeCheckbox.addEventListener('change', function () {
  if (themeCheckbox.checked) {
    document.body.classList.add('dark-theme');
    document.querySelector('header').classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-theme');
    document.querySelector('header').classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }
});
