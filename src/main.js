// Открытие мобильного меню

const menuButton = document.querySelector('[data-menu-button]');
const closeButton = document.querySelector('[data-menu-button-close]');
const mobileMenu = document.querySelector('[data-menu]');

menuButton.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
});

closeButton.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
});

// theme switch header and body
// Получаем чекбокс по ID
const themeCheckbox = document.getElementById('theme-checkbox');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    document.querySelector('header').classList.add('dark-theme'); 
    themeCheckbox.checked = true; 
}


themeCheckbox.addEventListener('change', function() {
    if (themeCheckbox.checked) {
        document.body.classList.add('dark-theme');
        document.querySelector('header').classList.add('dark-theme'); 
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-theme');
        document.querySelector('header').classList.remove('dark-theme'); // Убираем класс у хедера
        localStorage.setItem('theme', 'light');
    }
});
