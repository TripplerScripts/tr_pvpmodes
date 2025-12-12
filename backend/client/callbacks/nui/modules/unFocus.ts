import unFocus from '../../../modules/unfocus'

export default () => RegisterNuiCallback('unfocus', (_data: Array<any>, callback: (response: any) => void) => {
  unFocus(lastCoords, camHandle)
  callback(true)
})