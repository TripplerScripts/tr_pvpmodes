import { nuiFocus } from "@trippler/tr_lib/web"

const root = document.getElementById(`chat-root`)

export default () => {
  nuiFocus(false, false)
  if (root) root.classList.add('hidden')
}