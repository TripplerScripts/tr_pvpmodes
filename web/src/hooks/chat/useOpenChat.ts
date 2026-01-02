import { nuiFocus } from "@trippler/tr_lib/web"

export default () => {
  const root = document.getElementById(`chat-root`)
  nuiFocus(true, false)
  if (!root)  return
  root.classList.remove('hidden')
  const inputElement = document.querySelector('.input') as HTMLInputElement
  inputElement?.focus()
}