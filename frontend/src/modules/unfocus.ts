import sendCallback from "../components/sendCallback"

export default function unfocus () {
  sendCallback('unfocus')
  const root = document.getElementById('root')
  if (root) {
    root.classList.add('hidden')
  }
}