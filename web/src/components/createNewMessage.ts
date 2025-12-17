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
    const bar = document.getElementById('cooldown-bar')
    canSend = true
    bar?.classList.add('hidden')
    setInCooldown(false)
  }, messagesCooldown * 1000);
  
  input.value = ''

  const characterLeftElement = document.getElementById('character-left')
  characterLeftElement?.classList.add('hidden')

  sendCallback('createNewMessageRequest', message)
}