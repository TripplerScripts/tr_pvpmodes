import './api'
import './nui'
import openMainMenu from './nui/openMainMenu'
import { onDOMLoaded } from '@trippler/tr_lib/client'

export let modeSelected: string | undefined
export const setModeSelected = (mode: string) => modeSelected = mode

const tick = setTick(() => {
  onDOMLoaded(() => {
    if (NetworkIsSessionStarted()) {
      openMainMenu()
      clearTick(tick)
    }
  })
})