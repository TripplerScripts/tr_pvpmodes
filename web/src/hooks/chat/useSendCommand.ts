import { triggerNuiCallback } from "@trippler/tr_lib/web"
import { getArrayfiedPassedCharacters } from "../../utils/chat"
import { changeBorderColor } from "./useChangeBorderColor"
import useHideChat from "./useHideChat"

export default (raw: string) => {
  triggerNuiCallback<boolean>('chat/sendCommand', { command: getArrayfiedPassedCharacters(raw) })
  changeBorderColor()
  useHideChat()
}