const toggleMenu = document.getElementById("menu");
const sidebar = document.getElementById("sidebar-wrapper");
const navTitle = document.querySelector(".nav-title");

toggleMenu.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  navTitle.classList.toggle("hide");
});
