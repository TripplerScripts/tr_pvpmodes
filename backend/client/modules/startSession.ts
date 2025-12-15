export default () => {
  SendNuiMessage(JSON.stringify({
    action: 'open'
  }))
  SetNuiFocus(true, true)

  RegisterNuiCallback('startPlay', (data: any[], cb: Function) => {
    SetNuiFocus(false, false)
    if (data[0] === 'competitive') {
      exports.tr_competitive.start()
      cb(true)
    } else {
      if (data[0] === 'freeroam') {
        exports.tr_freeroam.start()
        cb(true)
      } else throw new Error('Invalid game mode invoked')
    }
  })
}