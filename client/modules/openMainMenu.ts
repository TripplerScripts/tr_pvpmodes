import { triggerNuiCallback } from "@trippler/tr_lib/client"

export default () => {
  triggerNuiCallback({
    action: 'open'
  })
  SetNuiFocus(true, true)
}