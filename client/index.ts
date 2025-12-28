import { onNuiCallback, triggerNuiCallback } from '@trippler/tr_lib/client'
import { fatal } from '@trippler/tr_lib/shared'
import { Message, Suggestion } from '../shared/types'

let DOMLoaded = false
const earlySuggestionsInsertion: Suggestion[] = []

const addMessage = (message: Message) => {
  if (typeof message !== 'string') {
    fatal(`expected string at #2, got ${typeof message}`)
    return
  }
  triggerNuiCallback({
    type: 'message',
    message
  })
}

const isIterable = (obj: any) => {
  return obj != null && typeof obj[Symbol.iterator] === 'function'
}

const addSuggestion = (name: Suggestion['name'], help: Suggestion['help'], params: Suggestion['params']) => {
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

const addSuggestions = (suggestions: Suggestion[]) => {
  if (!Array.isArray(suggestions)) {
    fatal(`expected array at #2, got ${typeof suggestions}`)
    return
  }

  for (let i = 0; i < suggestions.length; i++) {
    addSuggestion(suggestions[i]?.name, suggestions[i]?.help, suggestions[i]?.params)
  }
}

const removeSuggestion = (name: string) => {
  if (typeof name !== 'string') {
    fatal(`expected string at #2, got ${typeof name}`)
    return
  }

  triggerNuiCallback({
    type: 'remove_suggestion',
    name
  })
}

onNuiCallback('grabCursor', (_data, callback) => {
  SetNuiFocus(true, true)
  callback(true)
})

onNuiCallback<{ command: string[] }>('onCommand', (data, callback) => {
  ExecuteCommand(data.command.join(' '))
  callback(true)
})

onNuiCallback<null>('loseKeyboard', (_data, callback) => {
  SetNuiFocus(false, false)
  callback(true)
})

onNuiCallback<null>('loaded', (_data, callback) => {
  DOMLoaded = true
  addSuggestions(earlySuggestionsInsertion)
  callback(true)
})

on(`__cfx_export_chat_addMessage`, (cb: Function) => {
  cb(addMessage)
})

globalThis.exports.tr_lib.init().control.onDisabled('T', () => {
  triggerNuiCallback({
    type: 'open'
  })
  SetNuiFocus(true, false)
})


onNet('chat:addMessage', addMessage)
onNet('chat:addSuggestion', addSuggestion)
onNet('chat:addSuggestions', addSuggestions)
onNet('chat:removeSuggestion', removeSuggestion)

globalThis.exports('addMessage', addMessage)
globalThis.exports('addSuggestion', addSuggestion)
globalThis.exports('addSuggestions', addSuggestions)
globalThis.exports('removeSuggestion', removeSuggestion)