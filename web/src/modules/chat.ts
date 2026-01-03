import { triggerNuiCallback } from "@trippler/tr_lib/web"
import { getArrayfiedPassedCharacters } from "../utils/chat"
import { changeBorderColor } from "../hooks/chat/useChangeBorderColor"
import { nuiFocus } from "@trippler/tr_lib/web"
import { trace } from "@trippler/tr_lib/shared"
import { Message, Suggestion } from "../../../shared/types"
import { CommandName } from "../../../shared/types"
import { getState } from "../states"
import { input } from "../elements/chat/input"
import { resultsFound } from "../hooks/chat/useUpdateSuggetions"

const root = document.getElementById(`chat-root`)

export const sendCommand = (raw: string) => {
  triggerNuiCallback<boolean>('chat/sendCommand', { command: getArrayfiedPassedCharacters(raw) })
  changeBorderColor()
  hideChat()
}

export const openChat = () => {
  nuiFocus(true, false)
  if (!root) return
  root.classList.remove('hidden')
  const inputElement = document.querySelector('.input') as HTMLInputElement
  inputElement?.focus()
}

export const removeSuggestion = (name: Suggestion['name']) => {
  const filteredName = name[0] !== `/` ? name : name.slice(1)
  for (const [key, value] of getState.suggestions.entries()) {
    if (value.name === filteredName) {
      getState.suggestions.splice(key, 1)
      return
    }
  }
  trace(`tried to remove suggestion '${name}' but it was not found`)
}

export const hideChat = () => {
  nuiFocus(false, false)
  if (root) root.classList.add('hidden')
}


export const useStoreFrequentlyUsedCommands = (command: string) => {
  const previousStoredCommands = getStoredFrequentlyUsedCommands()
  
  if (previousStoredCommands.includes(command)) {
    const filtered = previousStoredCommands.filter(storedCommand => storedCommand !== command)
    localStorage.setItem('frequentlyUsedCommands', JSON.stringify([command, ...filtered]))
    return
  }
  
  localStorage.setItem('frequentlyUsedCommands', JSON.stringify([command, ...previousStoredCommands]))
}

export const getStoredFrequentlyUsedCommands = (): CommandName[] => {
  return JSON.parse(localStorage.getItem('frequentlyUsedCommands') || '[]')
}

export const clearStoredFrequentlyUsedCommands = () => {
  localStorage.removeItem('frequentlyUsedCommands')
}

export const addSuggestion = (
  name: Suggestion['name'],
  help: Suggestion['help'],
  params: Suggestion['params']  
) => {
  getState.suggestions.push({ 
    name: name[0] !== `/` ? name : name.slice(1),
    help,
    params
  })
}

export const acceptSuggetion = (suggestion: string | undefined) => {
  if (!suggestion || resultsFound < 1) return
  input.value = `/${suggestion}`
}

export const addMessage = (message: Message) => {
  console.log(message)
}

export const preventPlaceholderDuplication = (index: number) => {
  const element = document.getElementById(`chat-suggestion-item-${index}`)
  if (element) {
    element.innerHTML = ''
  }
}