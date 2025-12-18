import { maxTextLength, messagesCooldown, messagesFadeDuration } from "../../../shared/constants/config"
import useCooldown from "../hooks/useCooldown"
import { input } from "../features/chat"
import { sendCallback } from "@lenixdev/ui_components"
import { setInCooldown } from ".."

let canSend = true

export default (message: string) => {
  if (!message.trim()) return
  if (!canSend) return
  if (message.length > maxTextLength) return
  
  useCooldown()
  canSend = false
  setTimeout(() => {
    canSend = true
    setInCooldown(false)
  }, messagesCooldown * 1000);
  
  input.value = ''

  const characterLeftElement = document.getElementById('characters-left')
  characterLeftElement?.classList.add('hidden')

  sendCallback('createNewMessageRequest', message)
}