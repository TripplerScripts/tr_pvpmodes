import { toggleMenu,  } from '../modules'
import { onNuiCallback } from '@trippler/tr_lib/web'

onNuiCallback('openMainMenu', () => {
  toggleMenu(true)
})

onNuiCallback('closeMainMenu', () => {
  toggleMenu(false)
})