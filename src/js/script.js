// Tema
document.querySelectorAll('.theme-switcher').forEach(btn => {
    btn.addEventListener('click', function() {
      document.body.classList.remove('theme-claro', 'theme-nublado', 'theme-chuva');
      document.body.classList.add('theme-' + btn.dataset.theme);
    });
  });

  // Definir tema padrão
if (!document.body.classList.contains('theme-claro') &&
!document.body.classList.contains('theme-nublado') &&
!document.body.classList.contains('theme-chuva')) {
document.body.classList.add('theme-claro');
}