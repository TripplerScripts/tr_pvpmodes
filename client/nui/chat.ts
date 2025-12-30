import { onNuiCallback } from "@trippler/tr_lib/client"
import { addSuggestions } from "../game/chat"
import { earlySuggestionsInsertion, setDOMLoaded } from ".."

onNuiCallback<null>('chat/grabCursor', (_data, callback) => {
  SetNuiFocus(true, true)
  callback(true)
})

onNuiCallback<{ command: string[] }>('chat/onCommand', (data, callback) => {
  ExecuteCommand(data.command.join(' '))
  callback(true)
})

onNuiCallback<null>('chat/loseKeyboard', (_data, callback) => {
  SetNuiFocus(false, false)
  callback(true)
})

onNuiCallback<null>('chat/loaded', (_data, callback) => {
  setDOMLoaded(true)
  addSuggestions(earlySuggestionsInsertion)
  callback(true)
})