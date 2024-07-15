const openBtn = document.getElementById("open");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close");
const modalContainer = document.querySelector(".modal-container");

openBtn.addEventListener("click", () => modal.classList.add("show-modal"));

function closeModal() {
  closeBtn.addEventListener("click", () =>
    modal.classList.remove("show-modal")
  );

  modalContainer.addEventListener("click", () =>
    modal.classList.remove("show-modal")
  );

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.classList.remove("show-modal");
    }
  });
}

closeModal();
