import prepareNuiCallbacks from './callbacks'
// import prepareEvents from './events'
import prepareExports from './exports'

// prepareEvents()
prepareNuiCallbacks()
prepareExports()

on('onResourceStop', (resourceName: string) => {
  if (resourceName === GetCurrentResourceName()) {
    emitNet('tr_spawn/server/logout')
  }
})