const hamburger = document.querySelector(".hamburger");
const navlink = document.querySelector(".navLinks");
const dropdownLink = document.querySelector(".js-dropdown-link");
const dropdownLink2 = document.querySelector(".js-dropdown-link-2");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navlink.classList.toggle("active");
});
document.querySelectorAll(".link").forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
  })
);
document.querySelector(".main").addEventListener("click", () => {
  hamburger.classList.remove("active");
  navlink.classList.remove("active");
});
document.querySelectorAll(".js-dropdown").forEach((dropdown) =>
  dropdown.addEventListener("click", () => {
    dropdownLink.classList.toggle("activated");
  })
);
document.querySelectorAll(".js-dropdown2").forEach((dropdown) =>
  dropdown.addEventListener("click", () => {
    dropdownLink2.classList.toggle("activated");
  })
);
