// ── Scroll animations ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ── Navbar scroll effect ──
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    nav.style.borderBottomColor = 'rgba(201,168,76,0.25)';
  } else {
    nav.style.borderBottomColor = 'rgba(201,168,76,0.15)';
  }
});

// ── Form submit ──
document.querySelector('.form-submit').addEventListener('click', function() {
  this.textContent = '✓ Consulta Enviada';
  this.style.background = '#6B8F6B';
  this.style.color = '#fff';
  setTimeout(() => {
    this.textContent = 'Enviar Consulta →';
    this.style.background = '';
    this.style.color = '';
  }, 3000);
});
