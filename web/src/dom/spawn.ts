import escapeMenu from "../components/spawn/escapeMenu"

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    escapeMenu()
  }
})