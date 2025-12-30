import { onNuiCallback, triggerNuiCallback } from "@trippler/tr_lib/web"
import useHideChat from "../hooks/chat/useHideChat"
import { trace } from '@trippler/tr_lib/shared'
import { suggestions } from "../hooks/chat"
import { changeBorderColor } from "../hooks/chat/useChangeBorderColor"
import { getArrayfiedPassedCharacters } from "../utils/chat"
import { Message, Suggestion } from "../../../shared/types"

const root = document.getElementById(`chat-root`)

onNuiCallback('chat/open', () => {
  if (!root)  return
  root.classList.remove('hidden')
  const inputElement = document.querySelector('.input') as HTMLInputElement
  inputElement?.focus()
})

onNuiCallback<[Message]>('chat/message', (message) => {
  console.log(message)
})

onNuiCallback<[Suggestion['name'], Suggestion['help'], Suggestion['params']]>('chat/suggestion', (name, help, params) => {
  suggestions.push({ 
    name: name[0] !== `/` ? name : name.slice(1),
    help,
    params
  })
})

onNuiCallback<[string]>('chat/remove_suggestion', (name) => {
  const filteredName = name[0] !== `/` ? name : name.slice(1)
  for (const [key, value] of suggestions.entries()) {
    if (value.name === filteredName) {
      suggestions.splice(key, 1)
      return
    }
  }
  trace(`tried to remove suggestion '${name}' but it was not found`)
})

export const passCommand = (raw: string) => {
  triggerNuiCallback<boolean>('chat/onCommand', { command: getArrayfiedPassedCharacters(raw) })
  changeBorderColor()
  useHideChat()
}

export const grabCursor = () => {
  triggerNuiCallback<boolean>('chat/grabCursor')
}

document.addEventListener("DOMContentLoaded", () => {
  triggerNuiCallback<boolean>('chat/loaded')
})