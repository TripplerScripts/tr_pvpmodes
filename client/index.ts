const lib = exports.tr_lib.init()

lib.control.onDisabled('T', () => {
  SendNuiMessage(JSON.stringify({ action: 'open' }))
  SetNuiFocus(true, true)
})

RegisterNuiCallback("createNewMessageRequest", (data: [string], callback: Function) => {
  const response = lib.callback.await("createNewMessageRequest", null, data[0])  
  callback({response})
})

RegisterNuiCallback("closeChat", (_data: [string], callback: Function) => {
  SetNuiFocus(false, false)
  callback({})
})

lib.callback.register('createNewMessage', (message: string) => {
  SendNuiMessage(JSON.stringify({
    action: 'createNewMessage',
    message
  }))
})

on('onResourceStop', (resourceName: string) => {
  if (resourceName === GetCurrentResourceName()) {
    emitNet('tr_onboarding/server/logout')
  }
})

exports('start', async () => {
  exports.tr_onboarding.startCharacterProcess([298.5893, -581.2991, 43.260, 111.2940], [298.5893, -581.2991, 43.260, 111.2940])
})