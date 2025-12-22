import './features'
import './utils/dom/chat'
import useFocus from "./hooks/useFocus"
import createNewMessageForAll from './components/createNewMessageForAll'
import { triggerNuiCallback } from '@trippler/tr_lib/web'

window.addEventListener('message', (event) => {
  if (event.data.action === 'open' && !isFocused) {
    useFocus()
  } else {
    if (event.data.action === 'createNewMessage') {
      createNewMessageForAll(event.data.message, event.data.userRole)
    }
  }
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'F11') {
    triggerNuiCallback<unknown>('focus')
  }
})

export let inCooldown = false
export let messageCount = 0
export let isFocused = false
export let pendingMessageForFadeCount: number[] = []

export const setFocus = (state: boolean) => isFocused = state
export const setMessagesCount = (count: number) => messageCount = count
export const setPendingMessageForFadeCount = (count: number[]) => pendingMessageForFadeCount = count
export const setInCooldown = (state: boolean) => inCooldown = state