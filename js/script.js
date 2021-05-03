// SHOW &  HIDDEN HEADER MENU
const showMenu = (menuId, toggleId) => {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);

  if (menu && toggle) {
    toggle.onclick = () => {
      toggle.classList.toggle("toggle-action");
      menu.classList.toggle("show-menu");
    };
  }
};
showMenu("nav-menu", "nav-toggle");

// REMOVE HEADER MENU WHEN CLICK THE LINK
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  navLink.forEach((e) => e.classList.remove("active"));
  this.classList.add("active");

  navToggle.classList.remove("toggle-action");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((e) => e.addEventListener("click", linkAction));
