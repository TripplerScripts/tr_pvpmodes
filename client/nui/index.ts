import { onNuiCallback } from "@trippler/tr_lib/client"
import { setModeSelected } from ".."

onNuiCallback<{ mode: string }>('selectMode', (data, callback) => {
  SetNuiFocus(false, false)
  if (data.mode === 'competitive') {
    globalThis.exports.tr_competitive.start()
    setModeSelected('competitive')
  } else {
    if (data.mode === 'freeroam') {
      globalThis.exports.tr_freeroam.start()
      setModeSelected('freeroam')
    } else throw new Error('Invalid game mode invoked')
  }
  callback(true)
})