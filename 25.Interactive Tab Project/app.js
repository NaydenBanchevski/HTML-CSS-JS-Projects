function openTab(el) {
  const active = document.querySelector(".active");
  const visible = document.querySelector(".visible");
  const textContainer = document.getElementById(el.href.split("#")[1]);

  active.classList.toggle("active");
  visible.classList.toggle("visible");

  el.classList.toggle("active");
  textContainer.classList.toggle("visible");
}

document.addEventListener("click", (e) => {
  if (e.target.matches(".btn a")) openTab(e.target);
});
