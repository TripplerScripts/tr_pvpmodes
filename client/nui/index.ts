import { onNuiCallback } from "@trippler/tr_lib/client"

onNuiCallback<{ mode: string }>('selectMode', (data, cb) => {
  SetNuiFocus(false, false)
  if (data.mode === 'competitive') {
    exports.tr_competitive.start()
  } else {
    if (data.mode === 'freeroam') {
      exports.tr_freeroam.start()
    } else throw new Error('Invalid game mode invoked')
  }
  cb(true)
})