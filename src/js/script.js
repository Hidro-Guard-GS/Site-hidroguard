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

// Menu hamburguer
const btnMobile = document.getElementById('btn-mobile');

function toogleMenu(){
  const nav = document.getElementById('nav');
  nav.classList.toggle('active1');
}

btnMobile.addEventListener('click', toogleMenu);

// Slideshow
let slideIndex = 0;
showSlides();

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");
  if (!slides.length) return;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  if (dots[slideIndex-1]) dots[slideIndex-1].classList.add("active");
  setTimeout(showSlides, 5000); // Troca a cada 5 segundos
}

// Dots click
document.querySelectorAll('.dot').forEach((dot, idx) => {
    dot.addEventListener('click', function() {
      slideIndex = idx;
      showSlides();
    });
  });