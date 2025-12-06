import unFocus from '../../modules/unfocus'

RegisterNuiCallback('startMatchmaking', (_data: Array<any>, callback: (response: any) => void) => {
  emitNet('tr_competitive:server:startMatchmaking')
  callback(true)
})

RegisterNuiCallback('stopMatchmaking', (_data: Array<any>, callback: (response: any) => void) => {
  emitNet('tr_competitive:server:stopMatchmaking')
  callback(true)
})

RegisterNuiCallback('unfocus', (_data: Array<any>, callback: (response: any) => void) => {
  unFocus(lastCoords, camHandle)
  callback(true)
})