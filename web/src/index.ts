import './elements/init'
import openDashboard from './modules/openDashboard'
import closeDashboard from './modules/closeGame'
import hideDashboard from './modules/hideDashboard'
import showDashboard from './modules/showDashboard'
import { sendCallback } from '@lenixdev/ui_components'

let isDashboardOn = false

window.addEventListener('message', async (event: MessageEvent<any>) => {
  const API = event.data
  const identity: number = API.identity

  if (API.action === 'open') {
    if (typeof identity === 'number') {
      const response = await sendCallback<boolean>('startCharacterProcess')
      if (!response) return
      openDashboard(identity)
      isDashboardOn = true
    } else {
      openDashboard(identity)
      isDashboardOn = true
    }
  } else {
    if (API.action === 'close') {
      closeDashboard(true)
      isDashboardOn = false
    } else {
      if (API.action === 'hide') {
        hideDashboard()
      } else {
        if (API.action === 'show') {
          showDashboard()
        }
      }
    }
  }
})

window.addEventListener('keydown', (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    if (isDashboardOn) {
      closeDashboard()
    }
  }
})