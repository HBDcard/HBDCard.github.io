// Save as 'scripts.js'
const btnOpen = document.getElementById('open-btn'),
      btnClose = document.getElementById('close-btn');

btnOpen.addEventListener('click', () => {
  document.querySelector('.front').style.transform = 'rotateX(-25deg) rotateY(-90deg)';
});

btnClose.addEventListener('click', () => {
  document.querySelector('.front').style.transform = 'rotateX(-25deg) rotateY(0deg)';
});
