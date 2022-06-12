const inputActive = document.querySelectorAll('.input')
const handleFocus = ({target}) => {
  const span = target.previousElementSibling;
}

inputActive.forEach((input) => input.addEventListener('focus', handleFocus))


