import loadPlayer from "./loadPlayer"

export default () => {
  RegisterNuiCallback('DOMContentLoaded', (data: any[], cb: Function) => {
    SendNuiMessage(JSON.stringify({
      action: 'open'
    }))
    SetNuiFocus(true, true)

    RegisterNuiCallback('startPlay', (data: any[], cb: Function) => {
      SetNuiFocus(false, false)
      if (data[0] === 'competitive') {
        exports.tr_competitive.open()
        cb(true)
      } else {
        if (data[0] === 'freeroam') {
          loadPlayer()
          cb(true)
        } else throw new Error('Invalid game mode invoked')
      }
    })
    cb(true)
  })
}