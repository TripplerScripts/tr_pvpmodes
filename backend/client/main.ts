const resourceName = GetCurrentResourceName()

const startMatchmaking = () => {
  emitNet('tr_competitive:server:startMatchmaking')
}

const closeDashboard = () => {
  SendNuiMessage(JSON.stringify({
    action: 'close',
  }))
}

onNet('tr_competitive:client:startMatchmaking', () => {
  closeDashboard()
})

RegisterNuiCallback('startMatchmaking', (data: Object, callback: Function) => {
  startMatchmaking()
})

function openClosedWorldGame() {
  SendNuiMessage(JSON.stringify({
    action: 'open',
    resource: resourceName
  }))
}

RegisterCommand('a', () => {
  openClosedWorldGame()
}, false)