import prepareCallbacks from './callbacks'
import startSession from './modules/startSession'

prepareCallbacks()

let DOMContentLoaded = false

onNet('tr_spawn/client/logout', () => {
  startSession()
})

on('onResourceStop', (resourceName: string) => {
  if (resourceName === GetCurrentResourceName()) {
    emitNet('tr_spawn/server/logout')
  }
})

setImmediate(() => {
  const interval = setInterval(() => {
    if (NetworkIsSessionStarted() && DOMContentLoaded) {
      startSession()
      clearInterval(interval)
    }
  }, 1000)
})

export default (state: boolean) => DOMContentLoaded = state