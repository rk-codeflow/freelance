// Toggle menu
const toggleMenu = document.getElementById("menu");
const sidebar = document.getElementById("sidebar-wrapper");
const navTitle = document.querySelector(".nav-title");
const smLogo = document.getElementById("logo-sm");
const lgLogo = document.getElementById("logo-lg");

toggleMenu.addEventListener("click", () => {
  sidebar.classList.toggle("active");

  if (sidebar.classList.contains("active")) {
    // Show small logo and hide large logo
    smLogo.classList.remove("hide");
    lgLogo.classList.add("hide");
  } else {
    // Hide small logo and show large logo
    smLogo.classList.add("hide");
    lgLogo.classList.remove("hide");
  }

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
const switchInput = document.querySelector(".switch-input");
const screeningDB = document.querySelector(".customer-screening");
const searchDB = document.querySelector(".customer-search");

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

  // if (switchInput.checked) {
  //   window.location.href = "index-2.html";
  // } else {
  //   window.location.href = "index.html";
  // }

  // if (switchInput.checked) {
  //   window.location.href = "index-2.html";
  // }
});

// Advanced search
const advSearchBtn = document.querySelector(".adv-search-btn");
const advSearch = document.getElementById("adv-search");
const cancelBtn = document.getElementById("cancel-btn");

document.addEventListener("click", (event) => {
  if (event.target !== advSearchBtn && !advSearchBtn.contains(event.target)) {
    advSearch.classList.add("hide");
  } else {
    advSearch.classList.toggle("hide");
  }
});

advSearch.addEventListener("click", (event) => {
  event.stopPropagation();
});

cancelBtn.addEventListener("click", () => {
  advSearch.classList.add("hide");
  console.log("first");
});
