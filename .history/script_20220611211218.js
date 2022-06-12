const inputActive = document.querySelectorAll('.input')

inputActive.forEach((input) => {
  input.addEventListener('focus', handleFocus)
})


