const nav = document.querySelector("nav");
const openBtn = document.querySelector(".header-btn");
const closeBtn = document.querySelector(".header-close");

openBtn.addEventListener("click", () => {
  nav.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("open");
});
