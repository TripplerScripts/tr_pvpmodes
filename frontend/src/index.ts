import openDashboard from './modules/openDashboard'

window.addEventListener('message', (message) => {
  const data = message.data
  if (data.action === 'open') {
    openDashboard()
  }
})