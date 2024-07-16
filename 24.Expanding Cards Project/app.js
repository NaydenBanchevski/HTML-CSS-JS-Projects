const slides = document.querySelectorAll(".slide");

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    removeCurrentActiveSlides();
    slide.classList.add("active");
  });
});

function removeCurrentActiveSlides() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}
