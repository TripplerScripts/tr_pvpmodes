import createElement from './createElement'
import sendCallback from './sendCallback'
import Button from '../components/button'

export default function openClosedWorldGame(resourceName: string) {
  const root = createElement('body', 'root')
  root.className = 'fixed w-full h-full flex items-end justify-center bg-transparent'

  let interval: any
  let isMatchmaking: boolean = false

  const button = Button({
    children: 'Start',
    onClick: (btn: any, count) => {
      if (!isMatchmaking) {
        sendCallback(resourceName, 'startMatchmaking')
        isMatchmaking = true
        let seconds = 0
        btn.setText(`Matchmaking... 0s`)
        interval = setInterval(() => {
          btn.setText(`Matchmaking... ${seconds++}s`)
        }, 1000)
      } else {
        sendCallback(resourceName, 'stopMatchmaking')
        clearInterval(interval)
        isMatchmaking = false
        btn.setText('Start')
      }
    },
    onHover: (btn) => {
      btn.className = btn.className.replace('bg-blue-500', 'bg-blue-700')
      if (isMatchmaking) btn.textContent = 'Cancel'
    },
    onHoverEnd: (btn) => {
      btn.className = btn.className.replace('bg-blue-700', 'bg-blue-500')
    }
  })
  root.appendChild(button)
}