export default () => {
  SendNuiMessage(JSON.stringify({
    action: 'open'
  }))
  SetNuiFocus(true, true)

  RegisterNuiCallback('selectMode', (data, cb: Function) => {
    SetNuiFocus(false, false)
    if (data[0] === 'competitive') {
      exports.tr_competitive.start()
      cb({})
    } else {
      if (data[0] === 'freeroam') {
        exports.tr_freeroam.start()
        cb({})
      } else throw new Error('Invalid game mode invoked')
    }
  })
}