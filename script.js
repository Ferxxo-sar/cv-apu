// ================================================================
// TOGGLE DE MODO OSCURO / CLARO
// ================================================================
const toggleBtn = document.getElementById('themeToggle');
const body      = document.body;

toggleBtn.addEventListener('click', function () {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  toggleBtn.textContent = isDark ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
});


// ================================================================
// SLIDESHOW DE FOTO DE PERFIL
// Cicla entre las 3 fotos cada 3 segundos con fade suave.
// ================================================================
const photos = ['foto1.jpg', 'foto2.jpg', 'foto3.jpg'];
let currentIndex = 0;
const profilePhoto = document.getElementById('profilePhoto');

setInterval(function () {
  // Fade out
  profilePhoto.style.opacity = '0';

  setTimeout(function () {
    // Avanzar al siguiente (vuelve a 0 al llegar al final)
    currentIndex = (currentIndex + 1) % photos.length;
    profilePhoto.src = photos[currentIndex];

    // Fade in
    profilePhoto.style.opacity = '1';
  }, 400); // espera a que termine el fade out antes de cambiar src

}, 3500); // cambia cada 3.5 segundos
