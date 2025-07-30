// Simple scroll reveal using IntersectionObserver
document.addEventListener('DOMContentLoaded', function() {
  const reveals = document.querySelectorAll('.scroll-reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15
    });
    reveals.forEach(el => observer.observe(el));
  } else {
    // Fallback: reveal all immediately
    reveals.forEach(el => el.classList.add('show'));
  }
});