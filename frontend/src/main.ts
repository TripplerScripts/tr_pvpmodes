const createElement = (parent: string, id?: string | null) => {
  const element = document.createElement('div')
  if (id !== undefined && id !== null) {
    element.id = id
  }

  const parentElement = document.getElementById(parent)
  parentElement.appendChild(element);
  return element;
}

const openClosedWorldGame = (resourceName: string) => {
  const root = createElement('body', 'root')
  root.className = 'fixed w-full h-full flex items-end justify-center bg-transparent'

  const button = createElement('root')
  button.className = 'text-white text-xl font-bold py-2 px-4 rounded bg-blue-500 hover:bg-blue-700 cursor-pointer'
  button.innerHTML = 'Start'

  button.addEventListener('click', () => {
    fetch(`https://${resourceName}/startMatchmaking`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    })
  })
}

const closeDashaboard = () => {
  const root = document.getElementById('root')
  if (root) {
    root.remove()
  }
}

window.addEventListener('message', (event: MessageEvent<any>) => {
  const API = event.data
  if (API.action === 'open') {
    openClosedWorldGame(API.resource)
  } else {
    if (API.action === 'close') {
      closeDashaboard()
    }
  }
})

/* openClosedWorldGame({ endpoint: 'tr_competitive' }) */