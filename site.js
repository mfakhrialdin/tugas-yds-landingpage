// kode javascript untuk responsive navbar
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const triangle = document.querySelector(".triangle");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  triangle.classList.toggle("active");
});

// membuat back to top button
const btnToTop = document.getElementById("btnToTop");
// kemunculan button saat posisi 25% dari dasar web
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 1024 ||
    document.documentElement.scrollTop > 1024
  ) {
    btnToTop.style.display = "block";
  } else {
    btnToTop.style.display = "none";
  }
}

// saat user meng-click button, scroll kembali ke atas
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
