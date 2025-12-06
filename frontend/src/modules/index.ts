import openDashboard from './openDashboard'
import closeDashboard from './closeDashboard'

let isDashboardOn = false

class PlayerDetails {
  avatar = 'https://r2.fivemanage.com/COKMc8Wcmk9K5dp547rEw/Lenix_924.png'
  level = 7
  name = 'Lenix'
  incomingAvatar = 'https://i.pravatar.cc/300'
  outgoingAvatar = 'https://i.pravatar.cc/300'
  userAvatar = 'https://i.pravatar.cc/300'
}

const playerDetails = new PlayerDetails()
console.log(playerDetails)

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