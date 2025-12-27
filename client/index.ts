import { onNuiCallback, triggerNuiCallback } from '@trippler/tr_lib/client'
import { fatal } from '@trippler/tr_lib/shared'
import { Message, Suggestion } from '../shared/types'

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

const addSuggestion = (name: Suggestion['name'], help: Suggestion['help'], params: Suggestion['params']) => {
  if (typeof name !== 'string') {
    fatal(`expected string at #2, got ${typeof name}`)
    return
  }
  let optionalFound = false
  for (const param of params) {
    if (param.optional) {
      optionalFound = true
    } else if (optionalFound) fatal(`A required parameter cannot be after an optional parameter`)
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

globalThis.exports.tr_lib.init().control.onDisabled('T', () => {
  triggerNuiCallback({
    type: 'open'
  })
  SetNuiFocus(true, false)
})

onNuiCallback<{ command: string[] }>('onCommand', (data, callback) => {
  ExecuteCommand(data.command.join(' '))
  callback(true)
})

onNuiCallback<null>('loseKeyboard', (_data, callback) => {
  SetNuiFocus(false, false)
  callback(true)
})

on(`__cfx_export_chat_addMessage`, (cb: Function) => {
  cb(addMessage)
})

onNet('chat:addMessage', addMessage)
onNet('chat:addSuggestion', addSuggestion)
onNet('chat:addSuggestions', addSuggestions)
onNet('chat:removeSuggestion', removeSuggestion)

globalThis.exports('addMessage', addMessage)
globalThis.exports('addSuggestion', addSuggestion)
globalThis.exports('addSuggestions', addSuggestions)
globalThis.exports('removeSuggestion', removeSuggestion)