// Tema
document.querySelectorAll('.theme-switcher').forEach(btn => {
    btn.addEventListener('click', function() {
      document.body.classList.remove('theme-claro', 'theme-nublado', 'theme-chuva');
      document.body.classList.add('theme-' + btn.dataset.theme);
    });
  });