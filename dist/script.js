const hamburger = document.querySelector(".hamburger");
const navlink = document.querySelector(".navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navlink.classList.toggle("active");
});
document.querySelectorAll(".link").forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navlink.classList.remove("active");
  })
);
document.querySelector(".main").addEventListener("click", () => {
  hamburger.classList.remove("active");
  navlink.classList.remove("active");
});
