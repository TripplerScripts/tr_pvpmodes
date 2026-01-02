import './api'
import './nui'
import { openMainMenu } from './nui'
import { onDOMLoaded } from '@trippler/tr_lib/client'

const tick = setTick(() => {
  onDOMLoaded(() => {
    if (NetworkIsSessionStarted()) {
      openMainMenu()
      clearTick(tick)
    }
  })
})