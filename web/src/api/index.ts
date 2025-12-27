import { triggerNuiCallback } from "@trippler/tr_lib/web"
import { getArrayfiedPassedCharacters } from "../utils"
import { hideChat } from ".."
import { changeBorderColor } from "../hooks/useChangeBorderColor"

export const passCommand = (raw: string) => {
  triggerNuiCallback('onCommand', { command: getArrayfiedPassedCharacters(raw) })
  changeBorderColor()
  hideChat()
}

export const grabCursor = () => {
  triggerNuiCallback('grabCursor')
}