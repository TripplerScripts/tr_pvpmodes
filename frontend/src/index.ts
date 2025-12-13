import './elements/init'
import openDashboard from './modules/openDashboard'
import closeDashboard from './modules/closeGame'

let isDashboardOn = false

window.addEventListener('message', async (event: MessageEvent<any>) => {
  const API = event.data
  const identity: number = API.identity

  if (API.action === 'open') {
    openDashboard(identity)
    isDashboardOn = true
  } else {
    if (API.action === 'close') {
      closeDashboard(true)
      isDashboardOn = false
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