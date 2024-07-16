const eye = document.querySelector(".eye-container");
const input = document.querySelector(".input-password");

eye.addEventListener("click", () => {
  input.type === "password" ? (input.type = "text") : (input.type = "password");
  input.type === "text"
    ? (eye.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`)
    : (eye.innerHTML = `<i id="eye" class="fa-solid fa-eye"></i>`);
});
