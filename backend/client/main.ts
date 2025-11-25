const resourceName = GetCurrentResourceName()

const startMatchmaking = () => {
  exports.qbx_core.Notify('Started')
  emitNet('tr_competitive:server:startMatchmaking')
}

const closeDashboard = () => {
  exports.qbx_core.Notify('closed')
  SendNuiMessage(JSON.stringify({
    action: 'close',
  }))
  SetNuiFocus(false, false)
}

onNet('tr_competitive:client:shutDownDashboard', () => {
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
  SetNuiFocus(true, true)
}

RegisterCommand('ww', () => {
  exports.qbx_core.Notify('Opened')
  openClosedWorldGame()
}, false)