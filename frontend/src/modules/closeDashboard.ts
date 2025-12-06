import sendCallback from "../components/sendCallback"

export default (): void => {
  sendCallback('unfocus')
  const root = document.getElementById('root')
  if (root) {
    root.classList.add('hidden')
  }
}