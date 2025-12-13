import sendCallback from "../components/sendCallback"

export default async () => {
  const response = await sendCallback('closeGame')
  if (!response) return
  const root = document.getElementById('root')
  if (root) {
    root.classList.add('hidden')
  }
}