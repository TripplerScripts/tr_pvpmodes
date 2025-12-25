import { triggerNuiCallback } from '@trippler/tr_lib/client'
import { fatal } from '@trippler/tr_lib/shared'

const addMessage = (message: string) => {
  if (typeof message !== 'string') {
    fatal(`expected string at #2, got ${typeof message}`)
    return
  }
  triggerNuiCallback({
    type: 'message',
    message
  })
}

const addSuggestion = (name: string, help: string, params: string[]) => {
  triggerNuiCallback({
    type: 'suggestion',
    suggestion: {
      name,
      help,
      params
    }
  })
}

const addSuggestions = (suggestions: string[]) => {
  for (let i = 0; i < suggestions.length; i++) {
    triggerNuiCallback({
      type: 'suggestion',
      suggestion: suggestions[i]
    })
  }
}

const removeSuggestion = (name: string) => {
  triggerNuiCallback({
    type: 'remove_suggestion',
    name
  })
}

onNet('chat:addMessage', addMessage)
onNet('chat:addSuggestion', addSuggestion)
onNet('chat:addSuggestions', addSuggestions)
onNet('chat:removeSuggestion', removeSuggestion)

globalThis.exports('addMessage', addMessage)
globalThis.exports('addSuggestion', addSuggestion)
globalThis.exports('addSuggestions', addSuggestions)
globalThis.exports('removeSuggestion', removeSuggestion)