const headerStyles = {
}

Object.entries(headerStyles).forEach(([className, styles]) => {
  const elements = document.querySelectorAll(`.${className}`)
  elements.forEach((element) => {
    (element as HTMLElement).className = styles
  })
})