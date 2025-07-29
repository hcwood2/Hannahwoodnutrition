// Mobile navigation toggle functionality
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const navList = document.querySelector('.nav__list');

  navToggle.addEventListener('click', function () {
    navList.classList.toggle('active');
  });

  // Close the mobile nav when a link is clicked
  navList.addEventListener('click', function (e) {
    if (e.target.tagName.toLowerCase() === 'a') {
      navList.classList.remove('active');
    }
  });

  // Populate current year in footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});