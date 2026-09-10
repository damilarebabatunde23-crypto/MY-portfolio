// THEME TOGGLE
(function () {
  const btn = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-icon');
  const html = document.documentElement;
  let theme = localStorage.getItem('portfolio-theme') || 'dark';

  function applyTheme(t) {
    html.setAttribute('data-theme', t);
    icon.className = t === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    localStorage.setItem('portfolio-theme', t);
  }
  applyTheme(theme);

  btn.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    applyTheme(theme);
  });
})();
