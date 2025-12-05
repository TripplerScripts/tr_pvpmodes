import initOnBoarding from '../modules/onBoard'
import createUser from '../modules/createUser'

export default async function openClosedWorldGame(exist: boolean) {
  const root = document.getElementById('root')
  if (root && !exist) {
    const username: string = await initOnBoarding()
    createUser(username)
  }
  root.classList.remove('hidden')
}
  /*
  let interval: any
  let isMatchmaking: boolean = false
   Button({
    content: 'Start',
    styleName: 'button_static',
    parent: 'root',
    className: 'start-button',
    onClick: (btn: any) => {
      btn.setStyle('button_click')
      if (!isMatchmaking) {
        sendCallback(resourceName, 'startMatchmaking')
        isMatchmaking = true
        let seconds = 0
        interval = setInterval(() => {
          btn.setContent(`Matchmaking... ${seconds++}s`)
        }, 1000)
      } else {
        sendCallback(resourceName, 'stopMatchmaking')
        clearInterval(interval)
        isMatchmaking = false
        btn.setContent('Start')
      }
    },
    onHover: (btn: any) => {
      btn.setStyle('button_hover')
    }
  })

  Button({
    parent: 'root',
    content: '<i class="fas fa-user-plus"></i>',
    className: 'invite-button',
    styleName: 'button_static',
    onClick: (btn: any) => {
      expandFriendsPanel()
    },
    onHover: (btn: any) => {
      btn.setStyle('button_hover')
    }
  }) */