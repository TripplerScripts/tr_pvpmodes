export const bodyStyles = {
}

Object.entries(bodyStyles).forEach(([className, styles]) => {
  const elements = document.querySelectorAll(`.${className}`)
  elements.forEach((element) => {
    element.className = styles
  })
})