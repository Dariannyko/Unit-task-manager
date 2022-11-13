const navIcon = document.querySelector(".nav-icon");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");
const searchForm = document.querySelector(".search");
const searchButton = document.querySelector(".search__button");

navIcon.addEventListener("click", function () {
  this.classList.toggle("nav-icon--active");
  nav.classList.toggle("nav--active");
});

navLinks.forEach((item) => {
  item.addEventListener("click", () => {
    navIcon.classList.remove("nav-icon--active");
    nav.classList.remove("nav--active");
  });
});

searchButton.addEventListener("click", (event) => {
  if (!searchForm.classList.contains("search--visible")) {
    event.preventDefault();
  }
  searchForm.classList.toggle("search--visible");
});
