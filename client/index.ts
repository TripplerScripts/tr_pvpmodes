import './nui'
import './exports'

on('onResourceStop', (resourceName: string) => {
  if (resourceName === GetCurrentResourceName()) {
    emitNet('tr_onboarding/server/logout')
  }
})

export default (arg: object) => SendNuiMessage(JSON.stringify(arg))