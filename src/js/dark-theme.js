const themeCheckbox = document.getElementById('theme-checkbox');

if (localStorage.getItem('theme') === 'dark') {
    document.querySelector('header').classList.add('dark-theme');
    document.querySelectorAll('.page-logo').forEach((el) => el.classList.add('dark-theme')); 
    document.querySelectorAll('.nav-link').forEach((el) => el.classList.add('dark-theme')); 
    document.querySelector('.mob-open-btn-icon').classList.add('dark-theme'); 
    themeCheckbox.checked = true; 
}


themeCheckbox.addEventListener('change', function() {
    if (themeCheckbox.checked) {
        document.querySelector('header').classList.add('dark-theme'); 
        document.querySelectorAll('.page-logo').forEach((el) => el.classList.add('dark-theme')); 
        document.querySelectorAll('.nav-link').forEach((el) => el.classList.add('dark-theme')); 
        document.querySelector('.mob-open-btn-icon').classList.add('dark-theme');
        localStorage.setItem('theme', 'dark'); 
    } else {
      
        document.querySelector('header').classList.remove('dark-theme'); 
        document.querySelectorAll('.page-logo').forEach((el) => el.classList.remove('dark-theme')); 
        document.querySelectorAll('.nav-link').forEach((el) => el.classList.remove('dark-theme')); 
        document.querySelector('.mob-open-btn-icon').classList.remove('dark-theme'); 
        localStorage.setItem('theme', 'light'); 
    }
});
