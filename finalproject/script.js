// Page navigation
function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  // Show the requested page
  document.getElementById(pageId).classList.add('active');
}

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
let isDark = false;

themeToggle.addEventListener('click', () => {
  isDark = !isDark;
  document.body.classList.toggle('dark', isDark);

  // Update button text
  themeToggle.textContent = isDark ? '◑' : '◐';

  // Update content elements for dark mode
  const missionContent = document.querySelector('.mission-content');
  const points = document.querySelectorAll('.point');

  if (missionContent) {
    missionContent.classList.toggle('dark', isDark);
  }

  points.forEach(point => {
    point.classList.toggle('dark', isDark);
  });
});

// Initialize with home page
showPage('home');