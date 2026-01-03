import { onNuiCallback } from "@trippler/tr_lib/web"
import { Message, Suggestion } from "../../../shared/types"
import { addMessage, addSuggestion, removeSuggestion } from "../modules/chat"
import { openChat } from "../modules/chat/toggles"

onNuiCallback('chat/openChat', () => {
  openChat()
})

openChat()
addMessage({
  args: ['Hello, World!', 'This is Lenix']
})

onNuiCallback<[Message]>('chat/message', (message) => {
  addMessage(message)
})

onNuiCallback<[Suggestion['name'], Suggestion['help'], Suggestion['params']]>('chat/addSuggestion', (name, help, params) => {
  addSuggestion(name, help, params)
})

onNuiCallback<[Suggestion['name']]>('chat/removeSuggestion', (name) => {
  removeSuggestion(name)
})

export const sendCommand = (raw: string) => {
  sendCommand(raw)
}