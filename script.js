const menuBtn = document.getElementById('menuBtn');
const navLinks = document.querySelector('.nav-links');
menuBtn?.addEventListener('click', () => navLinks.classList.toggle('open'));

document.querySelectorAll('.play').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.textContent = btn.textContent === '▶' ? '❚❚' : '▶';
  });
});
