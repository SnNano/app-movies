document.addEventListener("DOMContentLoaded", (event) => {
  const searchBtn = document.querySelector(".btn-search");
  const searchForm = document.querySelector(".search-form");
  searchBtn.addEventListener("click", () => {
    searchForm.classList.toggle("active");
  });
});
