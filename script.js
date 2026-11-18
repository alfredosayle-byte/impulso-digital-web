document.getElementById('year').textContent = new Date().getFullYear();

const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');
menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});

const form = document.getElementById('newsletter-form');
const msg = document.getElementById('form-msg');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('newsletter-email').value.trim();
  if (!email) return;
  // Placeholder: aquí se conecta más adelante a un servicio real de email marketing.
  msg.textContent = '¡Gracias! Pronto recibirás novedades en tu correo.';
  form.reset();
});
