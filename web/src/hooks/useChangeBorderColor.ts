import { input } from "../features/input"
import { getCommandArguments, getPassedArgumentsFirstString } from "../utils"

let lastProperty: string

const changeBorderColor = (prorerty?: string) => {
  if (!prorerty) {
    input?.classList?.remove(`ring-1`) 
    return
  }
  input?.classList?.add(`ring-1`) 
  input?.classList?.remove(lastProperty) 
  input?.classList?.add(prorerty)  
  lastProperty = prorerty 
}

export default (characters: string) => {
  if (characters?.length < 2 || characters?.[0] !== `/`) {
    changeBorderColor()
    return
  }
  let index = 0
  for (let i = 0; i < characters.length; i++) {
    if (characters[i] !== ` ` && characters[i - 1] === ` `) {
      index++
    }
  }
  const CommandName = getPassedArgumentsFirstString(characters)
  if (index == getCommandArguments(CommandName)?.length) {
    changeBorderColor(`ring-green-600/60`)
    return
  }
  if (index > getCommandArguments(CommandName)?.length) {
    changeBorderColor(`ring-yellow-600/60`)
    return
  }
  changeBorderColor(`ring-red-600/60`)
}