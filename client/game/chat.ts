import { control, triggerNuiCallback } from "@trippler/tr_lib/client"

control.onDisabled('T', () => {
  triggerNuiCallback({
    type: 'open'
  })
  SetNuiFocus(true, false)
})