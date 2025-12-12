import unFocus from '../../../modules/unfocus'

export default () => RegisterNuiCallback('unfocus', (_data, callback) => {
  unFocus(lastCoords, camHandle)
  callback(true)
})