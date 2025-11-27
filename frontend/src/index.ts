import openDashboard from './modules/openDashboard'
import closeDashboard from './modules/closeDashboard'
import './layouts/init'
import '../src/styles/index'

let resourceName = 'tr_competitive'
let isDashboardOn = false

window.addEventListener('message', (event: MessageEvent<any>) => {
  const API = event.data
  resourceName = API.resource
  if (API.action === 'open') {
    openDashboard(resourceName)
    isDashboardOn = true
  } else {
    if (API.action === 'close') {
      closeDashboard(resourceName)
      isDashboardOn = false
    }
  }
})

window.addEventListener('keydown', (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    if (isDashboardOn) {
      closeDashboard(resourceName)
    }
  }
})

openDashboard('tr_competitive')