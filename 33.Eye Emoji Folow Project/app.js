document.querySelector("body").addEventListener("mousemove", eyeball);
const emoji = document.querySelector(".emoji-face");
const project = document.querySelector(".project-window");

function eyeball() {
  let eyes = document.querySelectorAll(".eye");
  eyes.forEach((eye) => {
    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rotate = radian * (180 / Math.PI) * -1 + 360;
    eye.style.transform = `rotate(${rotate}deg)`;
  });
}

emoji.addEventListener("click", () => {
  emoji.classList.toggle("click");
  project.classList.toggle("active");
});