import './callbacks/index'
import './exports'
import './events'
import openMainMenu from './modules/openMainMenu'

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