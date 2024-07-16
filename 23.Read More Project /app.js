const btn = document.querySelector(".btn");
const hide = document.querySelector(".hidden");

btn.addEventListener("click", function () {
  hide.classList.toggle("hidden");
  btn.textContent === "Show More"
    ? (btn.textContent = "Show Less")
    : (btn.textContent = "Show More");
  btn.classList.toggle("btn-color");
});
