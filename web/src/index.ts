import { sendCallback } from '@lenixdev/ui_components'
import './features'
import useMainIntrance from './hooks/useMainIntrance'

window.addEventListener('message', (event) => {
  if (event.data.action === 'open') {
    useMainIntrance(true)
  } else {
    if (event.data.action === 'close') {
    }
  }
})

document.addEventListener('DOMContentLoaded', () => {
  sendCallback('DOMContentLoaded')
})