const inputActive = document.querySelectorAll('.input')

const handleFocus = ({target}) => {
  const span = target.previousElementSibling;
  span.classList.add('span-active')
}

const handleFocusout = ({target}) => {
  const span = target.previousElementSibling;
  span.classList.remove('span-active')
}

inputActive.forEach((input) => input.addEventListener('focus', handleFocus))
inputActive.forEach((input) => input.addEventListener('focusout', handleFocusout))


