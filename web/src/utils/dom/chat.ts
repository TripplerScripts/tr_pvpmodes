import useUnfocus from "../../hooks/useUnfocus"

const block = document.getElementById('block')
const outside = document.getElementById('root') || document.getElementById('container')

outside?.addEventListener('mousedown', (e) => {
  if (!block?.contains(e.target as Node)) {
    useUnfocus()
  }
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    useUnfocus()
  }
})