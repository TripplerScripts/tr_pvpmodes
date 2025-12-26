import { triggerNuiCallback } from "@trippler/tr_lib/web"
import { getArrayfiedPassedCharacters } from "../utils"
import { hideChat } from ".."

export const passCommand = (raw: string) => {
  triggerNuiCallback('onCommand', { command: getArrayfiedPassedCharacters(raw) })
  hideChat()
}