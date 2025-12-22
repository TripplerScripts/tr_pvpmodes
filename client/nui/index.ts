import { onNuiCallback } from "@trippler/tr_lib/client"

onNuiCallback<{ mode: string }>('selectMode', (data, callback) => {
  SetNuiFocus(false, false)
  if (data.mode === 'competitive') {
    globalThis.exports.tr_competitive.start()
  } else {
    if (data.mode === 'freeroam') {
      globalThis.exports.tr_freeroam.start()
    } else throw new Error('Invalid game mode invoked')
  }
  callback(true)
})