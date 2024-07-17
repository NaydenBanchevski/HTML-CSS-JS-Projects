// upload
const upload = document.querySelector("input");
// image
const img = document.querySelector(".img img");
// close
const close = document.querySelector(".close");

const title = document.getElementById("title");

upload.addEventListener("change", () => {
  uploadFile(event);
});

function uploadFile(event) {
  img.classList.add("active");
  close.classList.add("exit");
  title.classList.toggle("hidden");
  img.src = URL.createObjectURL(event.target.files[0]);
  close.addEventListener("click", () => {
    img.classList.toggle("active");
    close.classList.toggle("exit");
    title.classList.toggle("hidden");
  });
}
