import openMainMenu from '../hooks/useMenu'
import { nuiFocus, onNuiCallback } from '@trippler/tr_lib/web'

onNuiCallback('openMainMenu', () => {
  nuiFocus(true, true)
  openMainMenu(true)
})