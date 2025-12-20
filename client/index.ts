import { onPromise, triggerPromise } from '@trippler/tr_lib/client'

exports.tr_lib.init().control.onDisabled('T', () => {
  SendNuiMessage(JSON.stringify({ action: 'open' }))
  SetNuiFocus(true, false)
})

RegisterNuiCallback("focus", (_data: [string], callback: Function) => {
  SetNuiFocus(true, true)
  callback({})
})

RegisterNuiCallback("createNewMessageRequest", async (data: [string], callback: Function) => {
  const response = await triggerPromise("createNewMessageRequest", null, data[0])  
  callback({response})
})

RegisterNuiCallback("closeChat", (_data: [string], callback: Function) => {
  SetNuiFocus(false, false)
  callback({})
})

onPromise('createNewMessage', async (message: string, userDiscordId: string) => {
  if (!userDiscordId) return false
  const userRole = await triggerPromise('getDiscordUserRole', null, userDiscordId)
  SendNuiMessage(JSON.stringify({
    action: 'createNewMessage',
    message,
    userRole,
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