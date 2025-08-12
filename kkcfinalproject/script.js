
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


  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    if (isDark) {
      card.classList.add('dark');
    } else {
      card.classList.remove('dark');
    }
  });
});


showPage('home');
