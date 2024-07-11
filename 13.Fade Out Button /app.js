let arrow = document.getElementById("arrow");

window.addEventListener("scroll", () => {
  let position = window.scrollY;
  position > 50
    ? arrow.classList.add("fade-out")
    : arrow.classList.remove("fade-out");
});
