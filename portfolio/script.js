document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.work-nav ul li');
  const jobDetails = document.querySelectorAll('.job-detail');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      // Hide all job details
      jobDetails.forEach(detail => detail.style.display = 'none');

      // Add active class to clicked tab
      tab.classList.add('active');
      // Show corresponding job detail
      const jobId = tab.getAttribute('data-job');
      const jobDetail = document.getElementById(jobId);
      if (jobDetail) {
        jobDetail.style.display = 'block';
      }
    });
  });
});
