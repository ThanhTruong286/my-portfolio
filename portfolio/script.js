document.addEventListener('DOMContentLoaded', () => {
  // ===== ABOUT SECTION =====
  const aboutTabs = document.querySelectorAll('.about-nav li');
  const aboutDetails = document.querySelectorAll('.about-details .about-detail');

  aboutTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      aboutTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const id = tab.getAttribute('data-job');
      aboutDetails.forEach(detail => detail.classList.remove('active'));

      const target = document.getElementById(id);
      if (target) target.classList.add('active');
    });
  });

  // ===== WORK SECTION =====
  const workTabs = document.querySelectorAll('.work-nav li');
  const workDetails = document.querySelectorAll('.work-details .job-detail');

  workTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      workTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const id = tab.getAttribute('data-job');
      workDetails.forEach(detail => detail.style.display = 'none');

      const target = document.getElementById(id);
      if (target) target.style.display = 'block';
    });
  });

  // ===== SCROLL ANIMATIONS =====
  const animatedElements = document.querySelectorAll('.intro, .about-me, .where-ive-worked, .some-things-ive-built, .contact-section, .footer');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });

  // ===== BURGER MENU TOGGLE =====
  const burgerMenu = document.querySelector('.burger-menu');
  const navMenu = document.querySelector('nav.nav-menu');

  if (burgerMenu && navMenu) {
    burgerMenu.addEventListener('click', () => {
      const expanded = burgerMenu.getAttribute('aria-expanded') === 'true' || false;
      burgerMenu.setAttribute('aria-expanded', !expanded);
      navMenu.classList.toggle('open');
    });
  }
});

// Ngăn trình duyệt khôi phục vị trí cuộn khi reload
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Khi reload xong thì cuộn về đầu
window.addEventListener('load', function () {
  window.scrollTo(0, 0);
});

function toggleMenu() {
  const nav = document.querySelector('.nav-menu');
  nav.classList.toggle('active');
}