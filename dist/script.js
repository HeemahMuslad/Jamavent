const hamburger = document.querySelector(".hamburger");
const navlink = document.querySelector(".navLinks");
const dropdownLink = document.querySelector(".js-dropdown-link");
const dropdownLink2 = document.querySelector(".js-dropdown-link-2");
let isDropped = false;
let isDropped2 = false;

console.log(isDropped);
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navlink.classList.toggle("active");
  dropdownLink.classList.remove("activated");
  dropdownLink2.classList.remove("activated");
});

document.querySelector(".main").addEventListener("click", () => {
  hamburger.classList.remove("active");
  navlink.classList.remove("active");
  dropdownLink.classList.remove("activated");
  dropdownLink2.classList.remove("activated");
});

document.querySelectorAll(".js-dropdown").forEach((dropdown) =>
  dropdown.addEventListener("click", () => {
    isDropped = !isDropped;
    dropdownLink.classList.toggle("activated");
    if (!isDropped) {
      navlink.classList.remove("active");
    }
  })
);
document.querySelectorAll(".link").forEach((link) =>
  link.addEventListener("click", () => {
    if (!isDropped && !isDropped2) {
      navlink.classList.remove("active");
      hamburger.classList.remove("active");
    }
  })
);

document.querySelectorAll(".js-dropdown2").forEach((dropdown) =>
  dropdown.addEventListener("click", () => {
    isDropped2 = !isDropped2;
    dropdownLink2.classList.toggle("activated");
  })
);
