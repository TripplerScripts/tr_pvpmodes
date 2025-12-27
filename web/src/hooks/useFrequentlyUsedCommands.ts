import { CommandName } from "../../../shared/types"

export const useStoreFrequentlyUsedCommands = (command: string) => {
  const previousStoredCommands = getStoredFrequentlyUsedCommands()
  for (const storedCommand of previousStoredCommands) {
    if (command === storedCommand) return
  }
  localStorage.setItem(`frequentlyUsedCommands`, JSON.stringify([command, ...previousStoredCommands]))
}

export const getStoredFrequentlyUsedCommands = (): CommandName[] => {
  return JSON.parse(localStorage.getItem(`frequentlyUsedCommands`) || `[]`)
}

export const clearStoredFrequentlyUsedCommands = () => {
  localStorage.removeItem(`frequentlyUsedCommands`)
}