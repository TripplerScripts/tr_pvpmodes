import './elements'
import './api'
import { triggerNuiCallback } from '@trippler/tr_lib/web'

document.addEventListener('DOMContentLoaded', () => {
  triggerNuiCallback('DOMContentLoaded')
})