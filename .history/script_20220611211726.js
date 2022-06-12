const inputActive = document.querySelectorAll('.input')

const handleFocus = ({target}) => {
  const span = target.previousElementSibling;
  span.classList.add('span-active')
}

inputActive.forEach((input) => input.addEventListener('focus', handleFocus))


