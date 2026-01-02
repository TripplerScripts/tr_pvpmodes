import escapeMenu from "../components/dashboard/escapeMenu"

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    escapeMenu()
  }
})