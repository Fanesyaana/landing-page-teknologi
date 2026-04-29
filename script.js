// Init AOS Animation
AOS.init({
  duration: 800,
  once: true,
  offset: 100
});

// Smooth scroll untuk anchor link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('shadow-sm');
  } else {
    navbar.classList.remove('shadow-sm');
  }
});

// Add to cart animation
document.querySelectorAll('.btn-cart').forEach(btn => {
  btn.addEventListener('click', function() {
    this.innerHTML = '<i class="bi bi-check-lg"></i>';
    this.style.background = '#10B981';
    this.style.color = 'white';
    this.style.borderColor = '#10B981';
    
    setTimeout(() => {
      this.innerHTML = '<i class="bi bi-bag"></i>';
      this.style.background = '';
      this.style.color = '';
      this.style.borderColor = '';
    }, 1500);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("loginBtn");
  const modal = new bootstrap.Modal(document.getElementById("loginModal"));

  btn.addEventListener("click", function (e) {
    e.preventDefault();
    modal.show();
  });
});