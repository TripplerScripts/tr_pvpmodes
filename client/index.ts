import { triggerNuiCallback } from '@trippler/tr_lib/client'
import './exports'

exports.tr_lib.init().control.onDisabled('T', () => {
  triggerNuiCallback({ action: 'open' })
  SetNuiFocus(true, false)
})

on('onResourceStop', (resourceName: string) => {
  if (resourceName === GetCurrentResourceName()) {
    emitNet('tr_onboarding/server/logout')
  }
})