import './elements/init'
import openDashboard from './modules/openDashboard'
import closeDashboard from './modules/closeDashboard'

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

openDashboard(true)
