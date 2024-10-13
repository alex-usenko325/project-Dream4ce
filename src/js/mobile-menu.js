// Получаем элементы
const menuOpenBtn = document.getElementById('menu-open-btn'); // Кнопка открытия меню
const menuCloseBtn = document.querySelector('[data-menu-button-close]'); // Кнопка закрытия меню
const mobileMenu = document.querySelector('.mob-menu'); // Само мобильное меню

// Функция для открытия меню
function openMenu() {
  mobileMenu.classList.add('is-open');
}

// Функция для закрытия меню
function closeMenu() {
  mobileMenu.classList.remove('is-open');
}

// Добавляем обработчики событий для кнопок
menuOpenBtn.addEventListener('click', openMenu);
menuCloseBtn.addEventListener('click', closeMenu);

// Закрытие меню при клике на любой элемент меню
const menuLinks = document.querySelectorAll('.mob-nav-link');
menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});
