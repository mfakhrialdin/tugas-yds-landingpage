// kode javascript untuk index.html
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const triangle = document.querySelector(".triangle");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  triangle.classList.toggle("active");
});
