import { control, triggerNuiCallback } from "@trippler/tr_lib/client"
import { fatal } from '@trippler/tr_lib/shared'
import { Message, Suggestion } from '../../shared/types'
import { isIterable } from "../utils"

let DOMLoaded = false
const earlySuggestionsInsertion: Suggestion[] = []

control.onDisabled('T', () => {
  triggerNuiCallback({
    type: 'open'
  })
  SetNuiFocus(true, false)
})

export const addMessage = (message: Message) => {
  if (typeof message !== 'object') fatal(`expected object at #2, got ${typeof message}`)
  if (message.template) return fatal(`template messages are not supported`)

  triggerNuiCallback({
    type: 'message',
    message
  })
}

export const addSuggestion = (name: Suggestion['name'], help: Suggestion['help'], params: Suggestion['params']) => {
  if (typeof name !== 'string') {
    fatal(`expected string at #2, got ${typeof name}`)
    return
  }

  if (isIterable(params)) {
    let optionalFound = false
    for (const param of params) {
      if (param.optional) {
        optionalFound = true
      } else if (optionalFound) fatal(`A required parameter cannot be after an optional parameter`)
    }
  }
  if (!DOMLoaded) {
    earlySuggestionsInsertion.push({name, help, params})
  }

  triggerNuiCallback({
    type: 'suggestion',
    suggestion: {
      name,
      help,
      params
    }
  })
}

export const addSuggestions = (suggestions: Suggestion[]) => {
  if (!Array.isArray(suggestions)) {
    fatal(`expected array at #2, got ${typeof suggestions}`)
    return
  }

  for (let i = 0; i < suggestions.length; i++) {
    addSuggestion(suggestions[i]?.name, suggestions[i]?.help, suggestions[i]?.params)
  }
}

export const removeSuggestion = (name: string) => {
  if (typeof name !== 'string') {
    fatal(`expected string at #2, got ${typeof name}`)
    return
  }

  triggerNuiCallback({
    type: 'remove_suggestion',
    name
  })
}