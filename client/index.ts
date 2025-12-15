import prepareCallbacks from './callbacks/index'
import openMainMenu from './modules/openMainMenu'
import prepareExports from './exports'
import prepareEvents from './events'

prepareExports()
prepareCallbacks()
prepareEvents()

let DOMContentLoaded = false

setImmediate(() => {
  const interval = setInterval(() => {
    if (NetworkIsSessionStarted() && DOMContentLoaded) {
      openMainMenu()
      clearInterval(interval)
    }
  }, 1000)
})
export default (state: boolean) => DOMContentLoaded = state