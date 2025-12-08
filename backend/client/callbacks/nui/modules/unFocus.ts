import unFocus from '../../../modules/unfocus'

export default (): void => RegisterNuiCallback('unfocus', (_data: Array<any>, callback: (response: any) => void) => {
  unFocus(lastCoords, camHandle)
  callback(true)
})