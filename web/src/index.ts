

import { fatal, trace } from '@trippler/tr_lib/shared'
import { triggerNuiCallback } from '@trippler/tr_lib/web'
import { Suggestion } from '../../shared/types'
import './features'

const root = document.getElementById(`root`)
export const suggestions: Suggestion[] = []

export const removeSuggestion = (name: string) => {
  for (const [key, value] of suggestions.entries()) {
    if (value.name === name) {
      suggestions.splice(key, 1)
      return
    }
  }
  trace(`tried to remove suggestion '${name}' but it was not found`)
}

export const hideChat = () => {
  triggerNuiCallback<boolean>('loseKeyboard')
  if (root) root.classList.add('hidden')
}

const openChat = () => {
  if (!root)  return
  root.classList.remove('hidden')
  const inputElement = document.querySelector('.input') as HTMLInputElement
  inputElement?.focus()
}

window.addEventListener('message', (event) => {
  const message = event.data
  if (message.type === 'open') {
    openChat()
  } else {
    if (message.type === 'message') {
      console.log(message.message)
    } else {
      if (message.type === 'suggestion') {
        suggestions.push({ 
          name: message.suggestion.name[0] !== `/` ? message.suggestion.name : message.suggestion.name.slice(1),
          help: message.suggestion.help,
          params: message.suggestion.params
        })
      } else {
        if (message.type === 'remove_suggestion') {
          removeSuggestion(message.name[0] !== `/` ? message.name : message.name.slice(1))
        } else fatal(`unexpected message type received ${message.type}`)
      }
    }
  }
})

document.addEventListener("DOMContentLoaded", () => {
  triggerNuiCallback<boolean>('loaded')
})