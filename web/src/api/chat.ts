import { nuiFocus, onNuiCallback, triggerNuiCallback } from "@trippler/tr_lib/web"
import useHideChat from "../hooks/chat/useHideChat"
import { trace } from '@trippler/tr_lib/shared'
import { suggestions } from "../hooks/chat"
import { changeBorderColor } from "../hooks/chat/useChangeBorderColor"
import { getArrayfiedPassedCharacters } from "../utils/chat"
import { Message, Suggestion } from "../../../shared/types"
import useOpenChat from "../hooks/chat/useOpenChat"
import useAddSuggestion from "../hooks/chat/useAddSuggestion"
import useRemoveSuggestion from "../hooks/chat/useRemoveSuggestion"
import useSendCommand from "../hooks/chat/useSendCommand"


onNuiCallback('chat/openChat', () => {
  useOpenChat()
})

onNuiCallback<[Message]>('chat/message', (message) => {
  console.log(message)
})

onNuiCallback<[Suggestion['name'], Suggestion['help'], Suggestion['params']]>('chat/addSuggestion', (name, help, params) => {
  useAddSuggestion(name, help, params)
})

onNuiCallback<[Suggestion['name']]>('chat/removeSuggestion', (name) => {
  useRemoveSuggestion(name)
})

export const sendCommand = (raw: string) => {
  useSendCommand(raw)
}

document.addEventListener("DOMContentLoaded", () => {
  triggerNuiCallback<boolean>('chat/loaded')
})