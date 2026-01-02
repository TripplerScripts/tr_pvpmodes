import { triggerNuiCallback } from "@trippler/tr_lib/client"

export const openEscapeMenu = () => {
  triggerNuiCallback('spawn/openEscapeMenu')
}