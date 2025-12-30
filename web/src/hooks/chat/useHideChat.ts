import { triggerNuiCallback } from "@trippler/tr_lib/web"

const root = document.getElementById(`chat-root`)

export default () => {
  triggerNuiCallback<boolean>('chat/loseKeyboard')
  if (root) root.classList.add('hidden')
}