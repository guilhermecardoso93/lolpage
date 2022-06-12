const inputActive = document.querySelectorAll(".input");
const button = documento.querySelector(".login_button");

const handleFocus = ({ target }) => {
  const span = target.previousElementSibling;
  span.classList.add("span-active");
};

const handleFocusout = ({ target }) => {
  if (target.value == "") {
    const span = target.previousElementSibling;
    span.classList.remove("span-active");
  }
};

const handleChange = () => {
  const [username, password] = inputActive;

  if (username.value && password.value.lenght >= 8) {
    button.removeAtribute("disable");
  }
};

inputActive.forEach((input) => input.addEventListener("focus", handleFocus));
inputActive.forEach((input) =>
  input.addEventListener("focusout", handleFocusout)
);
inputActive.forEach((input) => input.addEventListener("input", handleChange));
