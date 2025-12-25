import { createElement } from "@lenixdev/ui_components"
import { CommandName, recentCommands, suggestionsCount } from "../../../shared/constants/config"
import { findClosest, getCommandArguments, getCommandLastIndex, getFirstArgumentText, isInShowRecentCommandsPosition, isTextInCommandSyntax } from "../utils"
import { currentItemSelected, useClearCommandSelection } from "./useCommandSelection"
import { preventPlaceholderDuplication } from "../utils/dom"

export let closestRelative: string | undefined
export let resultsFound: number = 0

const createCommand = (parent: string, command: CommandName, lastIndex: number) => {
  createElement({
    parent,
    id: `chat-suggestion-item-command`,
    className: `${lastIndex === 0 ? 'text-stone-300' : 'text-stone-400'}`,
    content: `/${command}`
  })
  for (let i = 0; i < getCommandArguments(command).length; i++) {
    createElement({
      parent,
      id: `chat-suggestion-item-argument-${i}`,
      className: `${lastIndex === i + 1 ? 'text-stone-300' : 'text-stone-400'}`,
      content: `${getCommandArguments(command)[i]}`
    })
  }
}

export default (typedText: string) => {
  closestRelative = undefined
  resultsFound = 0
  for (let i = 0; i < suggestionsCount; i++) {
    preventPlaceholderDuplication(i)
    const commandItem = document.getElementById(`chat-suggestion-item-${i}`)!

    if (isTextInCommandSyntax(typedText)) {
      if (isInShowRecentCommandsPosition(typedText)) {
        if (!recentCommands[i]) continue
        resultsFound++
        if (!closestRelative) {
          closestRelative = recentCommands[i]
          createCommand(`chat-suggestion-item-${i}`, recentCommands[i], getCommandLastIndex(typedText))
        } else {
          createCommand(`chat-suggestion-item-${i}`, recentCommands[i], getCommandLastIndex(typedText))
        }
      } else {
        const commandSuggested = findClosest(getFirstArgumentText(typedText))[i]
        if (commandSuggested) {
          resultsFound++
          if (!closestRelative) {
            closestRelative = commandSuggested
            createCommand(`chat-suggestion-item-${i}`, commandSuggested, getCommandLastIndex(typedText))
          } else {
            createCommand(`chat-suggestion-item-${i}`, commandSuggested, getCommandLastIndex(typedText))
          }
        } else {
          commandItem.textContent = ``
          if (currentItemSelected?.id === `chat-suggestion-item-${i}`) {
            useClearCommandSelection()
          }
        }
      }
    } else {
      commandItem.textContent = ``
      useClearCommandSelection()
    }
  }
}