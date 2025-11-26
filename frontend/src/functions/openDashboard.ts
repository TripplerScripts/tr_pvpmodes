import createElement from './createElement'
import sendCallback from './sendCallback'

export default function openClosedWorldGame(resourceName: string) {
  const root = createElement('body', 'root')
  root.className = 'fixed w-full h-full flex items-end justify-center bg-transparent'

  const button = createElement('root')
  button.className = 'text-white text-xl font-bold py-2 px-4 rounded bg-blue-500 hover:bg-blue-700 cursor-pointer'
  button.innerHTML = 'Start'

  button.addEventListener('click', () => {
    sendCallback(resourceName, 'startMatchmaking')
  })
}