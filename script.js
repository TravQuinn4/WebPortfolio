// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 60);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

// Contact form
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('form-feedback').style.display = 'block';
  this.reset();
});

// Nav scroll shrink
window.addEventListener('scroll', () => {
  document.querySelector('nav').style.padding =
    window.scrollY > 60 ? '12px 48px' : '20px 48px';
})

if (window.location.pathname.endsWith('.html')) {
  const cleanPath = window.location.pathname.replace('.html', '');
  window.history.replaceState(null, '', cleanPath);
}