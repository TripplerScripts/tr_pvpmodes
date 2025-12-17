import { createElement } from "@lenixdev/ui_components"
import { isFocused, messageCount, pendingMessageForFadeCount, setMessagesCount, setPendingMessageForFadeCount } from ".."
import { PlayerObject } from "../../../shared/constants/config"
import { messagesFadeDuration } from "../../../shared/constants/config"

export default (message: string, player: PlayerObject) => {
  createElement({
    parent: 'messages',
    id: 'message-' + setMessagesCount(messageCount + 1),
    className: 'w-full text-white text-lg p-1 rounded flex flex-wrap items-start gap-1 transition-opacity duration-[5s] opacity-100',
  })

  createElement({
    parent: "message-" + messageCount,
    className: "text-stone-400 text-lg shrink-0",
    content: '@' + player.name
  })

  createElement({
    parent: "message-" + messageCount,
    className: "text-[" + player.role.color + "] text-lg shrink-0",
    content: ' (' + player.role.name + '): '
  })

  createElement({
    parent: "message-" + messageCount,
    className: "text-white text-lg break-words min-w-0",
    content: message
  })

  const messageElement = document.getElementById('message-' + messageCount)

  if (messageElement) {
    pendingMessageForFadeCount.push(messageCount)
    const currentMessageId = messageCount
    setTimeout(() => {
      setPendingMessageForFadeCount(pendingMessageForFadeCount.filter((id) => id !== currentMessageId))
      if (!isFocused) {
        messageElement.classList.remove('opacity-100')
        messageElement.classList.add('opacity-0')
      }
    }, messagesFadeDuration)
  }
  const messages = document.getElementById('messages')
  if (messages) {
    messages.scrollTop = messages.scrollHeight
  }
}