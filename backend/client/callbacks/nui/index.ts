import unFocus from '../../modules/unfocus'
import startMatchmaking from '../../modules/startMatchmaking'
import stopMatchmaking from '../../modules/stopMatchmaking'

RegisterNuiCallback('startMatchmaking', (_data: Array<any>, callback: (response: any) => void) => {
  const response = startMatchmaking()
  callback(response)
})

RegisterNuiCallback('stopMatchmaking', (_data: Array<any>, callback: (response: any) => void) => {
  const response = stopMatchmaking()
  callback(response)
})

RegisterNuiCallback('unfocus', (_data: Array<any>, callback: (response: any) => void) => {
  unFocus(lastCoords, camHandle)
  callback(true)
})