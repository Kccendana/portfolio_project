var nav_button = document.getElementById("nav-button");
var nav_list = document.querySelector(".desktop-view-links");

nav_button.addEventListener('click', () => {
    nav_list.classList.toggle('show');

});

