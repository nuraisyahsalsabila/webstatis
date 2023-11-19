// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

var tombolMenu = document.getElementsByClassName("tombol-menu")[0];
var menu = document.getElementsByClassName("menu")[0];

tombolMenu.onclick = function () {
  menu.classList.toggle("active");
};

menu.onclick = function () {};
