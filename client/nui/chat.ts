import { onNuiCallback, onDOMLoaded } from "@trippler/tr_lib/client"
import { addSuggestions } from "../modules/chat"
import { earlySuggestionsInsertion, setDOMLoaded } from ".."
import { logoutPlayer } from "../modules/spawn"

onNuiCallback<{ command: string[] }>('chat/sendCommand', (data, callback) => {
  ExecuteCommand(data.command.join(' '))
  callback(true)
})

onDOMLoaded(() => {
  setDOMLoaded(true)
  addSuggestions(earlySuggestionsInsertion)
})

onNuiCallback<null>('leaveFreeroam', (_data, callback) => {
  logoutPlayer()
  callback(true)
})