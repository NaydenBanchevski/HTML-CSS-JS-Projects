const itemHeaders = document.querySelectorAll(".accordion-item-header");
itemHeaders.forEach((item) => {
  item.addEventListener("click", collapseItems);
  function collapseItems() {
    const activeItem = document.querySelector(".active");
    if (activeItem && activeItem !== item) {
      activeItem.classList.toggle("active");
      activeItem.nextElementSibling.style.maxHeight = 0;
    }
    item.classList.toggle("active");
    const itemBody = item.nextElementSibling;
    if (item.classList.contains("active")) {
      itemBody.style.maxHeight = itemBody.scrollHeight + "px";
    } else {
      itemBody.style.maxHeight = 0;
    }
  }
});
