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

document.addEventListener("click", (event) => {
  // Check if the clicked element is not userInitials or its descendant
  if (event.target !== userInitials && !userInitials.contains(event.target)) {
    userDetails.classList.add("hide");
  } else {
    userDetails.classList.toggle("hide");
  }
});

// Stop the click event propagation when clicking inside user-details
userDetails.addEventListener("click", (event) => {
  event.stopPropagation();
});

// Switch
const switchInput = document.getElementById("switch-input");
const screeningDB = document.getElementById("customer-screening");
const searchDB = document.getElementById("customer-search");

switchInput.addEventListener("click", () => {
  if (switchInput.checked) {
    // show customer search
    searchDB.classList.remove("hide");
    screeningDB.classList.add("hide");
  } else {
    // show customer screening
    screeningDB.classList.remove("hide");
    searchDB.classList.add("hide");
  }
});

// Advanced search
const advSearchBtn = document.querySelector(".adv-search-btn");
const advSearch = document.getElementById("adv-search");

advSearchBtn.addEventListener("click", () => {
  advSearch.classList.toggle("hide");
});
