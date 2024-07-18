const nav = document.querySelector(".nav");
const content = document.querySelector(".content-box");
const hero = document.querySelector(".container");

window.addEventListener("scroll", responsiveNav);

function responsiveNav() {
  if (window.scrollY > nav.offsetHeight + 750) {
    nav.classList.add("active");
    content.classList.add("open");
    hero.classList.add("hide");
  } else if (window.scrollY < nav.offsetHeight + 800) {
    nav.classList.remove("active");
    content.classList.remove("open");
    hero.classList.remove("hide");
  }
}
