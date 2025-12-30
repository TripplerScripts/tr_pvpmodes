import { triggerNuiCallback } from "@trippler/tr_lib/client"

export default () => {
  triggerNuiCallback('open')
  SetNuiFocus(true, true)
}