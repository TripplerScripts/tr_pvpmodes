import { sendCallback } from '@lenixdev/ui_components'
import openDashboard from './modules/openDashboard'
import openClosingMenu from './modules/openClosingMenu'

window.addEventListener('message', (event) => {
  if (event.data.action === 'open') {
    openDashboard()
  } else {
    if (event.data.action === 'close') {
      openClosingMenu()
    }
  }
})

document.addEventListener('DOMContentLoaded', () => {
  sendCallback('DOMContentLoaded')
})