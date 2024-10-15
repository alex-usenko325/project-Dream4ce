const themeToggleButton = document.getElementById('theme-toggle');

function toggleTheme() {
  document.body.classList.toggle('dark-theme');

  const isDarkTheme = document.body.classList.contains('dark-theme');
  localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }
});
