// images
// wrapper
// img-wrapper
// close span

let images = document.querySelectorAll("img");
let wrapper = document.getElementById("wrapper");
let imgWrapper = document.getElementById("full-img");
let close = document.querySelector("span");

close.addEventListener("click", function () {
  wrapper.style.display = "none";
});

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    openModal(`assets/img-${index}.jpg`);
  });
});
function openModal(pic) {
  wrapper.style.display = "flex";
  imgWrapper.src = pic;
}
