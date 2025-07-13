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
});
