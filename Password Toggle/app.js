const eyeIcon = document.querySelector("#eye-icon");
const eyeIcon2 = document.querySelector("#eye-icon2");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

eyeIcon.addEventListener("click", (e) => {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  e.target.classList.toggle("bi-eye");
});

eyeIcon2.addEventListener("click", (e) => {
  const type =
    confirmPassword.getAttribute("type") === "password" ? "text" : "password";
  confirmPassword.setAttribute("type", type);

  e.target.classList.toggle("bi-eye");
});

const form = document.querySelector("#myform");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
