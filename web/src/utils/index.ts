import { CommandName, registeredCommands } from "../../../shared/constants/config"

const getCommands = () => Object.keys(registeredCommands) as (CommandName)[]

export const getCommandArguments = (command: CommandName) => {
  return registeredCommands[command]
}

export const findClosest = (input: string) => {
  const lower = input.slice(1).toLowerCase()
  return getCommands()
    .filter(word => word.toLowerCase().includes(lower))
    .sort((a, b) => {
      const aStarts = a.toLowerCase().startsWith(lower)
      const bStarts = b.toLowerCase().startsWith(lower)
      if (aStarts && !bStarts) return -1
      if (!aStarts && bStarts) return 1
      return a.length - b.length
    })
}