const lib = exports.tr_lib.init()

lib.keybind.onPress('lalt', () => {
  console.log('lalt pressed')
})

RegisterNuiCallback("createNewMessageRequest", (data: [string], callback: Function) => {
  const response = lib.callback.await("createNewMessageRequest", data[0])  
  callback({response})
})

lib.callback.register('createNewMessage', (message: string) => {
  SendNuiMessage(JSON.stringify({
    action: 'createNewMessage',
    message: message
  }))
})
console.log(true)
on('onResourceStop', (resourceName: string) => {
  if (resourceName === GetCurrentResourceName()) {
    emitNet('tr_onboarding/server/logout')
  }
})

exports('start', async () => {
  exports.tr_onboarding.startCharacterProcess([298.5893, -581.2991, 43.260, 111.2940], [298.5893, -581.2991, 43.260, 111.2940])
})