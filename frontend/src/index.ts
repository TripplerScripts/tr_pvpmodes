import './elements/init'
import openDashboard from './modules/openDashboard'
import closeDashboard from './modules/closeDashboard'
import playerDetails from './modules/playerDetails'

let isDashboardOn = false

window.addEventListener('message', async (event: MessageEvent<any>) => {
  const API = event.data
  const identity: number = API.identity

  if (API.action === 'open') {
    await new playerDetails().getUserDetails(identity, true)
    openDashboard(identity)
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

openDashboard(2)