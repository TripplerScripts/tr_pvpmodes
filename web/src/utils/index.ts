import { CommandName, registeredCommands } from "../../../shared/constants/config"

const getCommands = () => Object.keys(registeredCommands) as (CommandName)[]

export const getCommandArguments = (command: CommandName) => {
  return registeredCommands[command]
}

export const findClosest = (input: string) => {
  const lower = input.toLowerCase()
  const command = getCommands().filter(word => word.toLowerCase().includes(lower)).sort((a, b) => {
    const aStarts = a.toLowerCase().startsWith(lower)
    const bStarts = b.toLowerCase().startsWith(lower)
    if (aStarts && !bStarts) return -1
    if (!aStarts && bStarts) return 1
    return a.length - b.length
  })
  return command
}

export const getFirstArgumentText = (characters: string) => {
  let filteredString = characters.slice(1)
  for (let i = 0; i < characters.length; i++) {
    if (characters[i] === ` `) {
      filteredString = characters.slice(1, i)
      break
    }
  }
  return filteredString
}

export const getCommandLastIndex = (characters: string) => {
  let index = 0
  for (let i = 0; i < characters.length; i++) {
    if (characters[i] === ` ` && characters[i - 1] !== ` `) {
      index++
    }
  }
  return index
}

export const isInShowRecentCommandsPosition = (characters: string) => {
  return characters.length === 1
}

export const isTextInCommandSyntax = (characters: string) => {
  return characters[0] === '/' && characters[1] !== ` `
}