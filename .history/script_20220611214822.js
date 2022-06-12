const inputActive = document.querySelectorAll(".input");
const button = documento.querySelector(".login__button");

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

  if (username.value && password.value.length >= 8) {
    button.removeAtribute("disabled");
  }
};

inputActive.forEach((input) => input.addEventListener("focus", handleFocus));
inputActive.forEach((input) =>
  input.addEventListener("focusout", handleFocusout)
);
inputActive.forEach((input) => input.addEventListener("input", handleChange));
