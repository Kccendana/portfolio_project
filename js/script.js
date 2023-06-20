const navButton = document.querySelector('.nav-button');
const navList = document.querySelector('.desktop-view-links');
const navMenu = document.querySelectorAll('.navMenu');
const logo = document.querySelector('.logo');

navButton.addEventListener('click', () => {
  navList.classList.toggle('show');
  navButton.classList.toggle('close');
  logo.classList.toggle('hide');
}, false);

navMenu.forEach((links) => links.addEventListener('click', () => {
  navList.classList.remove('show');
  navButton.classList.remove('close');
  logo.classList.remove('hide');
}));

window.onresize = () => { if (window.innerWidth > 760) navList.classList.remove('show'); };
