// Toggle menu

const toggleMenu = document.getElementById("menu");
const sidebar = document.getElementById("sidebar-wrapper");
const navTitle = document.querySelector(".nav-title");

toggleMenu.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  navTitle.classList.toggle("hide");
});

// User initials show/hide
const userInitials = document.getElementById("user-name");
const userDetails = document.getElementById("user-details");

userInitials.addEventListener("click", () => {
  userDetails.classList.toggle("hide");
  userDetails.classList.toggle("show");
});
