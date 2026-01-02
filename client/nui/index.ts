import { onNuiCallback, triggerNuiCallback } from "@trippler/tr_lib/client"
import { selecteGameMode } from "../modules"

onNuiCallback<{ mode: string }>('selectMode', (data, callback) => {
  selecteGameMode(data.mode)
  callback(true)
})

export const openMainMenu = () => triggerNuiCallback('open')