import { sendCallback } from "@lenixdev/ui_components"

export default async (fromEvent?: boolean) => {
  if (!fromEvent) {
    const response = await sendCallback<boolean>('closeGame')
    if (!response) return
  }
  const root = document.getElementById('root')
  if (root) {
    root.classList.add('hidden')
  }
}