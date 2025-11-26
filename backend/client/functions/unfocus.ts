import setCoords from '../wrappers/setCoords'

export default function unFocus(lastCoords: number[], camHandle: number) {
  exports.qbx_core.Notify('closed')
  SetNuiFocus(false, false)
  exports.tr_kit.destroyCam(camHandle)
  setTimeout(() => {
    setCoords(lastCoords)
  }, 200)
  FreezeEntityPosition(PlayerPedId(), false)
}