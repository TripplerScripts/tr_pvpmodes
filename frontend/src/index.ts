import './elements/init'
import openDashboard from './modules/openDashboard'
import closeDashboard from './modules/closeGame'
import hideDashboard from './modules/hideDashboard'
import showDashboard from './modules/showDashboard'
import sendCallback from './components/sendCallback'

let isDashboardOn = false

window.addEventListener('message', async (event: MessageEvent<any>) => {
  const API = event.data
  const identity: number = API.identity

  if (API.action === 'open') {
    openDashboard(identity)
    isDashboardOn = true
    if (typeof identity === 'number') sendCallback('startCharacterProcess')
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