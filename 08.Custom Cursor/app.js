let cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function (e) {
  moveCursor(e.pageX, e.pageY);
});
document.body.style.cursor = "none";

function moveCursor(pageX, pageY) {
  cursor.style.left = pageX + "px";
  cursor.style.top = pageY + "px";
}
