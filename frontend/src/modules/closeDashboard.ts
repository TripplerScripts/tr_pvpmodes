import sendCallback from "../components/sendCallback"

export default function closeDashboard() {
  sendCallback('unfocus')
  const root = document.getElementById('root')
  if (root) {
    root.classList.add('hidden')
  }
}