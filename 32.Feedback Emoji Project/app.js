const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".rating-container");
const sendBtn = document.querySelector(".btn");
const panel = document.querySelector("#panel");

let selectedRating = "";

ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActives();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});

sendBtn.addEventListener("click", () => {
  panel.innerHTML = `
    <p class="heart">❤️</p>
    <strong>Thank you!</strong>
    <br>
    <strong>Your Rating: ${selectedRating}</strong>`;
});

function removeActives() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
