import './nui'
import './exports'
import { triggerNuiCallback } from '@trippler/tr_lib/client'

on('onResourceStop', (resourceName: string) => {
  if (resourceName === GetCurrentResourceName()) {
    emitNet('tr_onboarding/server/logout')
  }
})

export default (arg: object) => triggerNuiCallback(arg)