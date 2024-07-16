const options = document.getElementsByClassName("options");
const arrow = document.querySelector(".arrow");
let selectField = document.getElementById("selectField");
let selectText = document.getElementById("selectText");
let list = document.getElementById("list");

selectField.addEventListener("click", () => {
  list.classList.toggle("hide");
  arrow.classList.toggle("rotate");
});

for (option of options) {
  option.onclick = function () {
    selectText.innerHTML = this.textContent;
    list.classList.toggle("hide");
    arrow.classList.toggle("rotate");
  };
}
