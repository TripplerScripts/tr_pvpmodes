import './api'
import './nui'
import './game'
import { openMainMenu } from './nui'
import { onDOMLoaded } from '@trippler/tr_lib/client'
import { fatal } from '@trippler/tr_lib/shared'

const isQboxCharactersHandlerDisabled = globalThis.exports[GetCurrentResourceName()].isQboxCharactersHandlerDisabled()

onDOMLoaded(() => {
  if (!isQboxCharactersHandlerDisabled) fatal('Qbox characters handler is enabled')
  const tick = setTick(() => {
    if (NetworkIsSessionStarted()) {
      openMainMenu()
      clearTick(tick)
    }
  })
})