import { onNuiCallback } from "@trippler/tr_lib/client"
import { addSuggestions } from "../modules/chat"
import { earlySuggestionsInsertion, setDOMLoaded } from ".."

onNuiCallback<{ command: string[] }>('chat/sendCommand', (data, callback) => {
  ExecuteCommand(data.command.join(' '))
  callback(true)
})

onNuiCallback<null>('chat/loaded', (_data, callback) => {
  setDOMLoaded(true)
  addSuggestions(earlySuggestionsInsertion)
  callback(true)
})

onNuiCallback<null>('leaveFreeroam', (_data, callback) => {
  emitNet('tr_onboarding/server/logout')
  callback(true)
})