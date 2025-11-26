import setCoords from '../wrappers/setCoords'

export default function unFocus(lastCoords: number[]) {
  exports.qbx_core.Notify('closed')
  SetNuiFocus(false, false)
  exports.tr_kit.destroyCam()
  setCoords(lastCoords)
}