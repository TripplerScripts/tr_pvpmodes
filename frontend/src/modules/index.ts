import openDashboard from './openDashboard'
import closeDashboard from './closeDashboard'

let isDashboardOn = false

window.addEventListener('message', (event: MessageEvent<any>) => {
  const API = event.data
  const exist: boolean = API.exist
  if (API.action === 'open') {
    openDashboard(exist)
    isDashboardOn = true
  } else {
    if (API.action === 'close') {
      closeDashboard()
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