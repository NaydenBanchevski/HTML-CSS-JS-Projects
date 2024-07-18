const paragraph = document.getElementById("paragraph");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
  let input = document.getElementById("input").value;
  if (input !== "") {
    let regExp = new RegExp(input, "gi");
    paragraph.innerHTML = paragraph.innerText.replace(
      regExp,
      "<mark>$&</mark>"
    );
  }
});

console.log(searchBtn);
