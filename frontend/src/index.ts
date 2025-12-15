import { sendCallback } from '@lenixdev/ui_components'
import openDashboard from './modules/openDashboard'

window.addEventListener('message', (event) => {
  if (event.data.action === 'open') {
    openDashboard()
  }
})

document.addEventListener('DOMContentLoaded', () => {
  sendCallback('DOMContentLoaded')
})
