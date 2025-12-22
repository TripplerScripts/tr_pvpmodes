import './features'
import useMainIntrance from './hooks/useMainIntrance'
import { triggerNuiCallback } from '@trippler/tr_lib/web'

window.addEventListener('message', (event) => {
  if (event.data.action === 'open') {
    useMainIntrance(true)
  } else {
    if (event.data.action === 'close') {
    }
  }
})

document.addEventListener('DOMContentLoaded', () => {
  triggerNuiCallback('DOMContentLoaded')
})