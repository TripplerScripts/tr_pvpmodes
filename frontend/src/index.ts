import openDashboard from './modules/openDashboard'

window.addEventListener('message', (event) => {
  if (event.data.action === 'open') {
    openDashboard()
  }
})