import { createElement } from "@lenixdev/ui_components"
import { CommandName, recentCommands, suggestionsCount } from "../../../shared/constants/config"
import { input } from "../features/input"
import { findClosest, getCommandArguments } from "../utils"
import { useCommandSelection, currentItemSelected, useClearCommandSelection } from "./useCommandSelection"

let closestRelative: string | undefined
let resultsFound: number = 0
let currentArgumentIndex: number = 0

const acceptSuggestions = (suggestion: string | undefined) => {
  if (!suggestion || resultsFound < 1) return
  input.value = `/${suggestion}`
}

document.addEventListener('keydown', (event) => {
  if (!input.focus) return
  if (event.key === 'Tab') {
    acceptSuggestions(closestRelative)
  }
  if (event.key === 'Enter') {
    acceptSuggestions((currentItemSelected?.innerHTML)?.slice(1))
  }
  if (event.key === 'ArrowUp') {
    useCommandSelection('up')
  }
  if (event.key === 'ArrowDown') {
    useCommandSelection('down')
  }
  if (event.key === 'Escape') {
    useClearCommandSelection()
  }
})

const createCommand = (parent: string, command: CommandName) => {
  createElement({
    parent,
    id: `chat-suggestion-item-command`,
    content: `/${command}`
  })
  for (let i = 0; i < 3; i++) {
    createElement({
      parent,
      id: `chat-suggestion-item-argument-${i}`,
      className: ``,
      content: `${getCommandArguments(command)[i]}`
    })
  }
}

export default (textTyped: string) => {
  closestRelative = undefined
  resultsFound = 0

  for (let i = 0; i < suggestionsCount; i++) {
    const commandItem = document.getElementById(`chat-suggestion-item-${i}`)!

    if (textTyped.length > 0 && textTyped[0] === '/') {
      if (textTyped.length > 1) {
        const commandSuggested = findClosest(textTyped)[i]
        if (commandSuggested) {
          resultsFound++
          if (!closestRelative) {
            closestRelative = commandSuggested
            createCommand(`chat-suggestion-item-${i}`, commandSuggested)
          } else {
            createCommand(`chat-suggestion-item-${i}`, commandSuggested)
          }
        } else {
          commandItem.textContent = ``
          if (currentItemSelected?.id === `chat-suggestion-item-${i}`) {
            useClearCommandSelection()
          }
        }
      } else {
        if (recentCommands[i]) {
          resultsFound++
          if (!closestRelative) {
            closestRelative = recentCommands[i]
            createCommand(`chat-suggestion-item-${i}`, recentCommands[i])
          } else {
            createCommand(`chat-suggestion-item-${i}`, recentCommands[i])
          }
        }
      }
    } else {
      commandItem.textContent = ``
      useClearCommandSelection()
    }
  }
}