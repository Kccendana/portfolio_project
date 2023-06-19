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

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const menuItems = document.querySelectorAll('.desktop-view-links li');

  // Get the current scroll position
  const currentPosition = window.scrollY || window.scrollY;

  // Loop through each section and check if it's in the viewport
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop - 20; // Adjust 50 as needed

    if (currentPosition >= sectionTop) {
      // Remove highlight from all menu items
      menuItems.forEach((item) => {
        item.classList.remove('active');
      });

      // Add highlight to the corresponding menu item
      menuItems[index].classList.add('active');
    }
  });
});

window.onresize = () => { if (window.innerWidth > 760) navList.classList.remove('show'); };
