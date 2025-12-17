import './features'
import './utils/dom/chat'
import useFocus from "./hooks/useFocus"
import createNewMessageForAll from './components/createNewMessageForAll'

window.addEventListener('message', (event) => {
  if (event.data.action === 'open' && !isFocused) {
    useFocus()
  } else {
    if (event.data.action === 'createNewMessage') {
      createNewMessageForAll(event.data.message)
    }
  }
})

export let messageCount = 0
export let isFocused = false
export let pendingMessageForFadeCount: number[] = []

export const setFocus = (state: boolean) => isFocused = state
export const setMessagesCount = (count: number) => messageCount = count
export const setPendingMessageForFadeCount = (count: number[]) => pendingMessageForFadeCount = count