document.addEventListener("DOMContentLoaded", (event) => {
  const searchBtn = document.querySelector(".btn-search");
  const searchForm = document.querySelector(".search-form");
  const toggleBtn = document.querySelector(".toggle-btn");
  const navLinks = document.querySelector(".nav-links");

  searchBtn.addEventListener("click", () => {
    searchForm.classList.toggle("active");
  });
  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
