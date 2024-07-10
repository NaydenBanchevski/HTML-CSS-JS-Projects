let toggler = document.getElementById("switch");
let title = document.getElementById("title");
toggler.addEventListener("click", () => {
  if (toggler.checked === true) {
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = "white";
  }
  if (toggler.checked === true) {
    title.style.color = "white";
    title.innerText = "Dark Mode";
  } else {
    title.style.color = "black";
    title.innerText = "Light Mode";
  }
});
