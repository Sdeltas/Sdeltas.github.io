
function showPage(pageId) {

  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });


  document.getElementById(pageId).classList.add('active');
}


const themeToggle = document.getElementById('themeToggle');
let isDark = false;

themeToggle.addEventListener('click', () => {
  isDark = !isDark;
  document.body.classList.toggle('dark', isDark);

  themeToggle.textContent = isDark ? '◑' : '◐';


  const missionContents = document.querySelectorAll('.mission-content');
  const points = document.querySelectorAll('.point');

  missionContents.forEach(content => {
    content.classList.toggle('dark', isDark);
  });

  points.forEach(point => {
    point.classList.toggle('dark', isDark);
  });
});


showPage('home');
